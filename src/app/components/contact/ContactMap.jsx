
"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <section className="bg-slate-50 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Visit Our Office
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Meet our travel experts and start planning your next unforgettable
              journey.
            </p>
          </div>

          <div className="overflow-hidden rounded-4xl shadow-2xl">
            <iframe
              title="Atharv travels Office Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d216.12601208279037!2d78.09238854095688!3d29.921435994500822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1779005610423!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}