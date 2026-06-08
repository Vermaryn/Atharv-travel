"use client";

import { Search, MapPin } from "lucide-react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative -mt-20 z-20 px-6 mb-20">
      <div className="max-w-3xl mx-auto">
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/20 p-6">
          <label className="flex items-center gap-2 text-slate-600 mb-2">
            <MapPin className="w-4 h-4" />
            Destination
          </label>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search city or place..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}