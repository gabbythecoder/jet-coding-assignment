export default function RestaurantList({ restaurants }) {
  return (
    <div>
      {restaurants.slice(0, 10).map((restaurant) => (
        <div key={restaurant.id} className="mt-4">
          <h3>{restaurant.name}</h3>

          <p>
            {restaurant.cuisines?.map((cuisine) => cuisine.name).join(", ") ||
              "N/A"}
          </p>

          <p>
            Rating: {restaurant.rating?.starRating || "N/A"}
          </p>

          <p>
            {restaurant.address
              ? `${restaurant.address.firstLine}, ${restaurant.address.city}`
              : "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
}
