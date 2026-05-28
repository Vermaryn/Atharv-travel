"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, Star, Heart } from "lucide-react";
import { packages } from "@/data/Packages";

export default function FeaturedPackages() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((fav) => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <section
      id="packages"
      aria-labelledby="packages-heading"
      className="bg-linear-to-br from-slate-50 via-white to-slate-100 py-6 px-6"
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
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-5 py-2 text-sm font-medium text-indigo-700">
            Featured Taxi & Tour Packages
          </span>

          <h2
            id="packages-heading"
            className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Curated{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Travel Experiences
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl leading-relaxed text-slate-600">
            Handpicked luxury travel experiences designed for unforgettable
            adventures and lifelong memories.
          </p>
        </motion.header>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Section */}
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={`${pkg.title} travel package`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                {/* Favorite Button */}
                <button
                  type="button"
                  aria-label={`${
                    favorites.includes(pkg.id)
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }`}
                  onClick={() => toggleFavorite(pkg.id)}
                  className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors duration-300 ${
                      favorites.includes(pkg.id)
                        ? "fill-red-500 text-red-500"
                        : "text-slate-700"
                    }`}
                  />
                </button>

                {/* Destination Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur-md">
                    {pkg.destination}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-2">
                {/* Rating + Price */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

                    <span className="font-semibold text-slate-900">
                      {pkg.rating}
                    </span>

                    <span className="text-slate-500">
                      ({pkg.reviews} reviews)
                    </span>
                  </div>

                  <div className="text-2xl font-bold text-blue-600">
                    {pkg.price}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {pkg.title}
                </h3>
                <div className="mt-2 space-y-1">
                  {pkg.taxis.map((taxi) => (
                    <div
                      key={taxi.type}
                      className="flex items-center justify-between rounded-xl bg-slate-50 p-1"
                      >
                      <div>
                        <h4 className="font-semibold text-slate-500">{taxi.type}</h4>
                      <p>
                        {taxi.vehicle} • {taxi.seats} 
                      </p>
                    </div>
                    <div className="text-lg font-bold text-blue-500">
                      ₹{taxi.price}
                      </div>
                    </div>
                  ))}
                </div>
                {/*  Features */}
                <ul className="flex flex-wrap gap-2">
                  {pkg.features.map((feature) => (
                    <li key={feature}>
                      <span className="inline-flex rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* Extra Charges */}
                <div className="mt-2">
                  <p className="mb-2 text-sm font-semibold text-red-600">
                    Extra Charges
                  </p>
                  <ul className="flex gap-2 flex-wrap">
                  {pkg.extraCharges.map((charge) => (
                    <li key={charge}
                      className="inline-flex items-center gap-1 rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700"
                    >
                      • {charge}
                    </li>
                  ))}

                  </ul>
                </div>
                {/* CTA */}
                <Link
                  href="/book"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/30"
                >
                  Book Now
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}