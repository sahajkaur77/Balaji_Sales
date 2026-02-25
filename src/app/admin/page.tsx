"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

interface Order {
    id: string;
    name: string;
    phone: string;
    productName: string;
    quantity: string;
    message: string;
    status: string;
    createdAt: string;
}

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") {
            setIsLoggedIn(true);
            fetchOrders();
        } else {
            alert("Invalid password");
        }
    };

    const fetchOrders = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/orders");
            const data = await res.json();
            setOrders(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-secondary flex items-center justify-center px-6">
                <div className="w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center font-bold text-white text-3xl mx-auto mb-4">
                            S
                        </div>
                        <h1 className="text-2xl font-bold text-secondary">Manager Login</h1>
                        <p className="text-gray-400 text-sm mt-2">Enter your password to view orders</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <input
                            type="password"
                            placeholder="Manager Password"
                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-secondary transition-all shadow-xl shadow-primary/20"
                        >
                            Access Dashboard
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <Navbar />
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-black text-secondary">Order Dashboard</h1>
                        <p className="text-gray-500 text-sm mt-1">Manage incoming inquiries and orders</p>
                    </div>
                    <button
                        onClick={fetchOrders}
                        className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-2xl text-sm font-bold shadow-sm hover:shadow-md transition-all active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-)4.992m-.001 0 1.515 1.516a9 9 0 1 0-1.954 10.515" />
                        </svg>
                        Refresh
                    </button>
                </div>

                {loading ? (
                    <div className="py-20 text-center text-gray-400">Loading orders...</div>
                ) : orders.length === 0 ? (
                    <div className="py-20 bg-white rounded-[2rem] border border-dashed border-gray-200 text-center">
                        <p className="text-gray-400">No orders received yet.</p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-start md:items-center justify-between"
                            >
                                <div className="flex gap-6 items-start">
                                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-1">
                                            <h3 className="text-lg font-bold text-secondary">{order.name}</h3>
                                            <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                                                {order.status}
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium text-gray-500 mb-2">{order.phone}</p>
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <span className="font-bold text-secondary">{order.productName}</span>
                                            <span>•</span>
                                            <span>Qty: {order.quantity}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-grow max-w-md">
                                    <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-2xl italic leading-relaxed">
                                        "{order.message || 'No message provided'}"
                                    </p>
                                </div>

                                <div className="flex flex-col items-end gap-2 text-right">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                                        {new Date(order.createdAt).toLocaleDateString()} at {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                    <div className="flex gap-2">
                                        <div className="flex gap-2">
                                            <a
                                                href={`tel:${order.phone}`}
                                                className="bg-gray-100 text-secondary px-6 py-3 rounded-xl text-xs font-bold hover:bg-gray-200 transition-all flex items-center gap-2"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                                </svg>
                                                Call
                                            </a>
                                            <a
                                                href={`https://wa.me/${order.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${order.name}, this is Balaji Sales. We received your order for ${order.productName} (Qty: ${order.quantity}). Shall we discuss the rates?`)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-green-500 text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-green-600 transition-all flex items-center gap-2"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                                </svg>
                                                WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
