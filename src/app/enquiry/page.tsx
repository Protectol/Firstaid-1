"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Send,
  CheckCircle,
  ArrowRight,
  ShoppingBag,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function EnquiryPage() {
  const { cartItems, getTotalItems, clearCart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Clear cart after successful submission
    setTimeout(() => {
      clearCart();
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl card p-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="text-green-600" size={48} />
          </motion.div>
          <h1 className="text-4xl font-display font-bold text-secondary-900 mb-4">
            Enquiry Submitted Successfully!
          </h1>
          <p className="text-xl text-secondary-600 mb-8">
            Thank you for your enquiry. Our team will review your request and get
            back to you within 24 hours with a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary inline-flex items-center gap-2">
              Browse More Products
              <ArrowRight size={20} />
            </Link>
            <Link href="/" className="btn-outline inline-flex items-center gap-2">
              Back to Home
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
              Request a Quote
            </h1>
            <p className="text-xl text-primary-100">
              Fill out the form below and we'll get back to you with a custom quote
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12">
        {cartItems.length === 0 ? (
          <div className="text-center py-20 card max-w-2xl mx-auto">
            <div className="bg-secondary-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="text-secondary-400" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              No Items in Your Cart
            </h2>
            <p className="text-secondary-600 mb-8">
              Please add some products to your cart before submitting an enquiry
            </p>
            <Link href="/products" className="btn-primary inline-flex items-center gap-2">
              Browse Products
              <ArrowRight size={20} />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card p-8"
              >
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                  Your Information
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-secondary-900 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400"
                          size={20}
                        />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input-field pl-12"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-secondary-900 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400"
                          size={20}
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input-field pl-12"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-secondary-900 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400"
                          size={20}
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="input-field pl-12"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-secondary-900 mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400"
                          size={20}
                        />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="input-field pl-12"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary-900 mb-2">
                      Additional Message
                    </label>
                    <div className="relative">
                      <MessageSquare
                        className="absolute left-4 top-4 text-secondary-400"
                        size={20}
                      />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="input-field pl-12 resize-none"
                        placeholder="Tell us more about your requirements, delivery timeline, or any special requests..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Submit Enquiry
                      </>
                    )}
                  </button>

                  <p className="text-sm text-secondary-600 text-center">
                    By submitting this form, you agree to our{" "}
                    <Link href="/privacy" className="text-primary-600 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="text-primary-600 hover:underline">
                      Terms of Service
                    </Link>
                  </p>
                </form>
              </motion.div>
            </div>

            {/* Cart Summary */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card p-6 sticky top-24"
              >
                <h2 className="text-xl font-bold text-secondary-900 mb-6">
                  Products ({getTotalItems()} items)
                </h2>

                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-3 pb-4 border-b border-secondary-200 last:border-0"
                    >
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-secondary-100">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-secondary-900 line-clamp-2 mb-1">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-secondary-600">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/cart"
                  className="btn-outline w-full text-center block mb-4"
                >
                  Edit Cart
                </Link>

                <div className="p-4 bg-primary-50 rounded-lg">
                  <p className="text-sm text-secondary-700">
                    <strong>What happens next?</strong>
                    <br />
                    Our team will review your enquiry and send you a detailed
                    quote within 24 hours.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
