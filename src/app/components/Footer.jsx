"use client";

import Link from "next/link";
import { Plane, MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";


const quickLinks = [
  {
    label: "Destinations",
    href: "#destinations",
  },
  {
    label: "Packages",
    href: "#packages",
  },
  {
    label: "Experiences",
    href: "#experiences",
  },
  {
    label: "About Us",
    href: "#about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

const supportLinks = [
  {
    label: "Help Center",
    href: "/help-center",
  },
  {
    label: "FAQs",
    href: "/faq",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "Terms of Service",
    href: "/terms",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
];

const legalLinks = [
  {
    label: "Terms",
    href: "/terms",
  },
  {
    label: "Privacy",
    href: "/privacy-policy",
  },
  {
    label: "Cookies",
    href: "/cookies",
  },
  {
    label: "Sitemap",
    href: "/sitemap.xml",
  },
];

const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://facebook.com",
    label: "Facebook",
    hover: "hover:bg-blue-600",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com",
    label: "Twitter",
    hover: "hover:bg-sky-500",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
    hover: "hover:bg-pink-600",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
    hover: "hover:bg-blue-700",
  },
];

export default function Footer() {
  return (
    <footer
      className="bg-slate-950 text-white"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2
          id="footer-heading"
          className="sr-only"
        >
          Website Footer
        </h2>

        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <section className="lg:col-span-2">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 shadow-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>

              <span className="text-2xl font-bold tracking-tight">
                Atharv travels
              </span>
            </Link>

            {/* Description */}
            <p className="mt-6 max-w-md leading-relaxed text-slate-400">
              Your trusted travel partner for luxury experiences, curated
              adventures, and unforgettable journeys around the world.
            </p>

            {/* Social Links */}
            <nav
              aria-label="Social Media"
              className="mt-8 flex items-center gap-4"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-slate-300 transition-all duration-300 hover:scale-110 hover:text-white ${social.hover}`}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </nav>
          </section>

          {/* Quick Links */}
          <nav aria-labelledby="quick-links-heading">
            <h3
              id="quick-links-heading"
              className="text-lg font-semibold"
            >
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <nav aria-labelledby="support-links-heading">
            <h3
              id="support-links-heading"
              className="text-lg font-semibold"
            >
              Support
            </h3>

            <ul className="mt-6 space-y-4">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h3 className="text-lg font-semibold">
              Contact
            </h3>

            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-400" />

                <span>
                  Aaklan Rd(tin mandir chowk), new subhash nagar
                  <br />
                  Haridwar, Uttarakhand 249403
                </span>
              </li>

              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  <Phone className="h-5 w-5 shrink-0 text-blue-400" />

                  <span>+91 9719700050</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:hello@wanderly.com"
                  className="flex items-center gap-3 text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  <Mail className="h-5 w-5 shrink-0 text-blue-400" />

                  <span>atharvtravels@gmail.com</span>
                </a>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Copyright */}
            <p className="text-sm text-slate-500">
              © 2026 Atharv Travels. All rights reserved.
            </p>

            {/* Legal Links */}
            <nav aria-label="Legal Links">
              <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-500 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}