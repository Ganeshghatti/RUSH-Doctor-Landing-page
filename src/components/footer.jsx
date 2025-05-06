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
        { name: "Home", href: "#hero", id: "hero" },
        { name: "Features", href: "#features", id: "features" },
        {
          name: "Health Records",
          href: "#health-records",
          id: "health-records",
        },
        { name: "Benefits", href: "#benefits", id: "benefits" },
        { name: "Contact", href: "#cta", id: "cta" },
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
                  <Image
                    src="/logo.jpg" // Replace with the path to your logo image
                    alt="MedCare Logo"
                    width={80} // Adjust width as needed
                    height={40} // Adjust height as needed
                    className="mr-2"
                  />
                </Link>
                <p className="mt-4 text-gray-600 max-w-md">
                  REACH US SEEK HELP DOCTOR - The One and Only Support System
                  for Health – by Doctors, for Patient's.
                </p>
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
                        className="text-gray-600 hover:text-[#0069FD] transition-colors"
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
              <Link
                href="https://www.rushdr.com/privacy-policy"
                className="text-sm text-gray-500 hover:text-[#0069FD]"
              >
                Privacy Policy
              </Link>
              <a
                href="https://www.rushdr.com/terms-conditions"
                className="text-sm text-gray-500 hover:text-[#0069FD]"
              >
                Terms of Service
              </a>
              <a
                href="https://www.rushdr.com/refund-policy"
                className="text-sm text-gray-500 hover:text-[#0069FD]"
              >
                Refund Policy
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
