"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Wanderly made our Maldives honeymoon absolutely perfect! Every detail was taken care of, from the stunning water villa to the romantic dinners.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    trip: "Maldives Honeymoon Package",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "The Swiss Alps adventure was breathtaking! The hiking trails, mountain views, and cozy chalets exceeded all expectations.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    trip: "Swiss Alps Adventure",
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "London, UK",
    rating: 5,
    text: "Our family trip to Bali was incredible! Wanderly perfectly balanced relaxation, activities, and cultural experiences.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    trip: "Bali Family Vacation",
  },
  {
    id: 4,
    name: "David Martinez",
    location: "Madrid, Spain",
    rating: 5,
    text: "The Dubai city tour was spectacular! Luxury hotels, desert safari, and flawless planning made this unforgettable.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    trip: "Dubai Luxury Experience",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    location: "Sydney, Australia",
    rating: 5,
    text: "Wanderly turned my Iceland solo travel dreams into reality. I felt safe, supported, and inspired throughout the trip.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    trip: "Iceland Solo Adventure",
  },
  {
    id: 6,
    name: "James Wilson",
    location: "Toronto, Canada",
    rating: 5,
    text: "The Patagonia photography tour was a dream come true. Stunning locations, expert guidance, and unforgettable memories.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    trip: "Patagonia Photography Tour",
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