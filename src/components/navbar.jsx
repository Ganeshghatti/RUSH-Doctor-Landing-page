"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("hero");

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Nav items
  const navItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Features", href: "#features", id: "features" },
    { name: "Health Records", href: "#health-records", id: "health-records" },
  ];

  return (
    <header
      className={`fixed w-full z-50 py-3 transition-all duration-300 bg-[#0069FD] ${scrolled ? "py-2" : "py-4"
        }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
           <Link href="https://rushdr.com" className="flex items-center">
              <Image
                src="/logo.png"
                alt="MedCare Logo"
                width={100}
                height={50}
                className="mr-2"
              />
            </Link>
          </motion.div>
          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`relative text-white hover:text-white/80 text-sm font-medium transition-colors ${activeItem === item.id ? "font-semibold" : ""
                      }`}
                    onClick={(e) => {
                      scrollToSection(item.id, e);
                      setActiveItem(item.id);
                    }}
                  >
                    {item.name}
                    {activeItem === item.id && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Right buttons */}
          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* <Button
              size="sm"
              variant="ghost"
              className="text-white hover:text-white/80 hover:bg-transparent p-0"
            >
              Sign In
            </Button> */}
            <Link href="https://app.rushdr.com/doctor/register">
              <Button
                size="sm"
                className="bg-white text-[#0069FD] hover:bg-white/90 transition-all px-4 py-1 cursor-pointer"
              >
                Register
              </Button>
            </Link>
          </motion.div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-[#0069FD] rounded shadow-lg">
                <ul className="space-y-1 p-3">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={`block py-2 px-3 text-white hover:bg-white/10 rounded transition-colors ${activeItem === item.id
                          ? "font-medium bg-white/10"
                          : ""
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(false);
                          // Add a small delay to ensure menu is closed before scrolling
                          setTimeout(() => {
                            scrollToSection(item.id, e);
                            setActiveItem(item.id);
                          }, 100);
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <Link href="https://app.rushdr.com/doctor/register">
                  <div className="border-t border-white/10 p-3 flex space-x-3">
                    <Button
                      className="flex-1 bg-white text-[#0069FD] hover:bg-white/90 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      Register
                    </Button>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
