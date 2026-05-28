
"use client";

import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9719700050",
    href: "tel:+919719700050",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@atharvtravels.com",
    href: "mailto:hello@atharvtravels.com",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Aaklan Rd(tin mandir chowk), new subhash nagar, Haridwar, Uttarakhand 249403",
    href: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sun • 24Hrs",
    href: "#",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-slate-50 px-6 py-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {contactCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 shadow-lg">
                <Icon className="h-8 w-8 text-white" />
              </div>

              <h2 className="mt-4 text-xl font-bold text-slate-900">
                {card.title}
              </h2>

              <a
                href={card.href}
                className="mt-2 block leading-relaxed text-slate-600"
              >
                {card.value}
              </a>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}