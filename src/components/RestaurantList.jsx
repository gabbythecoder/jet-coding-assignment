import Image from "next/image";
import cuisineTypeIcon from "@/../public/cuisine-type-icon.png";
import ratingStarIcon from "@/../public/rating-star-icon.png";
import pinLocationIcon from "@/../public/pin-location-icon.png";

export default function RestaurantList({ restaurants }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 m-10 justify-items-center items-center">
      {restaurants.slice(0, 10).map((restaurant) => (
        <div
          key={restaurant.id}
          className="restaurant-card border-2 p-4 rounded-xl overflow-hidden bg-cover w-full aspect-square sm:max-w-75 sm:max-h-75 md:max-w-87.5 md:max-h-87.5 lg:max-w-100 lg:max-h-100 flex flex-col justify-between"
        >
          {/* Background layer */}
          <div className="card-bg"></div>

          <div className="relative z-10 flex flex-col h-full">
            {/* Restaurant name */}
            <h3 className="font-bold text-[0.9rem] mb-2">{restaurant.name}</h3>

            {/* Cuisine type */}
            <div className="flex items-center gap-1 mb-1">
              <Image
                src={cuisineTypeIcon}
                alt="Cuisine Type Icon"
                width={18}
                height={18}
              />
              <span className="text-[0.8rem]">
                {restaurant.cuisines
                  ?.slice(0, 2)
                  .map((cuisine) => cuisine.name)
                  .join(", ") || "N/A"}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-1">
              <Image
                src={ratingStarIcon}
                alt="Rating Star Icon"
                width={18}
                height={18}
              />
              <span className="text-[0.8rem]">
                {restaurant.rating?.starRating || "N/A"}
              </span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-1 mb-1">
              <Image
                src={pinLocationIcon}
                alt="Pin Location Icon"
                width={18}
                height={18}
                className="mt-[0.06rem]"
              />
              <span className="wrap-break-word text-[0.8rem]">
                {restaurant.address
                  ? `${restaurant.address.firstLine}, ${restaurant.address.city}, ${restaurant.address.postalCode}`
                  : "N/A"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
