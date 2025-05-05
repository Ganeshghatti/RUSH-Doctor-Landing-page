"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  // Define features
  const features = [
    {
      title: "Profile Setup & Management",
      description:
        "Create and update a professional profile with qualifications, specialization, and experience.",
      details: [
        "Set consultation fees and mark availability for EMERGENCY, online, offline for multiple locations, and home consultations.",
        "Doctor referrals are available.",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Consultation Options",
      description:
        "Multiple ways to connect with patients based on their needs.",
      details: [
        "Emergency Patient Alert – Doctors receive alerts for urgent cases and can choose to respond.",
        "Online Consultation – Video, Voice and Chat based consultations.",
        "Offline Consultation – In-clinic and hospital visits for multiple locations.",
        "Home Consultation – Personalized home visits.",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      title: "Appointment Management",
      description: "Complete control over your schedule.",
      details: [
        "Both Doctor's and Patients can schedule, reschedule, or cancel appointments.",
        "Automated reminders help reduce no-shows.",
        "Doctors can Fix their own Fees and Schedule.",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Payments & Earnings",
      description: "Transparent financial transactions.",
      details: [
        "Doctors receive payments directly from patients—no hidden charges. In Premium Subscription plan.",
        "Secure payment options (UPI, credit/debit cards, net banking, wallets).",
        "Instant invoicing and transaction records.",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
            RUSHDR Features & Benefits
          </h2>
          <div className="w-20 h-1 bg-[#0095ff] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Designed specifically for medical professionals, our platform offers
            powerful tools to streamline your practice.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              variants={item}
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-[#0095ff]/30 transition-all"
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgba(0, 149, 255, 0.1), 0 10px 10px -5px rgba(0, 149, 255, 0.04)",
                y: -5,
              }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#0095ff]/10 p-3 rounded-lg text-[#0095ff]">
                  {feature.icon}
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 text-[#0095ff] mr-2">
                          •
                        </div>
                        <p className="text-gray-600 text-sm">{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subscription Plans Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-[#0095ff]/5 to-[#0095ff]/10 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-800">
            Subscription Plans & Charges
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Premium", charge: "10% platform charge", icon: "🔹" },
              { name: "Lifetime", charge: "20% platform charges", icon: "🔹" },
              { name: "5 Years", charge: "30% platform charge", icon: "🔹" },
              {
                name: "Extra Services",
                charge: "Charged separately",
                icon: "🔹",
                subtext: "(advertisements, course launches)",
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 12px 24px -8px rgba(0, 149, 255, 0.15)",
                }}
              >
                <div className="text-2xl mb-2">{plan.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  {plan.name} Subscription
                </h4>
                <p className="text-[#0095ff] font-medium">{plan.charge}</p>
                {plan.subtext && (
                  <p className="text-xs text-gray-500 mt-1">{plan.subtext}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Earning Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-gray-200 p-8"
        >
          <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
            Additional Earning Opportunities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: "Run Advertisements",
                desc: "Promote services within the app for visibility",
                emoji: "📢",
              },
              {
                title: "Launch Courses",
                desc: "Sell medical or wellness programs",
                emoji: "📚",
              },
              {
                title: "Offer Specialized Guidance",
                desc: "Webinars, workshops, and events",
                emoji: "👨‍⚕️",
              },
              {
                title: "Announce Events",
                desc: "Medical camps, health checkups, CMEs",
                emoji: "🏥",
              },
            ].map((opportunity, index) => (
              <motion.div
                key={index}
                className="bg-[#0095ff]/5 rounded-lg p-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                whileHover={{ backgroundColor: "rgba(0, 149, 255, 0.1)" }}
              >
                <div className="text-2xl mb-2">{opportunity.emoji}</div>
                <h4 className="font-medium text-gray-800 mb-1">
                  {opportunity.title}
                </h4>
                <p className="text-sm text-gray-600">{opportunity.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
