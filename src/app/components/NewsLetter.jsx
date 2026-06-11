"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Check } from "lucide-react";


export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    alert(data.message);

    setEmail("");
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="relative overflow-hidden py-24 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-700 via-purple-700 to-pink-700" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [bg-size:30px_30px]" />

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl">
            <Mail className="h-11 w-11 text-white" />
          </div>

          {/* Heading */}
          <h2
            id="newsletter-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Never Miss a{" "}
            <span className="text-pink-200">
              Journey
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/85">
            Subscribe to receive exclusive travel deals, destination guides,
            insider tips, and curated adventures delivered directly to your
            inbox.
          </p>

          {/* Newsletter Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-2xl"
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Input */}
              <label
                htmlFor="newsletter-email"
                className="sr-only"
              >
                Email Address
              </label>

              <input
                id="newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-white/60 backdrop-blur-xl transition-all duration-300 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/40"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-indigo-700 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/95 hover:shadow-2xl"
              >
                <span>Subscribe</span>

                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Privacy Text */}
          <p className="mt-6 text-sm text-white/70">
            Join 50,000+ travelers worldwide. Unsubscribe anytime. Your privacy
            is always protected.
          </p>

          {/* Features */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-white/85">
            {[
              "Weekly Travel Deals",
              "Insider Travel Tips",
              "Exclusive Member Access",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                  <Check className="h-4 w-4" />
                </div>

                <span className="text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}