import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

import Description from "./components/Description";
import { getRestaurant } from "./utils";

const RestaurantDetail = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const restaurant = await getRestaurant(slug);
  if (!restaurant) {
    return null;
  }
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavbar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating reviews={restaurant.reviews} />
        <Description description={restaurant.description} />
        <Images imageUrls={restaurant.images} />
        <Reviews reviews={restaurant.reviews} />
      </div>
      <ReservationCard />
    </>
  );
};

export default RestaurantDetail;
