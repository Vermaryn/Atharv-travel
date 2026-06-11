"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Award,
  HeartHandshake,
  MapPin,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "Your safety is our highest priority with verified partners and trusted travel services.",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description:
      "Enjoy premium travel experiences with unbeatable pricing and value.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted by Thousands",
    description:
      "More than 50,000 happy travelers trust us for unforgettable journeys.",
  },
  {
    icon: Clock,
    title: "Easy Booking",
    description:
      "Book your next adventure in minutes with our seamless booking experience.",
  },
  {
    icon: MapPin,
    title: "500+ Destinations",
    description:
      "Explore iconic destinations and hidden gems across the globe.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our expert travel support team is always available whenever you need help.",
  },
];

const travelers = [
  "https://res.cloudinary.com/dpximmfna/image/upload/q_auto/f_auto/v1781179386/7_mezzpd.png",
  "https://res.cloudinary.com/dpximmfna/image/upload/q_auto/f_auto/v1781178698/2_w2fcp3.png",
  "https://res.cloudinary.com/dpximmfna/image/upload/q_auto/f_auto/v1781178422/3_uew9ek.png",
];
export default function WhyChooseUs() {
  return (
    <section
      id="about"
      aria-labelledby="why-choose-us-heading"
      className="bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-medium text-blue-700">
              Why Choose Us
            </span>

            {/* Heading */}
            <h2
              id="why-choose-us-heading"
              className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
            >
              Your Dream Trip Starts{" "}
              <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                With Us
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600">
              We create exceptional travel experiences with trusted services,
              curated destinations, and world-class support designed for modern
              travelers.
            </p>

            {/* Features */}
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.article
                    key={feature.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="group flex items-start gap-4"
                  >
                    {/* Icon */}
                    <div className="shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-2 leading-relaxed text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="relative aspect-4/5">
                <Image
                  src="https://images.unsplash.com/photo-1539576776193-2c07122e5fee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxoYXBweSUyMHRyYXZlbGVycyUyMHZhY2F0aW9uJTIwY291cGxlJTIwd2FuZGVybHVzdHxlbnwxfHx8fDE3NzgxNjAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Happy travelers enjoying a vacation together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 right-0 md:-right-8 rounded-2xl bg-white p-6 shadow-2xl backdrop-blur-xl">
              {/* Travelers */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {travelers.map((img, index) => (
                    <div
                      key={index}
                      className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white"
                    >
                      <Image
                        src={img}
                        alt={`Traveler ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-lg font-bold text-slate-900">1000+</p>
                  <p className="text-sm text-slate-600">Happy Travelers</p>
                </div>
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className="text-lg text-yellow-400"
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}

                <span className="ml-2 text-sm font-medium text-slate-600">
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
