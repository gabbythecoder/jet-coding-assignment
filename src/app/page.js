"use client";

import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  async function handleSearch(postcode) {
    try {
      const response = await fetch(
        `api/?postcode=${encodeURIComponent(postcode)}`,
      );
      const data = await response.json();
      console.log(data.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <h1>Hello!</h1>

      <section>
        <SearchBar onSearch={handleSearch} />
      </section>
    </div>
  );
}
