"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { destinations } from "@/data/destinations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import DestinationCard from "./DestinationCard";

export default function PopularDestinations() {
  return (
    <section
      id="destinations"
      aria-labelledby="destinations-heading"
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-medium text-blue-700">
            Popular Destinations
          </span>

          <h2
            id="destinations-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl"
          >
            Trending{" "}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Travel Spots
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Discover breathtaking travel destinations loved by explorers around
            the world.
          </p>
        </motion.header>

        {/* Cities */}
        <div className="space-y-20">
          {Object.entries(destinations).map(([city, places]) => (
            <section key={city}>

              {/* City Heading */}
              <h3 className="mb-8 text-3xl font-bold capitalize text-slate-900">
                {city}
              </h3>

              {/* Cards */}
              {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> */}
              <Swiper
                modules={[Autoplay]}
                loop={true}
                spaceBetween={20}
                slidesPerView={3}
                speed={8000}
                autoplay={{ delay: 0, disableOnInteraction: false ,}}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  
                }}
                >
                {places.map((destination, index) => (
                  <SwiperSlide key={`${city}-${destination.id}`}>
                    <DestinationCard destination={destination} />
                  </SwiperSlide>
                ))}
                </Swiper>
              {/* </div> */}
            </section>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <Link
            href="/destinations"
            className="inline-flex items-center justify-center rounded-xl border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg"
          >
            View All Destinations
          </Link>
        </motion.div>

      </div>
    </section>
  );
}