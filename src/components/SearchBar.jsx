"use client";

import { useState } from "react";

export default function SearchBar() {
  const [postcode, setPostcode] = useState("");

  async function getPostcode(event) {
    // stop page reload
    event.preventDefault();

    try {
      const response = await fetch(
        `api/?postcode=${encodeURIComponent(postcode)}`,
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function handleChange(event) {
    setPostcode(event.target.value);
  }

  return (
    <div>
      <form onSubmit={getPostcode}>
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
