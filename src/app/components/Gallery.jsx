"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1776762893145-df0e04e0f811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMHRyb3BpY2FsJTIwYmVhY2glMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3ODE2MDMzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Tropical Paradise",
    span: "md:row-span-2",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1759160813189-c2bba731d285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjaXR5c2NhcGUlMjBuaWdodCUyMGxpZ2h0cyUyMHRyYXZlbHxlbnwxfHx8fDE3NzgxNjAzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "City Lights",
    span: "",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBtb3VudGFpbiUyMGhpa2luZyUyMHNjZW5pYyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzgxNjAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Mountain Adventure",
    span: "",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1770185998570-db739db7af47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMHRyb3BpY2FsJTIwYmVhY2glMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3ODE2MDMzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Luxury Resort",
    span: "",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1767022540099-c10a3bac8516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjaXR5c2NhcGUlMjBuaWdodCUyMGxpZ2h0cyUyMHRyYXZlbHxlbnwxfHx8fDE3NzgxNjAzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Urban Exploration",
    span: "md:row-span-2",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1772423966375-0f7bb5a02ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhZHZlbnR1cmUlMjBtb3VudGFpbiUyMGhpa2luZyUyMHNjZW5pYyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzgxNjAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Scenic Views",
    span: "",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1764022398523-cb127ab75581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhZHZlbnR1cmUlMjBtb3VudGFpbiUyMGhpa2luZyUyMHNjZW5pYyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzgxNjAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Rainbow Mountains",
    span: "",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1758613171548-b26cb5d2abf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRyYXZlbGVycyUyMHZhY2F0aW9uJTIwY291cGxlJTIwd2FuZGVybHVzdHxlbnwxfHx8fDE3NzgxNjAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Happy Travelers",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section
      aria-labelledby="gallery-heading"
      className="bg-white py-24 px-6"
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
          {/* Badge */}
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-pink-100 px-5 py-2 text-sm font-medium text-pink-700">
            <FaInstagram className="h-4 w-4" />
            Travel Gallery
          </span>

          {/* Heading */}
          <h2
            id="gallery-heading"
            className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Moments Worth{" "}
            <span className="bg-linear-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Sharing
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600">
            Discover inspiring moments and unforgettable memories shared by our
            global community of travelers.
          </p>
        </motion.header>

        {/* Gallery Grid */}
        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className={`group relative overflow-hidden rounded-3xl ${image.span}`}
            >
              {/* Image */}
              <div className="relative h-full min-h-55 w-full">
                <Image
                  src={image.url}
                  alt={`${image.title} travel destination`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full p-5 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="text-lg font-semibold text-white">
                  {image.title}
                </h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="https://www.instagram.com/atharvtravels25?igsh=MTZkdHR0Zm9kMmloZQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Wanderly on Instagram"
            className="inline-flex items-center gap-3 rounded-xl bg-linear-to-r from-pink-500 to-purple-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30"
          >
            <FaInstagram className="h-5 w-5" />

            <span>Follow @Atharv Travel</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}