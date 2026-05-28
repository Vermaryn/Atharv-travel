"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    id: 1,
    question: "How do I book a trip with Atharv travels?",
    answer:
      "Booking with Atharv travels is simple. Browse destinations and travel packages, select your preferred option, choose your travel dates, and complete the secure checkout process.",
  },
  {
    id: 2,
    question: "What is your cancellation policy?",
    answer:
      "Most bookings can be cancelled up to 14 days before departure for a full refund. Specific cancellation terms are clearly mentioned during checkout.",
  },
  {
    id: 3,
    question: "Can I customize my travel package?",
    answer:
      "Absolutely. Our travel specialists can personalize itineraries, accommodations, activities, and experiences based on your preferences.",
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. Flexible installment payment options may also be available.",
  },
  {
    id: 5,
    question: "Do you provide visa assistance?",
    answer:
      "Yes, we provide guidance and support for travel documentation and visa requirements through trusted travel partners.",
  },
  {
    id: 6,
    question: "What happens if my flight is delayed or cancelled?",
    answer:
      "Our support team actively monitors bookings and assists travelers with rebooking, itinerary updates, and emergency support whenever needed.",
  },
  {
    id: 7,
    question: "Are meals included in travel packages?",
    answer:
      "Meal inclusions depend on the selected package. Details about meals, accommodations, and experiences are clearly listed before booking.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-linear-to-br from-slate-50 via-white to-blue-50 py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-medium text-blue-700">
            FAQ
          </span>

          {/* Heading */}
          <h2
            id="faq-heading"
            className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Got{" "}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600">
            Find answers to the most common questions about booking, payments,
            cancellations, travel support, and more.
          </p>
        </motion.header>

        {/* FAQ List */}
        <div className="mt-20 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.article
                key={faq.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg transition-all duration-300"
              >
                {/* Question */}
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                    onClick={() => toggleFAQ(faq.id)}
                    className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left transition-colors duration-300 hover:bg-slate-50"
                  >
                    <span className="text-lg font-semibold text-slate-900">
                      {faq.question}
                    </span>

                    <span className="shrink-0">
                      {isOpen ? (
                        <Minus className="h-5 w-5 text-blue-600" />
                      ) : (
                        <Plus className="h-5 w-5 text-slate-400" />
                      )}
                    </span>
                  </button>
                </h3>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 leading-relaxed text-slate-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600">
            Still have questions?
          </p>

          <Link
            href="/contact"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </section>
  );
}