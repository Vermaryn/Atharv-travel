
"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-400 via-indigo-500 to-purple-700 px-6 py-6 text-white">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [bg-size:30px_30px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-xl">
            Contact Wanderly
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
            Let’s Plan Your{" "}
            <span className="text-blue-200">
              Next Adventure
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            Reach out to our travel specialists for bookings, personalized
            itineraries, luxury experiences, and travel support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}