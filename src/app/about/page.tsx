"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award,
  Users,
  Target,
  Heart,
  Shield,
  TrendingUp,
  CheckCircle,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

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
              About FirstAidPro
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Leading provider of professional first aid solutions, dedicated to
              keeping people safe since 2010
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6 break-words">
                Our Story
              </h2>
              <div className="space-y-4 text-secondary-700 leading-relaxed break-words">
                <p>
                  Founded in 2010, FirstAidPro began with a simple mission: to make
                  professional-grade first aid supplies accessible to everyone.
                  What started as a small operation has grown into a trusted
                  nationwide supplier serving thousands of businesses, schools, and
                  organizations.
                </p>
                <p>
                  Our founder, Dr. Sarah Mitchell, a former emergency room
                  physician, recognized the critical need for high-quality,
                  compliant first aid products in workplaces and public spaces. Her
                  vision was to create a company that didn't just sell products,
                  but provided complete safety solutions backed by medical
                  expertise.
                </p>
                <p>
                  Today, we're proud to be a leading provider of first aid
                  equipment, serving over 10,000 clients across the country. Every
                  product we offer is carefully selected and tested to meet the
                  highest standards of quality and compliance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-premium"
            >
              <Image
                src="https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&q=80"
                alt="Our team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-secondary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="text-primary-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Our Mission
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                To provide professional-grade first aid solutions that save lives
                and promote safety in every environment, backed by exceptional
                service and expertise.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-8 text-center"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="text-primary-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Our Vision
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                To be the most trusted name in first aid and safety equipment,
                setting the standard for quality, compliance, and customer
                service nationwide.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-8 text-center"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="text-primary-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Our Values
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                Quality, integrity, and customer care drive everything we do. We
                believe safety should never be compromised and every client
                deserves expert guidance.
              </p>
            </motion.div>
          </div>
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
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4">
              Why Choose FirstAidPro?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We're more than just a supplier - we're your safety partner
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Medical Expertise",
                description:
                  "Founded by medical professionals, our team includes nurses, EMTs, and safety specialists who understand first aid from a clinical perspective.",
              },
              {
                icon: Award,
                title: "Certified Products",
                description:
                  "Every product meets or exceeds OSHA, ANSI, and FDA standards. We only source from trusted, certified manufacturers.",
              },
              {
                icon: Users,
                title: "Personalized Service",
                description:
                  "We work closely with each client to understand their specific needs and recommend the right solutions for their environment.",
              },
              {
                icon: TrendingUp,
                title: "Continuous Innovation",
                description:
                  "We stay ahead of industry trends and regulations, constantly updating our product line to offer the latest in safety technology.",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description:
                  "Rigorous testing and quality control processes ensure that every product we ship meets our high standards.",
              },
              {
                icon: Heart,
                title: "Customer-First Approach",
                description:
                  "Your satisfaction and safety are our top priorities. We're here to support you before, during, and after your purchase.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-xl hover:bg-secondary-50 transition-colors"
              >
                <div className="bg-primary-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-primary-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-700">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Years in Business" },
              { value: "10,000+", label: "Happy Clients" },
              { value: "500+", label: "Products Available" },
              { value: "99.8%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-primary-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Meet the experts committed to your safety
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Mitchell",
                role: "Founder & CEO",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
              },
              {
                name: "Michael Chen",
                role: "Chief Operating Officer",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
              },
              {
                name: "Jennifer Rodriguez",
                role: "Head of Product Development",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden group hover:shadow-hover"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-secondary-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
