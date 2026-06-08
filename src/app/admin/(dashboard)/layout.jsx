"use client";

import Link from "next/link";
import LogotButton from "../LogoutButton";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-8">Atharv Admin</h2>

        <nav className="space-y-3">
          <Link
            href="/admin"
            className="block rounded-lg px-4 py-2 hover:bg-slate-800"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/bookings"
            className="block rounded-lg px-4 py-2 hover:bg-slate-800"
          >
            Bookings
          </Link>

          <Link
            href="/admin/custom-plans"
            className="block rounded-lg px-4 py-2 hover:bg-slate-800"
          >
            Custom Plans
          </Link>

          <Link
            href="/admin/contacts"
            className="block rounded-lg px-4 py-2 hover:bg-slate-800"
          >
            Contacts
          </Link>
          <div className="mt-8">
            <LogotButton />
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-slate-100 p-6">
        {children}
      </main>
    </div>
  );
}