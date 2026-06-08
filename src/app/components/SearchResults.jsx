"use client"
import { destinations } from "@/data/destinations";
import Image from "next/image";
import DestinationCard from "./DestinationCard";
export default function SearchResults({ searchTerm }){
    const allplaces = Object.values(destinations).flat();
    const filteredPlaces = allplaces.filter((place) =>
        place.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        place.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if(filteredPlaces.length === 0) {
        return(
            <section className="px-6 py-10">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Search Results
                    </h2>
                    <p>No destinations found</p>
                </div>
            </section>
        );
    }
    return(
        <section className="px-6 m-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Search Results (({filteredPlaces.length}))</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPlaces.map((place, index) => (
                    <DestinationCard key={place.id} destination={place} />
                ))}
                </div>
            </div>
        </section>
    );
}