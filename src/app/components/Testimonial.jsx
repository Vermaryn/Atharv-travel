"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi, India",
    rating: 5,
    text: "Our Char Dham Yatra was perfectly organized by Atharv Travel. The hotels, transportation, and driver support were excellent throughout the journey.",
    image: "https://res.cloudinary.com/dpximmfna/image/upload/q_auto/f_auto/v1781178698/2_w2fcp3.png",
    trip: "Char Dham Yatra",
  },

  {
    id: 2,
    name: "Rahul Verma",
    location: "Noida, India",
    rating: 5,
    text: "The Haridwar and Rishikesh tour was a wonderful experience. Everything was well planned, and the Ganga Aarti was truly unforgettable.",
    image: "https://res.cloudinary.com/dpximmfna/image/upload/q_auto/f_auto/v1781178458/1_r2o4lf.png",
    trip: "Haridwar & Rishikesh Tour",
  },

  {
    id: 3,
    name: "Sneha Kapoor",
    location: "Chandigarh, India",
    rating: 5,
    text: "We booked a Mussoorie family trip through Atharv Travel. The hotel, sightseeing, and taxi service exceeded our expectations.",
    image: "https://res.cloudinary.com/dpximmfna/image/upload/q_auto/f_auto/v1781178452/5_fzpesk.png",
    trip: "Mussoorie Family Tour",
  },

  {
    id: 4,
    name: "Amit Gupta",
    location: "Jaipur, India",
    rating: 5,
    text: "Our Dehradun and Robber's Cave sightseeing package was smooth and hassle-free. The driver was professional and very helpful.",
    image: "https://res.cloudinary.com/dpximmfna/image/upload/q_auto/f_auto/v1781178422/3_uew9ek.png",
    trip: "Dehradun Sightseeing Tour",
  },

  {
    id: 5,
    name: "Neha Joshi",
    location: "Lucknow, India",
    rating: 5,
    text: "The Kedarnath Yatra was managed exceptionally well. Atharv Travel provided timely guidance and comfortable arrangements.",
    image: "https://res.cloudinary.com/dpximmfna/image/upload/q_auto/f_auto/v1781178435/6_khoj4u.png",
    trip: "Kedarnath Yatra",
  },

  {
    id: 6,
    name: "Vikas Mehta",
    location: "Gurugram, India",
    rating: 5,
    text: "We booked a Nainital weekend getaway and had a fantastic experience. The package was affordable and the service was outstanding.",
    image: "https://res.cloudinary.com/dpximmfna/image/upload/q_auto/f_auto/v1781179386/7_mezzpd.png",
    trip: "Nainital Weekend Tour",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-slate-50 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full bg-green-100 px-5 py-2 text-sm font-medium text-green-700">
            Testimonials
          </span>

          <h2
            id="testimonials-heading"
            className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            What Our{" "}
            <span className="bg-linear-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Travelers Say
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600">
            Real stories and experiences shared by travelers who explored the
            world with us.
          </p>
        </motion.header>

        {/* Testimonials Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-linear-to-br from-green-400/20 to-teal-400/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* User Info */}
              <header className="relative z-10 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} traveler review`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {testimonial.location}
                  </p>
                </div>
              </header>

              {/* Rating */}
              <div
                className="mt-6 flex items-center gap-1"
                aria-label={`${testimonial.rating} star rating`}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="relative mt-6">
                <Quote className="absolute -left-1 -top-2 h-8 w-8 text-blue-200" />

                <p className="pl-8 leading-relaxed text-slate-600">
                  {testimonial.text}
                </p>
              </blockquote>

              {/* Footer */}
              <footer className="mt-6 border-t border-slate-100 pt-5">
                <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  {testimonial.trip}
                </span>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}