"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = [
    {
      title: "Features",
      links: [
        { name: "Profile Setup", href: "#features" },
        { name: "Consultation Options", href: "#features" },
        { name: "Appointment Management", href: "#features" },
        { name: "Payment System", href: "#features" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "E-Prescriptions", href: "#health-records" },
        { name: "Medical Records", href: "#health-records" },
        { name: "Subscription Plans", href: "#features" },
        { name: "Integration APIs", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Contact", href: "#cta" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <Link href="/" className="flex items-center">
                  <div className="h-10 w-10 bg-[#0095ff] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    R
                  </div>
                  <span className="ml-2 text-xl font-bold text-gray-800">
                    RUSH<span className="text-[#0095ff]">DR</span>
                  </span>
                </Link>
                <p className="mt-4 text-gray-600 max-w-md">
                  REACH US SEEK HELP DOCTOR - The One and Only Support System
                  for Health – by Doctors, for Patient's.
                </p>
                <div className="mt-6 flex space-x-4">
                  {[
                    { name: "Twitter", icon: "ri-twitter-fill" },
                    { name: "Facebook", icon: "ri-facebook-fill" },
                    { name: "Instagram", icon: "ri-instagram-fill" },
                    { name: "LinkedIn", icon: "ri-linkedin-fill" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      aria-label={social.name}
                      className="h-10 w-10 rounded-full bg-[#0095ff]/10 flex items-center justify-center text-[#0095ff] hover:bg-[#0095ff] hover:text-white transition-colors"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {footerLinks.map((column, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
              >
                <h3 className="text-gray-800 font-semibold mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-[#0095ff] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} RUSHDR. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#0095ff]"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#0095ff]"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#0095ff]"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <div className="py-4 text-center text-sm text-gray-500 bg-gray-50">
          <p>Built by Doctors, Owned by Doctors, Empowering Doctors!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
