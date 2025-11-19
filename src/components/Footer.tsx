"use client";

import Link from "next/link";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { categories } from "@/data/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Heart size={28} fill="white" className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold">
                  FirstAid<span className="text-primary-400">Pro</span>
                </h2>
              </div>
            </Link>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Your trusted partner in professional first aid solutions. Providing
              high-quality medical supplies and safety equipment since 2010.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-secondary-800 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-secondary-800 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-secondary-800 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-secondary-800 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-secondary-300 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-secondary-300 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-secondary-300 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-secondary-300 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary-300 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="text-secondary-300 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-secondary-300">
                  123 Medical Plaza, Suite 400
                  <br />
                  Healthcare District, NY 10001
                </span>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  <Phone className="text-primary-400 flex-shrink-0" size={20} />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@firstaidpro.com"
                  className="flex items-center gap-3 text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  <Mail className="text-primary-400 flex-shrink-0" size={20} />
                  info@firstaidpro.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-400">
            <p>
              &copy; {currentYear} FirstAidPro. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-primary-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
