"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getTotalItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center py-20">
        <div className="text-center max-w-md">
          <div className="bg-secondary-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="text-secondary-400" size={48} />
          </div>
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">
            Your Enquiry Cart is Empty
          </h1>
          <p className="text-secondary-600 mb-8">
            Add products to your cart to request a bulk enquiry
          </p>
          <Link href="/products" className="btn-primary inline-flex items-center gap-2">
            Browse Products
            <ArrowRight size={20} />
          </Link>
        </div>
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
              Enquiry Cart
            </h1>
            <p className="text-xl text-primary-100">
              Review your selected products and submit an enquiry
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex gap-6">
                  <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-secondary-100">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <div>
                        <p className="text-sm text-primary-600 font-semibold mb-1">
                          {item.product.category}
                        </p>
                        <h3 className="text-xl font-bold text-secondary-900">
                          {item.product.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                        title="Remove from cart"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
                      {item.product.shortDescription}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center border-2 border-secondary-300 rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="p-2 hover:bg-secondary-100 transition-colors"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="px-4 font-semibold">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-2 hover:bg-secondary-100 transition-colors"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Enquiry Summary
              </h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-secondary-200">
                <div className="flex justify-between">
                  <span className="text-secondary-600">Total Items:</span>
                  <span className="font-semibold text-secondary-900">
                    {getTotalItems()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Unique Products:</span>
                  <span className="font-semibold text-secondary-900">
                    {cartItems.length}
                  </span>
                </div>
              </div>

              <Link
                href="/enquiry"
                className="btn-primary w-full text-center flex items-center justify-center gap-2 mb-4"
              >
                Proceed to Enquiry
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/products"
                className="btn-outline w-full text-center block"
              >
                Continue Shopping
              </Link>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-secondary-700">
                  <strong>Note:</strong> This is an enquiry cart. No payment will
                  be processed. Our team will contact you with a custom quote based
                  on your requirements.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
