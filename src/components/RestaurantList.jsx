import Image from "next/image";
import cuisineTypeIcon from "@/../public/cuisine-type-icon.png";
import ratingStarIcon from "@/../public/rating-star-icon.png";
import pinLocationIcon from "@/../public/pin-location-icon.png";

export default function RestaurantList({ restaurants }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 m-10">
      {restaurants.slice(0, 10).map((restaurant) => (
        <div
          key={restaurant.id}
          className="border-2 p-4 rounded-xl aspect-square overflow-hidden bg-cover"
          style={{ backgroundImage: `url('/jet-logo.png')` }}
        >
          <h3 className="font-bold text-lg mb-1">{restaurant.name}</h3>

          <div className="flex items-center gap-1">
            <Image
              src={cuisineTypeIcon}
              alt="Cuisine Type Icon"
              width={18}
              height={18}
            />
            <span>
              {restaurant.cuisines
                ?.slice(0, 2)
                .map((cuisine) => cuisine.name)
                .join(", ") || "N/A"}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Image
              src={ratingStarIcon}
              alt="Rating Star Icon"
              width={18}
              height={18}
            />
            <span>{restaurant.rating?.starRating || "N/A"}</span>
          </div>

          <div className="flex items-start gap-1">
            <Image
              src={pinLocationIcon}
              alt="Pin Location Icon"
              width={18}
              height={18}
            />
            <span className="wrap-break-word">
              {restaurant.address
                ? `${restaurant.address.firstLine}, ${restaurant.address.city}, ${restaurant.address.postalCode}`
                : "N/A"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
