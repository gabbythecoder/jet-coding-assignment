"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [postcode, setPostcode] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(postcode);
  }

  function handleChange(event) {
    setPostcode(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={postcode}
          onChange={handleChange}
          placeholder="Enter postcode"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
