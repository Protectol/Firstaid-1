"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  ShoppingCart,
  Check,
  ArrowRight,
  ChevronLeft,
  Plus,
  Minus,
  Package,
  Shield,
  Truck,
  Award,
} from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const product = products.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isInCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">
            Product Not Found
          </h1>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-secondary-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              Home
            </Link>
            <span className="text-secondary-400">/</span>
            <Link
              href="/products"
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              Products
            </Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-900 font-medium line-clamp-1">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container-custom">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-secondary-600 hover:text-primary-600 mb-8 transition-colors"
          >
            <ChevronLeft size={20} />
            Back
          </button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative aspect-square rounded-2xl overflow-hidden bg-secondary-100 mb-4"
              >
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.inStock && (
                  <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
                    In Stock
                  </div>
                )}
              </motion.div>

              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-primary-600"
                          : "border-transparent hover:border-secondary-300"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <p className="text-primary-600 font-semibold mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-secondary-900 mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-secondary-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-secondary-100 transition-colors"
                    >
                      <Minus size={20} />
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-20 text-center font-semibold focus:outline-none"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-secondary-100 transition-colors"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 btn-primary flex items-center justify-center gap-2 py-4"
                  >
                    <ShoppingCart size={20} />
                    {isInCart(product.id) ? "Update Cart" : "Add to Enquiry Cart"}
                  </button>
                </div>
              </div>

              <Link
                href="/enquiry"
                className="btn-secondary w-full text-center flex items-center justify-center gap-2 mb-8"
              >
                Request Quote
                <ArrowRight size={20} />
              </Link>

              {/* Features */}
              <div className="border-t border-secondary-200 pt-8 mb-8">
                <h3 className="text-lg font-bold text-secondary-900 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check
                        className="text-primary-600 flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-secondary-50 rounded-lg">
                  <Shield className="text-primary-600" size={24} />
                  <div>
                    <p className="font-semibold text-sm text-secondary-900">
                      Quality Assured
                    </p>
                    <p className="text-xs text-secondary-600">
                      Certified Products
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary-50 rounded-lg">
                  <Truck className="text-primary-600" size={24} />
                  <div>
                    <p className="font-semibold text-sm text-secondary-900">
                      Fast Delivery
                    </p>
                    <p className="text-xs text-secondary-600">
                      Quick Shipping
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                <Package className="text-primary-600" />
                Specifications
              </h2>
              <dl className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between border-b border-secondary-200 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="font-semibold text-secondary-900">{key}</dt>
                    <dd className="text-secondary-600">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="card p-8 bg-gradient-to-br from-primary-50 to-white">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                <Award className="text-primary-600" />
                Why Choose This Product
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-secondary-900">
                      Professional Grade
                    </p>
                    <p className="text-sm text-secondary-600">
                      Meets all industry standards and regulations
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-secondary-900">
                      Trusted Quality
                    </p>
                    <p className="text-sm text-secondary-600">
                      Used by thousands of satisfied customers
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-secondary-900">
                      Expert Support
                    </p>
                    <p className="text-sm text-secondary-600">
                      Our team is here to help with any questions
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-secondary-50">
          <div className="container-custom">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8">
              Related Products
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.slug}`}
                  className="card group hover:shadow-hover"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-primary-600 font-semibold mb-2">
                      {relatedProduct.category}
                    </p>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-secondary-600 text-sm line-clamp-2">
                      {relatedProduct.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
