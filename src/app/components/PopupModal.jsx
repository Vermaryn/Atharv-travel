"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { useRef } from "react";
import { destinations } from "@/data/destinations";

export default function PopupModal() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    message: "",
  });
  const [error, setError] = useState({});
  const dateRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    setError(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({
          ...formData,
          type: "custom-plans",
        }),
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        alert("Enquiry submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          travelDate: "",
          destination: "",
          message: "",
        });
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/20 backdrop-blur-md p-2 sm:p-6">
      <div className="relative w-full max-w-4xl overflow-y-auto overscroll-contain rounded-md bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute cursor-pointer right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow hover:bg-slate-100"
        >
          ✕
        </button>

        <div className="grid max-h-[84dvh] overflow-hidden lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Image */}
          <div className="relative hidden lg:block min-h-130">
            <Image
              src="https://res.cloudinary.com/dpximmfna/image/upload/q_auto/f_auto/v1779866505/Kaudiyala_Rishikesh_spwqcl.png"
              alt="Kaudiyala Rishikesh"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/70 via-black/25 to-transparent" />

            <div className="absolute bottom-0 left-0 z-10 p-8">
              <h2 className="max-w-md text-[25px] font-extrabold leading-tight text-white">
                Explore Rishikesh with breathtaking river views and
                unforgettable adventures.
              </h2>
            </div>
          </div>

          {/* Right Form */}
          <div className="max-h-[84dvh] overflow-y-auto bg-white p-4 sm:p-8">
            <h2 className="text-[24px] sm:text-[30px] font-bold text-[#000945]">
              Plan My Trip
            </h2>

            <p className="mt-2 text-sm text-[#000945]">
              Fill details and get a custom itinerary.
            </p>

            <form className="mt-4 space-y-2" onSubmit={handleSubmit} noValidate>
              {/* Full Name + Email */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#000945]">
                    Full name
                  </label>

                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#000945]" />

                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Your name"
                      className="w-full h-10 rounded-md border border-slate-300 bg-white pl-10 pr-3 text-sm outline-none focus:border-[#155dfc]"
                    />
                    {error.name && (
                      <p className="text-[11px] font-medium leading-none text-red-500">
                        {error.name}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#000945]">
                    Email
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#000945]" />

                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        });
                      }}
                      placeholder="you@example.com"
                      className="w-full h-10 rounded-md border border-slate-300 bg-white pl-10 pr-3 text-sm outline-none focus:border-[#155dfc]"
                    />
                  </div>
                </div>
              </div>

              {/* Phone + Destination */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#000945]">
                    Phone
                  </label>

                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#000945]" />

                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      placeholder="Phone number"
                      className="w-full h-10 rounded-md border border-slate-300 bg-white pl-10 pr-3 text-sm outline-none focus:border-[#155dfc]"
                    />
                  </div>
                  {error.phone && (
                    <p className="text-[11px] font-medium leading-none text-red-500">
                      {error.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#000945]">
                    Destination
                  </label>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#000945]" />

                    <input
                      type="text"
                      value={formData.destination}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          destination: e.target.value,
                        });
                      }}
                      placeholder="Where do you want to go?"
                      className="w-full h-10 rounded-md border border-slate-300 bg-white pl-10 pr-3 text-sm outline-none focus:border-[#155dfc]"
                    />
                  </div>
                </div>
              </div>

              {/* Travel Date */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-[#000945]">
                  Travel Date
                </label>

                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#000945] cursor-pointer z-10"
                    onClick={() => dateRef.current?.showPicker()}
                  />

                  <input
                    ref={dateRef}
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        travelDate: e.target.value,
                      });
                    }}
                    onClick={(e) => e.target.showPicker?.()}
                    className="w-full h-10 rounded-md border border-slate-300 bg-white pl-10 pr-3 text-sm outline-none focus:border-[#155dfc] [&::-webkit-calendar-picker-indicator]:hidden"
                  />
                </div>
              </div>

              {/* Travel Requirements */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-[#000945]">
                  Travel requirements
                </label>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-[#000945]" />

                  <textarea
                    placeholder="Dates, number of travelers, preferences, etc."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full min-h-15 sm:min-h-18 rounded-md border border-slate-300 bg-white py-2.5 sm:py-3 pl-10 sm:pl-11 pr-3 text-[13px] sm:text-sm text-[#000945] outline-none transition focus:border-[#155dfc] focus:ring-0"
                  />
                </div>
              </div>

              <p className="text-center text-[11px] leading-4 text-slate-500">
                By proceeding, you agree to our Terms of Use and Privacy Policy.
              </p>

              <button
                type="submit"
                className="w-full rounded-md bg-[#155dfc] py-3 font-bold text-white transition hover:bg-[#0f4bce]"
              >
                Get Custom Plan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
