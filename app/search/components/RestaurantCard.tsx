import PriceLabel from "@/app/components/PriceLabel";
import RatingStars from "@/app/components/RatingStars";
import RatingText from "@/app/components/RatingText";
import Link from "next/link";
import { RestaurantCardType } from "../page";

interface Props {
  restaurant: RestaurantCardType;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <div className="border-b flex pb-5">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img src={restaurant.mainImage} alt="" className="w-44 rounded" />
        <div className="pl-5">
          <h2 className="text-3xl">{restaurant.name}</h2>
          <div className="flex items-start">
            <RatingStars reviews={restaurant.reviews} />
            <RatingText reviews={restaurant.reviews} />
          </div>
          <div className="mb-9">
            <div className="font-light flex text-reg">
              <PriceLabel price={restaurant.price} />
              <p className="mr-4 capitalize">{restaurant.cusine.name}</p>
              <p className="mr-4 capitalize">{restaurant.location.name}</p>
            </div>
          </div>
          <div className="text-red-600">
            <Link href={`/restaurant/${restaurant.slug}`}>
              View more information
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}
