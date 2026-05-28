// src/components/contact/ContactForm.jsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      message: "",
    });
  };

  return (
    <section className="bg-white px-6 py-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-4xl border border-slate-100 bg-slate-50 p-8 shadow-2xl md:p-14"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Send Us a Message
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Fill out the form and our travel team will get back to you soon.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 234 567 890"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label
                  htmlFor="destination"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Preferred Destination
                </label>

                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Rishikesh, Nainital..."
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-medium text-slate-700"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your dream trip..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}