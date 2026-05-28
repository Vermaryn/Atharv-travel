"use client";

import Link from "next/link";
import { Menu, X, Plane } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    name: "Destinations",
    href: "/#destinations",
  },
  {
    name: "Taxi & Packages",
    href: "/#packages",
  },
  {
    name: "Experiences",
    href: "/#experiences",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto"
      >
        <div className="backdrop-blur-xl bg-white/70 border border-white/20 shadow-lg rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ">
                Atharv travel
              </span>
            </Link>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-700 font-medium hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/book"
                className="px-6 py-2.5 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-slate-800" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden m-4 backdrop-blur-xl bg-white/70 border border-white/20 shadow-lg rounded-2xl p-6"
            >
              <ul className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="block text-slate-700 font-medium hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white transition-all hover:shadow-lg"
              >
                Book Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
