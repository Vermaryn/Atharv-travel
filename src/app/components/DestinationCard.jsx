import { motion } from "framer-motion";
import { MapPin, Star, ArrowRight } from "lucide-react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
export default function DestinationCard({ destination,index }) {
    return( 
        <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="group mx-auto w-full max-w-sm"
                  >
                    <Link
                      href="/book"
                      className="block overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <div className="relative aspect-4/5 overflow-hidden">

                        <Image
                          src={destination.image}
                          alt={destination.name}
                          fill
                          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Rating */}
                        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-md">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                          <span className="text-sm font-semibold text-slate-900">
                            {destination.rating}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-x-0 bottom-0 p-6">

                          <div className="mb-3 flex items-center gap-2 text-white/80">
                            <MapPin className="h-4 w-4" />

                            <span className="text-sm md:text-base">
                              {destination.country}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold text-white">
                            {destination.name}
                          </h3>

                          <div className="mt-5 flex items-center justify-between">

                            <div>
                              <p className="text-sm text-white/70">
                                Starting From
                              </p>

                              <p className="text-2xl font-bold text-white">
                                {destination.price}
                              </p>
                            </div>

                            <div className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white/30">

                              <span className="text-sm font-medium">
                                {destination.tours} Visitors
                              </span>

                              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>

                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
    )
}