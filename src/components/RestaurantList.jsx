export default function RestaurantList({ restaurants }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-2.5">
      {restaurants.slice(0, 10).map((restaurant) => (
        <div key={restaurant.id} className="border-2 p-4 rounded-xl">
          <h3>{restaurant.name}</h3>

          <p>
            {restaurant.cuisines?.slice(0, 2).map((cuisine) => cuisine.name).join(", ") ||
              "N/A"}
          </p>

          <p>Rating: {restaurant.rating?.starRating || "N/A"}</p>

          <p>
            {restaurant.address
              ? `${restaurant.address.firstLine}, ${restaurant.address.city}, ${restaurant.address.postalCode}`
              : "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
}
