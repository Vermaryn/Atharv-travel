"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <main id="home" className="relative min-h-screen overflow-hidden pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dpximmfna/image/upload/q_auto/f_auto/v1779356524/Rishikesh_arti_teq8c7.png"
          alt="Luxury tropical travel destination aerial view"
          fill
          priority
          className="object-cover"
        />
        {/* OverLay */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/60 via-indigo-900/50 to-purple-900/60" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />
        </div>
        {/* Hero Content */}
        <section className="relative z-10 from items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 mb-8">
                ✨ Discover Your Next Adventure
              </span>
            </motion.div>
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight"
            >
              Explore Uttrakhand
              <br />
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Your Way
              </span>
            </motion.h1>
            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{duration: 0.7, delay: 0.4}}
                className="max-w-3xl mx-auto mt-8 text-lg md:text-2xl leading-relaxed text-white/85"
                >
                    Unlock unforgettable journeys to breathtaking destinations with
            curated travel experiences, seamless booking, and memories that
            last forever.       
            </motion.p>
            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
            >
                <Link
                    href="#packages"
                    className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-4 text-white shadow-lg transition-all duration-300 hover::scale-105 hover:shadow-blue-500/40"
                    >
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"/>
                </Link>
            </motion.div>
            {/* Stats */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1}}
                aria-label="Travel Statistics"
                className="mt-20 mb-25 flex flex-col items-center justify-center gap-10 md:gap-1 4 text-white"
            >
                <article>
              <h2 className="text-3xl md:text-4xl font-bold">100+</h2>
              <p className="mt-2 text-white/70">Destinations</p>
            </article>

            <div className="hidden md:block w-px h-12 bg-white/20" />

            <article>
              <h2 className="text-3xl md:text-4xl font-bold">2K+</h2>
              <p className="mt-2 text-white/70">Happy Travelers</p>
            </article>
            <div className="hidden md:block w-px h-12 bg-white/20" />

            <article>
              <h2 className="text-3xl md:text-4xl font-bold">4.9★</h2>
              <p className="mt-2 text-white/70">Customer Rating</p>
            </article>
            </motion.section>
          </div>
        </section>
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-100 to-transparent" />
    </main>
  );
}
