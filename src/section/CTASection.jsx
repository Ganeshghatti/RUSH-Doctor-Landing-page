"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="cta" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative bg-[#0095ff] rounded-3xl overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                fill="#FFFFFF"
                d="M44.5,-76.3C59.1,-70.7,73.1,-60.9,81.9,-47.2C90.7,-33.5,94.4,-16.8,94.8,0.2C95.2,17.2,92.4,34.4,83.6,47.8C74.9,61.2,60.2,70.8,44.8,76.4C29.3,82,14.6,83.7,0,83.6C-14.7,83.6,-29.4,82,-42.8,75.8C-56.2,69.6,-68.4,58.9,-76.8,45.2C-85.2,31.5,-89.8,15.8,-90.4,-0.3C-90.9,-16.4,-87.4,-32.8,-78.6,-44.9C-69.9,-57.1,-55.8,-64.9,-41.4,-70.3C-27,-75.6,-13.5,-78.5,0.8,-79.9C15.1,-81.4,30.2,-81.5,44.5,-76.3Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="relative py-16 md:py-20 px-6 md:px-12 lg:px-20 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
                  Join RUSHDR Today!
                </h2>
                <p className="text-white/90 mb-8">
                  Be part of a groundbreaking medical platform designed
                  specifically for doctors. Together, let's build a healthcare
                  ecosystem that empowers medical professionals and enhances
                  patient care.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    {
                      icon: "🚀",
                      text: "Be part of a groundbreaking medical platform",
                    },
                    {
                      icon: "📢",
                      text: "Share your valuable inputs to improve the app",
                    },
                    {
                      icon: "🎯",
                      text: "Make your professional practice easier and more rewarding",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx, duration: 0.4 }}
                    >
                      <span className="mr-3 text-xl">{item.icon}</span>
                      <p className="text-white/90">{item.text}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-white text-[#0095ff] hover:bg-white/90 hover:text-[#0077cc] font-medium px-6 py-6 h-auto">
                    Register Now
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-6 h-auto"
                  >
                    Request Demo
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    Join Our Early Access Program
                  </h3>
                  <p className="text-white/80 text-sm mb-5">
                    We're excited to have you on board! Let's build this
                    together. Sign up for early access and be among the first to
                    experience RUSHDR.
                  </p>

                  <form className="space-y-4">
                    <div>
                      <label className="block text-white/90 text-sm mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                        placeholder="Dr. John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 text-sm mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                        placeholder="doctor@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 text-sm mb-1">
                        Specialization
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                        placeholder="Cardiology, Internal Medicine, etc."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-white text-[#0095ff] hover:bg-white/90 font-medium"
                    >
                      Join Waiting List
                    </Button>
                  </form>

                  <div className="mt-4 text-center text-white/70 text-xs">
                    By signing up, you agree to our Terms of Service and Privacy
                    Policy.
                  </div>
                </div>

                <motion.div
                  className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg text-[#0095ff] font-bold"
                  initial={{ opacity: 0, y: 20, rotate: -5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  Early Bird Benefits!
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
