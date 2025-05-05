"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HealthRecordsSection = () => {
  return (
    <section
      id="health-records"
      className="py-24  bg-gradient-to-br from-[#f8faff] to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
            E-Prescriptions & Medical Records
          </h2>
          <div className="w-20 h-1 bg-[#0069FD] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Seamlessly manage patient information and prescriptions with our
            secure digital tools.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white p-3 border border-gray-100">
              <div className="aspect-w-16 aspect-h-9 relative h-[350px] rounded-xl overflow-hidden">
                <Image
                  src="/doctor.jpg"
                  alt="Digital Medical Records Interface"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Comprehensive Medical Records
                  </h3>
                  <p className="text-sm text-white/80">
                    Complete patient history at your fingertips
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-4">
                  Secure & Organized Patient Records
                </h3>
                <ul className="space-y-3">
                  {[
                    "Upload and view comprehensive medical records",
                    "Access previous prescriptions and treatment plans",
                    "Review test results and health reports",
                    "Track patient progress over time with visual data",
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx, duration: 0.4 }}
                    >
                      <div className="h-6 w-6 rounded-full bg-[#0069FD]/10 flex items-center justify-center text-[#0069FD] mr-3 mt-0.5">
                        <svg
                          className="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-full bg-[#0069FD]/15 flex items-center justify-center text-[#0069FD]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-800">
                    Digital E-Prescriptions
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  Generate and send digital e-prescriptions directly to
                  patients. Save time, reduce errors, and improve patient
                  compliance with our intuitive e-prescription system.
                </p>

                <div className="bg-[#0069FD]/5 rounded-xl p-5 mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Reduce prescription errors with built-in checks",
                      "Include detailed medication instructions",
                      "Easily renew prescriptions with one click",
                      "Send digital copies directly to patients",
                    ].map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx, duration: 0.4 }}
                      >
                        <div className="text-[#0069FD] mr-2">✓</div>
                        <p className="text-sm text-gray-600">{benefit}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">
                    Secure Communication
                  </h4>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#0069FD]/10 flex items-center justify-center text-[#0069FD] mr-3">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        End-to-end encrypted messaging
                      </p>
                      <p className="text-sm text-gray-600">
                        Secure video consultations and messaging to protect
                        patient privacy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#0069FD]/10 flex items-center justify-center text-[#0069FD] mr-3">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        Patient feedback system
                      </p>
                      <p className="text-sm text-gray-600">
                        Collect reviews and testimonials to build your online
                        reputation
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="bg-[#0069FD]/5 p-4 rounded-lg border border-[#0069FD]/20 mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <p className="text-sm text-[#0069FD] font-medium">
                    Coming in Phase 2
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Integration with labs, diagnostic centers, pharmacies, and
                    ambulance services for a complete healthcare ecosystem.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealthRecordsSection;
