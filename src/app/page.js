"use client";

import { useState } from "react";
import Header from "@/components/Header";
import RestaurantList from "@/components/RestaurantList";

export default function HomePage() {
  const [restaurants, setRestaurants] = useState([]);
  const [inputPostcode, setInputPostcode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSearch(postcode) {
    setInputPostcode(postcode); // Update the postcode when search is submitted
    setErrorMessage(""); // Clear previous error message
    setRestaurants([]); // Clear previous restaurant data

    try {
      const response = await fetch(
        `api/?postcode=${encodeURIComponent(postcode)}`,
      );
      const data = await response.json();

      // Testing: confirm API returns data
      // console.log(data.restaurants);

      // If no restaurants are found, show an error message
      if (data.restaurants.length === 0) {
        setErrorMessage(
          `No restaurants found for ${postcode}. Please try again.`,
        );
      } else {
        setRestaurants(data.restaurants || []);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage(
        "There was an error with the postcode search. Please try again",
      );
    }
  }

  return (
    <div className="flex flex-col w-full">
      <Header onSearch={handleSearch} />

      {/* Show the postcode in the results message only if there are restaurants */}
      {inputPostcode && !errorMessage && restaurants.length > 0 && (
        <div className="text-center mt-8">
          <p>
            Showing results for: <strong>{inputPostcode}</strong>
          </p>
        </div>
      )}

      {/* Display the error message if there are no restaurants and an error message exists */}
      {errorMessage && restaurants.length === 0 && (
        <div className="text-red-500 text-center mt-8">
          <strong>{errorMessage}</strong>
        </div>
      )}

      <section>
        <RestaurantList restaurants={restaurants} />
      </section>
    </div>
  );
}
