"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [postcode, setPostcode] = useState("EC4M 7RF"); // default for now while testing

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(postcode);
    // setPostcode(""); 
  }

  function handleChange(event) {
    setPostcode(event.target.value);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 justify-center align-items"
      >
        <input
          type="text"
          value={postcode}
          onChange={handleChange}
          placeholder="Enter postcode"
          className="border-2 rounded-lg p-0.5 text-center border-(--border)"
        />
        <button
          type="submit"
          className="cursor-pointer px-2 border-2 rounded-lg p-0.5 border-(--border) hover:bg-(--hover)"
        >
          Search
        </button>
      </form>
    </div>
  );
}
