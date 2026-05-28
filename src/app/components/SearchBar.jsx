"use client";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function SearchBar() {
  return (
    <div className="relative -mt-20 z-20 px-6 mb-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/20 p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <label className="flex items-center gap-2 text-slate-600 mb-2">
                <MapPin className="w-4 h-4" />
                Destination
              </label>
              <input
                type="text"
                placeholder="Where to?"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-400 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="md:col-span-1">
              <label className="flex items-center gap-2 text-slate-600 mb-2">
                <Calendar className="w-4 h-4" />
                Check In
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-400 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="md:col-span-1">
              <label className="flex items-center gap-2 text-slate-600 mb-2">
                <Calendar className="w-4 h-4" />
                Check Out
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-400 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="md:col-span-1">
              <label className="flex items-center gap-2 text-slate-600 mb-2">
                <Users className="w-4 h-4" />
                Travelers
              </label>
              <select
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-400 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4+ People</option>
              </select>
            </div>
          </div>

          <button className="mt-6 w-full md:w-auto px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all flex items-center justify-center gap-2 mx-auto">
            <Search className="w-5 h-5" />
            Search Destinations
          </button>
        </motion.div>
      </div>
    </div>
  );
}
