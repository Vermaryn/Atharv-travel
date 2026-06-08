"use client";
import { useState } from "react"; 
import Navbar from "@/app/components/Navbar";
export default function BookNowPage() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      destination: "",
      travelers: "",
      message: "",
    })
    const [error, setErrors] = useState({});
    const handleChange =(e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newErrors = {}; 
      if(!formData.name.trim()){
        newErrors.name = "Name is required";
      }
      if(!formData.phone.trim()){
        newErrors.phone = "Phone number is required";
      }

      setErrors(newErrors);

      if(Object.keys(newErrors).length > 0){
        return;
      }

      try{
        const response = await fetch("/api/enquiries",{
          method:"POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            {
              ...formData,
              type: "booking",
            }
            ),
        });
        const data = await response.json();
        if(data.success){
          alert("Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            destination: "",
            travelers:"",
            message: "",
          })
        } 

      }catch(error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again later.");
    } 
    }
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">
      <Navbar />
      <div className="mx-auto max-w-6xl mt-8">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-medium text-blue-700">
            Booking Support
          </span>

          <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Book Your Dream Trip
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Call us for instant booking assistance or fill out the form below.
            Our travel team will contact you shortly to confirm your trip.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <div className="rounded-3xl bg-blue-600 p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-bold">Instant Booking Support</h2>

            <p className="mt-5 text-lg leading-relaxed text-blue-100">
              Need urgent booking assistance? Speak directly with our travel
              experts and get instant help for packages, pricing, hotels,
              transport, and trip planning.
            </p>

            {/* Call Button */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="tel:+919719700050"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Call Now
              </a>

              <span className="rounded-xl bg-white/20 px-5 py-3 text-2xl font-semibold tracking-wide text-white backdrop-blur-sm border border-white/20 shadow-lg">
                +91 9719700050
              </span>
            </div>

            {/* Extra Info */}
            <div className="mt-10 space-y-4 text-blue-100">
              <p>✔ Quick Booking Assistance</p>
              <p>✔ Affordable Travel Packages</p>
              <p>✔ Hotel & Transport Support</p>
              <p>✔ Personalized Trip Planning</p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Request a Callback
            </h2>

            <p className="mt-3 text-slate-600">
              Fill out the form and our team will contact you soon.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
              noValidate
              >
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                {error.name && <p className="mt-1 text-sm text-red-600">{error.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                {error.phone && <p className="mt-1 text-sm text-red-600">{error.phone}</p>}
              </div>
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone Number
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address (optional)"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Destination */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Destination
                </label>

                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Where do you want to travel?"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Travelers */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Number of Travelers
                </label>

                <input
                  type="number"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  placeholder="e.g. 2"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Additional Message
                </label>

                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your trip requirements..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
              >
                Request Callback
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
