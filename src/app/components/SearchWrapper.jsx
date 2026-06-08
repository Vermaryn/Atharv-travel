"use client"
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";   
import { useState } from "react"; 

export default function SearchWrapper(){
    const [searchTerm, setSearchTerm] = useState("");
    return(
        <>
        <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
        />
        {searchTerm.trim() !== "" && (
            <SearchResults searchTerm={searchTerm} />
        ) }
        </>
    )
}