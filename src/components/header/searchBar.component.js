'use client'
// React
import {useEffect, useState} from "react";

// Icons
import Image from "next/image";
import SearchIcon from "@/icons/search.svg";

export default function SearchBar() {
    const [searchText, setSearchText] = useState('');

    function handleInputChange(e) {
        setSearchText(e.target.value);
    }

    function handleSearch() {
        console.log('Searching for: ', searchText);
    }

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            handleSearch();
        }, 1000)

        return () => clearTimeout(delaySearch);
    }, [searchText]);

    return (
        <form className="grow">
            <div className="bg-[#F0F0F0] px-4 py-3 rounded-full flex gap-3">
                <Image
                    src={SearchIcon}
                    alt="search icon"
                />

                <input
                    className="w-full border-none bg-transparent focus:outline-none"
                    type="text"
                    placeholder="Search for products..."
                    value={searchText}
                    onChange={handleInputChange}
                />
            </div>
        </form>
    );
}