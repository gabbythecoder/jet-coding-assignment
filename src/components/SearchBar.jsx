"use client";

import { useState } from "react";

import Image from "next/image";
import searchIcon from "@/../public/search-icon.png";

export default function SearchBar({ onSearch }) {
  const [postcode, setPostcode] = useState("EC4M 7RF"); // Default

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(postcode); // Pass the postcode to the parent (HomePage)
    setPostcode(""); // Clear the postcode after search
  }

  function handleChange(event) {
    setPostcode(event.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white border-2 border-(--secondary-background) rounded-full p-0.5 w-full"
    >
      <input
        type="text"
        value={postcode}
        onChange={handleChange}
        placeholder="Enter postcode"
        className="grow outline-none text-center bg-transparent px-3 py-1"
      />
      <button
        type="submit"
        className="flex items-center justify-center cursor-pointer rounded-full hover:bg-(--hover) transition-all duration-350 ease-in-out"
      >
        <Image
          src={searchIcon}
          alt="Search Icon Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </button>
    </form>
  );
}
