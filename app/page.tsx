import RestaurantCard from "./components/RestaurantCard";
import SearchHeader from "./components/SearchHeader";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getRestaurants = async () => prisma.restaurant.findMany({
  select: {
    id: true,
    name: true,
    slug: true,
    mainImage: true,
    cusine: true,
    location: true,
    price: true,
  }
});

export type RestaurantCardType = UnpackArray<UnpackPromise<ReturnType<typeof getRestaurants>>>;

export default async function Home() {
  const restaurants = await getRestaurants();
  return (
    <main>
      <SearchHeader />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {
          restaurants.map((restaurant) => (<RestaurantCard key={restaurant.id} restaurant={restaurant} />))
        }
      </div>
    </main>
  );
}
