"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Package,
  GraduationCap,
  Repeat,
  Truck,
  FileCheck,
  Headphones,
  ArrowRight,
  CheckCircle,
  Building,
  Heart,
  Shield,
  Users,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Package,
      title: "Custom First Aid Kits",
      description:
        "We create tailored first aid solutions designed specifically for your industry, workplace size, and unique requirements.",
      features: [
        "Industry-specific configurations",
        "Compliance with local regulations",
        "Scalable for any facility size",
        "Expert consultation included",
      ],
    },
    {
      icon: GraduationCap,
      title: "Training & Certification",
      description:
        "Professional first aid and CPR training programs delivered by certified instructors to keep your team prepared.",
      features: [
        "CPR & AED certification courses",
        "First aid response training",
        "Workplace safety workshops",
        "On-site or virtual options",
      ],
    },
    {
      icon: Repeat,
      title: "Subscription & Restocking",
      description:
        "Never run out of essential supplies with our automated restocking service and subscription plans.",
      features: [
        "Automatic restocking schedules",
        "Expiry date monitoring",
        "Flexible delivery options",
        "Volume discounts available",
      ],
    },
    {
      icon: FileCheck,
      title: "Compliance Audits",
      description:
        "Comprehensive safety audits to ensure your first aid equipment meets all OSHA, ANSI, and local requirements.",
      features: [
        "Complete facility inspection",
        "Compliance reporting",
        "Recommendation reports",
        "Follow-up support",
      ],
    },
    {
      icon: Truck,
      title: "Emergency Delivery",
      description:
        "Fast-track delivery service for urgent first aid supply needs, with same-day delivery available in select areas.",
      features: [
        "Same-day delivery options",
        "Priority order processing",
        "Real-time tracking",
        "24/7 emergency hotline",
      ],
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description:
        "Expert guidance and support from our team of medical professionals and safety specialists.",
      features: [
        "Medical professional consultation",
        "Product selection guidance",
        "Technical support",
        "Ongoing customer service",
      ],
    },
  ];

  const industries = [
    {
      icon: Building,
      title: "Corporate Offices",
      description:
        "Complete first aid solutions for office environments of all sizes",
    },
    {
      icon: Heart,
      title: "Healthcare Facilities",
      description: "Specialized medical supplies for clinics and care centers",
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Safe and compliant first aid kits for schools and colleges",
    },
    {
      icon: Shield,
      title: "Industrial Sites",
      description: "Heavy-duty safety equipment for manufacturing and construction",
    },
    {
      icon: Users,
      title: "Sports Facilities",
      description: "Sports-specific first aid solutions for athletic venues",
    },
    {
      icon: Package,
      title: "Retail Spaces",
      description: "Comprehensive safety products for retail environments",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Comprehensive first aid solutions and support services tailored to
              your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Professional services designed to keep your workplace safe and
              compliant
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8 hover:shadow-hover group"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                  <service.icon
                    className="text-primary-600 group-hover:text-white transition-colors"
                    size={32}
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary-700 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle
                        className="text-primary-600 flex-shrink-0 mt-0.5"
                        size={18}
                      />
                      <span className="text-sm text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Trusted by organizations across diverse sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card p-6 hover:shadow-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-xl group-hover:bg-primary-600 transition-colors">
                    <industry.icon
                      className="text-primary-600 group-hover:text-white transition-colors"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-secondary-600">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Simple, straightforward process from enquiry to delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Contact Us",
                description:
                  "Reach out via our website, phone, or email with your requirements",
              },
              {
                number: "02",
                title: "Consultation",
                description:
                  "Our experts assess your needs and recommend the best solutions",
              },
              {
                number: "03",
                title: "Custom Quote",
                description:
                  "Receive a detailed quote tailored to your specific requirements",
              },
              {
                number: "04",
                title: "Delivery & Support",
                description:
                  "Fast delivery with ongoing support and service from our team",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact us today to discuss how we can help improve safety in your
              workplace
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
