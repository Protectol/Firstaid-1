"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Menu,
  X,
  Heart,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/products";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:text-primary-100 transition-colors"
              >
                <Phone size={14} />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:info@firstaidpro.com"
                className="flex items-center gap-2 hover:text-primary-100 transition-colors"
              >
                <Mail size={14} />
                <span>info@firstaidpro.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span>Professional First Aid Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary-600 p-2 rounded-lg group-hover:bg-primary-700 transition-colors">
                <Heart className="text-white" size={28} fill="white" />
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-secondary-900">
                  FirstAid<span className="text-primary-600">Pro</span>
                </h1>
                <p className="text-xs text-secondary-600 -mt-1">
                  Safety First, Always
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && setIsProductsOpen(true)
                  }
                  onMouseLeave={() =>
                    item.hasDropdown && setIsProductsOpen(false)
                  }
                >
                  <Link
                    href={item.href}
                    className="text-secondary-700 hover:text-primary-600 font-medium transition-colors flex items-center gap-1 py-2"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown size={16} />}
                  </Link>

                  {/* Products Dropdown */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-premium p-4"
                        >
                          <div className="space-y-2">
                            <Link
                              href="/products"
                              className="block px-4 py-2 text-secondary-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors font-medium"
                            >
                              All Products
                            </Link>
                            {categories.slice(0, 5).map((category) => (
                              <Link
                                key={category.id}
                                href={`/products?category=${category.slug}`}
                                className="block px-4 py-2 text-secondary-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                              >
                                {category.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <Link
                href="/enquiry"
                className="hidden lg:block btn-primary text-sm py-2 px-6"
              >
                Request Enquiry
              </Link>

              <Link
                href="/cart"
                className="relative p-2 hover:bg-primary-50 rounded-full transition-colors"
              >
                <ShoppingCart className="text-secondary-700" size={24} />
                {getTotalItems() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold"
                  >
                    {getTotalItems()}
                  </motion.span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-primary-50 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="text-secondary-700" size={24} />
                ) : (
                  <Menu className="text-secondary-700" size={24} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-secondary-200 overflow-hidden"
            >
              <div className="container-custom py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-secondary-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/enquiry"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block btn-primary text-center mt-4"
                >
                  Request Enquiry
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
