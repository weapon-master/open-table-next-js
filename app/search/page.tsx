import RestaurantCard from "./components/RestaurantCard";
import SearchHeader from "./components/SearchHeader";
import SearchSidebar from "./components/SearchSidebar";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const metadata = {
  title: "Search | Open Table",
};

const getRestaurants = async (city: string) =>
  prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          contains: city,
          mode: "insensitive",
        },
      },
    },
    select: {
      id: true,
      location: true,
      name: true,
      slug: true,
      mainImage: true,
      cusine: true,
      price: true,
    },
  });
export type RestaurantCardType = UnpackArray<
  UnpackPromise<ReturnType<typeof getRestaurants>>
>;
const getLocations = async () => prisma.location.findMany();
const getCuisines = async () => prisma.cusine.findMany();

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const { city } = searchParams;
  const [restaurants, locations, cuisines] = await Promise.all([
    getRestaurants(city),
    getLocations(),
    getCuisines(),
  ]);
  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar locations={locations} cuisines={cuisines} />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p className="text-dark">Not restaurants found</p>
          )}
        </div>
      </div>
    </>
  );
}
