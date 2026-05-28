"use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { MapPin, Star, ArrowRight } from "lucide-react";
// import { destinations } from "@/data/destinations";
// import { object } from "framer-motion/client";

// // const destina = [
// //   {
// //     id: 1,
// //     name: "HarkiPauri",
// //     country: "Haridwar, Uttarakhand",
// //     image:
// //       "https://res.cloudinary.com/dpximmfna/image/upload/q_auto/f_auto/v1779356516/harkipauri_ydqjtz.png",
// //     rating: 4.9,
// //     tours: 24,
// //     price: "₹1,499",
// //   },
// //   {
// //     id: 2,
// //     name: "Mansa Devi Temple",
// //     country: "Haridwar, Uttarakhand",
// //     image:
// //       "https://images.unsplash.com/photo-1759160813189-c2bba731d285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjaXR5c2NhcGUlMjBuaWdodCUyMGxpZ2h0cyUyMHRyYXZlbHxlbnwxfHx8fDE3NzgxNjAzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
// //     rating: 4.8,
// //     tours: 32,
// //     price: "₹1,299",
// //   },
// //   {
// //     id: 3,
// //     name: "Chandi Devi",
// //     country: "Haridwar, Uttarakhand",
// //     image:
// //       "https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBtb3VudGFpbiUyMGhpa2luZyUyMHNjZW5pYyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzgxNjAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
// //     rating: 4.9,
// //     tours: 18,
// //     price: "₹1,299",
// //   },
// //   {
// //     id: 4,
// //     name: "Bharat Mata Temple",
// //     country: "Haridwar, Uttarakhand",
// //     image:
// //       "https://images.unsplash.com/photo-1776762893101-7d498c970688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMHRyb3BpY2FsJTIwYmVhY2glMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3ODE2MDMzMHww&ixlib=rb-4.1.0&q=80&w=1080",
// //     rating: 4.7,
// //     tours: 28,
// //     price: "₹1,599",
// //   },
// //   {
// //     id: 5,
// //     name: "shantikunj",
// //     country: "Haridwar, Uttarakhand",
// //     image:
// //       "https://images.unsplash.com/photo-1767022540099-c10a3bac8516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjaXR5c2NhcGUlMjBuaWdodCUyMGxpZ2h0cyUyMHRyYXZlbHxlbnwxfHx8fDE3NzgxNjAzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
// //     rating: 4.8,
// //     tours: 36,
// //     price: "₹2,199",
// //   },
// //   {
// //     id: 6,
// //     name: "Vindhya Wasini",
// //     country: "Haridwar",
// //     image:
// //       "https://images.unsplash.com/photo-1772423966375-0f7bb5a02ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhZHZlbnR1cmUlMjBtb3VudGFpbiUyMGhpa2luZyUyMHNjZW5pYyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzgxNjAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
// //     rating: 4.9,
// //     tours: 15,
// //     price: "₹1,999",
// //   },
// //   {
// //     id: 7,
// //     name: "Daksha Mahadev Temple",
// //     country: "Haridwar",
// //     image:
// //       "https://images.unsplash.com/photo-1772423966375-0f7bb5a02ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhZHZlbnR1cmUlMjBtb3VudGFpbiUyMGhpa2luZyUyMHNjZW5pYyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzgxNjAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
// //     rating: 4.9,
// //     tours: 15,
// //     price: "₹1,999",
    
// //   },
// //   {
// //     id: 8,
// //     name: "Maya Devi Temple",
// //     country: "Haridwar",
// //     image:
// //       "https://images.unsplash.com/photo-1772423966375-0f7bb5a02ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhZHZlbnR1cmUlMjBtb3VudGFpbiUyMGhpa2luZyUyMHNjZW5pYyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzgxNjAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
// //     rating: 4.9,
// //     tours: 15,
// //     price: "₹1,999",
// //   },
// //   {
// //     id: 9,
// //     name: "Pilot Baba Ashram",
// //     country: "Haridwar",
// //     image:
// //       "https://images.unsplash.com/photo-1772423966375-0f7bb5a02ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhZHZlbnR1cmUlMjBtb3VudGFpbiUyMGhpa2luZyUyMHNjZW5pYyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzgxNjAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
// //     rating: 4.9,
// //     tours: 15,
// //     price: "₹1,999",
// //   },
// // ];

// export default function PopularDestinations() {
//   return (
//     <section
//       id="destinations"
//       aria-labelledby="destinations-heading"
//       className="py-24 px-6 bg-slate-50"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.header
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}pu
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-medium text-blue-700">
//             Popular Destinations
//           </span>

//           <h2
//             id="destinations-heading"
//             className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
//           >
//             Trending{" "}
//             <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//               Travel Spots
//             </span>
//           </h2>

//           <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl leading-relaxed text-slate-600">
//             Discover breathtaking travel destinations loved by explorers around
//             the world.
//           </p>
//         </motion.header>

//         {/* Destinations Grid */}
//         <div className="space-y-20">
//         {object.entries(destinations).map(([city, places]) =>(
//           <section key={city}>
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {places.slice(0, 3).map((destination, index) => (
//             <motion.article
//               key={destination.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.1,
//               }}
//               className="group"
//             >
//               <Link
//                 href={`/destinations/${destination.name
//                   .toLowerCase()
//                   .replace(/\s+/g, "-")}`}
//                 aria-label={`Explore travel packages for ${destination.name}`}
//                 className="block overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
//               >
//                 {/* Image */}
//                 <div className="relative aspect-4/5 overflow-hidden">
//                   <Image
//                     src={destination.image}
//                     alt={`${destination.name} travel destination`}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

//                   {/* Rating */}
//                   <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-md">
//                     <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

//                     <span className="text-sm font-semibold text-slate-900">
//                       {destination.rating}
//                     </span>
//                   </div>

//                   {/* Content */}
//                   <div className="absolute inset-x-0 bottom-0 p-6">
//                     {/* Country */}
//                     <div className="mb-3 flex items-center gap-2 text-white/80">
//                       <MapPin className="w-4 h-4" />

//                       <span className="text-sm md:text-base">
//                         {destination.country}
//                       </span>
//                     </div>

//                     {/* Destination Name */}
//                     <h3 className="text-2xl font-bold text-white">
//                       {destination.name}
//                     </h3>

//                     {/* Footer */}
//                     <div className="mt-5 flex items-center justify-between gap-4">
//                       <div>
//                         <p className="text-sm text-white/70">Starting From</p>

//                         <p className="text-2xl font-bold text-white">
//                           {destination.price}
//                         </p>
//                       </div>

//                       <div className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white/30">
//                         <span className="text-sm font-medium">
//                           {destination.tours} Tours
//                         </span>

//                         <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </motion.article>
//           ))}
//         </div>
//           </section>
//         ))}
//         </div>
        

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mt-16 text-center"
//         >
//           <Link
//             href="/destinations"
//             className="inline-flex items-center justify-center rounded-xl border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg"
//           >
//             View All Destinations
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }