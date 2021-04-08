import React, { useState } from "react";
import { getCharacter } from "../lib/script";

export default function SearchBar(props) {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Trigger loading
        props.onClick(true);
        if (search) {
            getCharacter(search, (result, message) => {
                if (message === "success") {
                    props.onClick(false);
                    // callback result to parent component
                    props.result(result);
                } else {
                    // Alert message
                    console.log("Alert: " + JSON.stringify(result.message));
                }
            });
        } else {
            // Alert
            console.log("Please enter a name");
        }
    }

    return (
        <div className="inline-flex flex-col justify-center relative text-gray-500">
            <div className="relative">
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        className="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                        placeholder="Enter a Marvel character"
                        type="search"
                        onChange={handleSearch}
                    />
                    <svg className="w-4 h-4 absolute left-2.5 top-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <button type="button" onClick={handleSubmit} className="focus:outline-none ml-8 h-11 text-gray-800 text-sm py-2.5 px-5 rounded-md border border-gray-800 hover:bg-gray-200">Search</button>
                </form>
            </div>
        </div>
    );
}