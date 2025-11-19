"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Award,
  Users,
  Truck,
  CheckCircle,
  Heart,
  Package,
  AlertCircle,
  GraduationCap,
  Briefcase,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function HomePage() {
  const { addToCart } = useCart();
  const featuredProducts = products.filter((p) => p.featured);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "First Aid Products for Every Need",
      subtitle: "Professional Medical Solutions",
      description: "Discover our comprehensive range of professional-grade first aid kits, medical supplies, and safety equipment.",
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
      cta1: "Browse Products",
      cta2: "Request Quote",
    },
    {
      title: "Professional Grade Emergency Equipment",
      subtitle: "Industry Leading Quality",
      description: "Trusted by thousands of organizations worldwide for reliability and compliance with safety standards.",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&q=80",
      cta1: "View Solutions",
      cta2: "Get Started",
    },
    {
      title: "Complete Safety Solutions",
      subtitle: "Expert Support & Service",
      description: "From consultation to delivery, we provide comprehensive support for all your first aid needs.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
      cta1: "Learn More",
      cta2: "Contact Us",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Carousel Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container-custom relative z-10 w-full py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-4 px-4 py-2 bg-primary-100 rounded-full"
                >
                  <span className="text-primary-700 font-semibold text-sm">
                    {heroSlides[currentSlide].subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl lg:text-7xl font-bold text-secondary-900 mb-6 leading-tight"
                >
                  {heroSlides[currentSlide].title.split(" ").slice(0, -2).join(" ")}
                  <span className="text-gradient"> {heroSlides[currentSlide].title.split(" ").slice(-2).join(" ")}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-secondary-600 mb-8 leading-relaxed"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link href="/products" className="btn-primary inline-flex items-center gap-2 justify-center">
                    {heroSlides[currentSlide].cta1}
                    <ArrowRight size={20} />
                  </Link>
                  <Link href="/enquiry" className="btn-outline inline-flex items-center gap-2 justify-center">
                    {heroSlides[currentSlide].cta2}
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 flex flex-wrap gap-8 items-center"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600" size={24} />
                    <span className="text-secondary-700 font-medium">
                      OSHA Compliant
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600" size={24} />
                    <span className="text-secondary-700 font-medium">
                      FDA Approved
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-primary-600" size={24} />
                    <span className="text-secondary-700 font-medium">
                      ISO Certified
                    </span>
                  </div>
                </motion.div>
              </div>

              <div className="relative">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-premium">
                  <Image
                    src={heroSlides[currentSlide].image}
                    alt="First Aid Kit"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-premium">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Users className="text-primary-600" size={28} />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-secondary-900">10K+</p>
                      <p className="text-secondary-600">Happy Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-primary-600" : "w-2 bg-secondary-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Award, value: "15+", label: "Years Experience" },
              { icon: Users, value: "10K+", label: "Clients Served" },
              { icon: Package, value: "500+", label: "Products" },
              { icon: Shield, value: "100%", label: "Quality Guaranteed" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center text-white"
              >
                <stat.icon className="mx-auto mb-4" size={48} strokeWidth={1.5} />
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-primary-100">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Explore our most popular first aid products trusted by
              professionals worldwide
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="card group hover:shadow-hover cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.inStock && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      In Stock
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary-600 font-semibold mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-secondary-600 mb-6 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex-1 text-center btn-secondary text-sm py-2 px-4"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 text-center btn-primary text-sm py-2 px-4"
                    >
                      Add to Enquiry
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="btn-outline inline-flex items-center gap-2"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section - FIXED */}
      <section className="py-24 bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Browse our comprehensive range of first aid and safety products
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories.map((category) => {
              const IconComponent = {
                Package,
                Heart,
                AlertCircle,
                Shield,
                GraduationCap,
                Briefcase,
              }[category.icon] || Package;

              return (
                <motion.div key={category.id} variants={fadeInUp}>
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="card p-6 hover:shadow-hover group block h-full"
                  >
                    <div className="bg-primary-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                      <IconComponent
                        className="text-primary-600 group-hover:text-white transition-colors"
                        size={28}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <span className="text-primary-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                      Explore
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
              Why Choose FirstAidPro?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality first aid solutions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "Premium Quality",
                description:
                  "All our products meet or exceed industry standards and are sourced from trusted manufacturers.",
              },
              {
                icon: Award,
                title: "Expert Guidance",
                description:
                  "Our team of medical professionals helps you choose the right products for your specific needs.",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                description:
                  "Quick and reliable shipping to ensure you get your first aid supplies when you need them.",
              },
              {
                icon: Users,
                title: "Trusted by Thousands",
                description:
                  "Join over 10,000 satisfied customers who trust us for their first aid needs.",
              },
              {
                icon: CheckCircle,
                title: "Compliance Assured",
                description:
                  "OSHA, ANSI, and FDA compliant products to keep your workplace safe and legal.",
              },
              {
                icon: Heart,
                title: "Customer Support",
                description:
                  "Dedicated customer service team ready to assist you with any questions or concerns.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-8 text-center hover:shadow-hover"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sarah Johnson",
                role: "Safety Manager, TechCorp",
                content:
                  "FirstAidPro has been our go-to supplier for three years. Their products are top-notch, and their customer service is exceptional. Highly recommended!",
              },
              {
                name: "Michael Chen",
                role: "School Principal",
                content:
                  "We equipped our entire school with first aid kits from FirstAidPro. The quality is outstanding, and the team helped us ensure full compliance.",
              },
              {
                name: "Emily Rodriguez",
                role: "HR Director, Manufacturing Inc",
                content:
                  "The industrial first aid station we purchased has been invaluable. It's well-organized, comprehensive, and our employees know exactly where to find what they need.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-8 hover:shadow-hover"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-yellow-400"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-secondary-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold text-secondary-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-secondary-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Enhance Your Safety?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get in touch with our team to discuss your first aid and safety
              equipment needs. We're here to help you find the perfect solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/enquiry"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Request a Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-white hover:text-primary-600 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
