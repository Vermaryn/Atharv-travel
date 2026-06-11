"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

import {
  Globe,
  Users,
  MapPin,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: Globe,
    value: 500,
    suffix: "+",
    label: "Destinations Worldwide",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "Happy Travelers",
    color: "from-purple-600 to-pink-600",
  },
  {
    icon: MapPin,
    value: 500,
    suffix: "+",
    label: "Tours Completed",
    color: "from-orange-600 to-red-600",
  },
  {
    icon: Award,
    value: 3,
    suffix: "+",
    label: "Years of Excellence",
    color: "from-green-600 to-teal-600",
  },
];

/* Counter Component */
function Counter({ value, suffix }) {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.round(latest)
  );

  const nodeRef = useRef(null);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent =
          latest.toLocaleString() + suffix;
      }
    });

    return () => unsubscribe();
  }, [rounded, suffix]);

  return (
    <span
      ref={nodeRef}
      aria-label={`${value}${suffix}`}
    >
      0{suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section
      aria-labelledby="statistics-heading"
      className="relative overflow-hidden py-24 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-700 via-indigo-700 to-purple-700" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [bg-size:32px_32px]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2
            id="statistics-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Trusted by Travelers{" "}
            <span className="text-blue-200">
              Around the Globe
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/80">
            Thousands of travelers trust us to deliver exceptional
            experiences, unforgettable adventures, and world-class
            travel services.
          </p>
        </motion.header>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-linear-to-br ${stat.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
                />

                {/* Icon */}
                <div className="relative z-10 mb-6 flex justify-center">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br ${stat.color} shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                </div>

                {/* Counter */}
                <div className="relative z-10">
                  <div className="text-5xl font-bold tracking-tight text-white">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-white/80">
                    {stat.label}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}