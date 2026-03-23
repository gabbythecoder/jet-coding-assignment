"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import RestaurantList from "@/components/RestaurantList";

export default function HomePage() {
  const [restaurants, setRestaurants] = useState([]);

  async function handleSearch(postcode) {
    try {
      const response = await fetch(
        `api/?postcode=${encodeURIComponent(postcode)}`,
      );
      const data = await response.json();

      // Testing: confirm API returns data
      // console.log(data.restaurants);

      setRestaurants(data.restaurants || []);
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

      <section>
        <RestaurantList restaurants={restaurants}/>
      </section>
    </div>
  );
}
