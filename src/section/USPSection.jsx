"use client";
import React from "react";
import { motion } from "framer-motion";

const USPSection = () => {
  return (
    <section
      id="usp"
      className="py-20 bg-gradient-to-br from-white to-[#f0f7ff]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
            Unique Selling Proposition
          </h2>
          <div className="w-20 h-1 bg-[#0069FD] mx-auto mb-6"></div>
          <motion.div
            className="text-2xl font-semibold text-[#0069FD] mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            "RUSHDR – Built by Doctors, Owned by Doctors, Empowering Doctors!"
          </motion.div>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row">
              <motion.div
                className="md:w-1/2 md:pr-8 mb-8 md:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Doctor Awards & Recognition Program
                </h3>
                <p className="text-gray-600 mb-6">
                  At RUSHDR we believe in celebrating excellence within the
                  medical community. To honor the dedication, compassion, and
                  outstanding service of our doctors, we proudly introduce our
                  recognition program.
                </p>

                <ul className="space-y-4">
                  {[
                    "Periodic Awards for exceptional performance, patient satisfaction, and commitment to care",
                    "Featured Doctor Spotlights on the app and social media platforms",
                    "Exclusive Badges & Certificates to showcase your achievements",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#0069FD]/10 flex items-center justify-center text-[#0069FD] mr-3 mt-0.5">
                        <svg
                          className="h-3 w-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-gray-600">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="md:w-1/2 md:border-l border-gray-200 md:pl-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-gray-700 italic mb-6">
                  Whether it's through lifesaving consultations, community
                  service, or innovative practices — your efforts deserve
                  recognition.
                </p>
                <p className="text-lg font-medium text-gray-800 mb-8">
                  Because you deserve more than just appreciation — you deserve
                  to be celebrated.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Designed for Your Needs",
                      desc: "Without the Hassles",
                    },
                    {
                      title: "Secure & Transparent",
                      desc: "Tailored for Medical Professionals",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-[#0069FD]/5 rounded-lg p-4 border border-[#0069FD]/10"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{
                        y: -5,
                        boxShadow:
                          "0 10px 25px -5px rgba(0, 149, 255, 0.1), 0 10px 10px -5px rgba(0, 149, 255, 0.04)",
                      }}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#0069FD]/20 flex items-center justify-center text-[#0069FD] mr-3">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">
                            {feature.title}
                          </p>
                          <p className="text-sm text-gray-600">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
