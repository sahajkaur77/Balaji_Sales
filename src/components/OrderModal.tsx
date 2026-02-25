"use client";

import { useState } from "react";

interface OrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
}

export default function OrderModal({
    isOpen,
    onClose,
    productName,
}: OrderModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        quantity: "1",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    productName,
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                // Reset after success
                setTimeout(() => {
                    onClose();
                    setIsSuccess(false);
                    setFormData({ name: "", phone: "", quantity: "1", message: "" });
                }, 3000);
            } else {
                alert("Failed to place order. Please try calling us instead.");
            }
        } catch (error) {
            console.error("Order error:", error);
            alert("Something went wrong. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <div
                className="absolute inset-0 bg-secondary/60 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
                <div className="bg-primary p-6 text-white overflow-hidden relative">
                    <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                    <h2 className="text-2xl font-bold relative z-10">Place Order</h2>
                    <p className="text-white/80 text-sm relative z-10">
                        For: <span className="font-semibold text-white">{productName}</span>
                    </p>
                </div>

                <div className="p-8">
                    {isSuccess ? (
                        <div className="py-12 text-center">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-2">Order Received!</h3>
                            <p className="text-gray-500 text-sm">The manager has been notified. We will call you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5 ml-1">Your Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5 ml-1">Phone Number</label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5 ml-1">Quantity</label>
                                    <input
                                        type="number"
                                        min="1"
                                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                        value={formData.quantity}
                                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                    />
                                </div>
                                <div className="flex flex-col justify-end">
                                    <p className="text-[10px] text-gray-400 mb-4 leading-tight italic">
                                        Final rates will be confirmed on call.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5 ml-1">Message (Optional)</label>
                                <textarea
                                    placeholder="Any special requirements?"
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm min-h-[100px] resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full bg-secondary text-white py-4 rounded-2xl font-bold text-sm hover:bg-primary transition-all shadow-xl shadow-secondary/10 flex items-center justify-center gap-2 mt-4 active:scale-95 disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Processing...
                                    </>
                                ) : "Confirm Order"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
