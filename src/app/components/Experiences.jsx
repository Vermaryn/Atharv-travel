"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Compass,
  Mountain,
  Waves,
  Building2,
  Camera,
  Utensils,
  ArrowRight,
} from "lucide-react";

const experiences = [
  {
    icon: Mountain,
    title: "Adventure Tours",
    description:
      "Thrilling expeditions crafted for adrenaline seekers and outdoor explorers.",
    color: "from-orange-500 to-red-500",
    href: "/experiences/adventure-tours",
  },
  {
    icon: Waves,
    title: "Beach Getaways",
    description:
      "Relax on pristine beaches surrounded by crystal-clear waters and luxury resorts.",
    color: "from-blue-500 to-cyan-500",
    href: "/experiences/beach-getaways",
  },
  {
    icon: Building2,
    title: "City Exploration",
    description:
      "Experience vibrant city life, architecture, culture, and iconic landmarks.",
    color: "from-purple-500 to-pink-500",
    href: "/experiences/city-exploration",
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description:
      "Capture unforgettable moments guided by professional travel photographers.",
    color: "from-green-500 to-teal-500",
    href: "/experiences/photography-tours",
  },
  {
    icon: Utensils,
    title: "Culinary Journeys",
    description:
      "Discover authentic cuisines and local gastronomic experiences around the world.",
    color: "from-yellow-500 to-orange-500",
    href: "/experiences/culinary-journeys",
  },
  {
    icon: Compass,
    title: "Custom Adventures",
    description:
      "Personalized travel itineraries tailored perfectly to your dream destinations.",
    color: "from-indigo-500 to-purple-500",
    href: "/experiences/custom-adventures",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      aria-labelledby="experiences-heading"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-purple-100 px-5 py-2 text-sm font-medium text-purple-700">
            Travel Experiences
          </span>

          <h2
            id="experiences-heading"
            className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Every Journey,{" "}
            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Every Style
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl leading-relaxed text-slate-600">
            Explore curated travel experiences designed for every kind of
            traveler and adventure style.
          </p>
        </motion.header>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={experience.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-linear-to-br ${experience.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                />

                {/* Icon */}
                <div
                  className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${experience.color} transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mt-6 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {experience.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-600">
                    {experience.description}
                  </p>

                  {/* CTA */}
                  {/* <Link
                    href={experience.href}
                    aria-label={`Explore ${experience.title}`}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-4"
                  >
                    <span>Explore Experience</span>

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link> */}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}