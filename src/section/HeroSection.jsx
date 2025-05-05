"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="text-center md:text-left pt-10 md:pt-16 md:pb-16 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              REACH US SEEK HELP
            </motion.h1>

            <motion.p
              className="text-lg mb-6 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The One and Only Support System for Health – by Doctors, for
              Patient's.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Introduction to RUSHDR
              </h2>
              <p className="mb-4 text-gray-600">
                Introducing RUSHDR, a revolutionary platform designed
                exclusively to meet the unique needs of doctors.
              </p>

              <div className="flex flex-col space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#0069FD]/10 flex items-center justify-center text-[#0069FD] mr-2">
                    ✓
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">RUSHDR</span> is
                    crafted with a deep understanding of the challenges faced by
                    medical professionals.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#0069FD]/10 flex items-center justify-center text-[#0069FD] mr-2">
                    ✓
                  </div>
                  <p className="text-gray-600">
                    Experience innovation, transparency, and control in one
                    seamless platform.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-[#0069FD] hover:bg-[#0077cc] text-white px-6 py-2">
                  Get Started
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="lg:w-1/2 relative hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className=" relative h-[400px] md:h-[500px] w-full">
              <div className="absolute inset-0 bg-[#0069FD]/5 rounded-2xl overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-br from-[#0069FD]/20 to-transparent rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                />
                <Image
                  src="/doctor-1.jpg"
                  alt="Doctor using RUSHDR platform"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                className=" absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#0069FD]/20 flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-[#0069FD]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-semibold">By Doctors</p>
                    <p className="text-xs text-gray-500">For Patients</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#0069FD]/20 flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-[#0069FD]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-semibold">24/7 Support</p>
                    <p className="text-xs text-gray-500">Always Available</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
