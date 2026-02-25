import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Resend } from 'resend';

const DB_PATH = path.join(process.cwd(), 'src', 'db.json');
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, productName, quantity, message } = body;

        if (!name || !phone || !productName) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Read current DB (Create if not exists)
        if (!fs.existsSync(DB_PATH)) {
            fs.writeFileSync(DB_PATH, JSON.stringify({ orders: [], products: [] }));
        }
        const dbData = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));

        // Add new order
        const newOrder = {
            id: Date.now().toString(),
            name,
            phone,
            productName,
            quantity,
            message,
            status: 'new',
            createdAt: new Date().toISOString(),
        };

        dbData.orders.unshift(newOrder);
        fs.writeFileSync(DB_PATH, JSON.stringify(dbData, null, 2));

        // Send Email Notification to Manager (Non-blocking)
        try {
            if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_123456789') {
                await resend.emails.send({
                    from: 'Balaji Sales <onboarding@resend.dev>',
                    to: process.env.MANAGER_EMAIL || 'himanshumathani77@gmail.com',
                    subject: `New Order: ${productName} by ${name}`,
                    html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px;">
              <h2 style="color: #F39200;">New Order Received</h2>
              <p><strong>Customer:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Product:</strong> ${productName}</p>
              <p><strong>Quantity:</strong> ${quantity}</p>
              <p><strong>Message:</strong> ${message || 'No message'}</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
              <p style="font-size: 12px; color: #999;">Manage this order at: <a href="http://localhost:3000/admin">Admin Dashboard</a></p>
            </div>
          `
                });
            }
        } catch (emailErr) {
            console.error('Email failed but order was saved:', emailErr);
        }

        return NextResponse.json({ success: true, order: newOrder });
    } catch (error) {
        console.error('Error saving order:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const dbData = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
        return NextResponse.json(dbData.orders);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
