import React from "react";
import Header from "./components/Header";
import { getRestaurant } from "./utils";

export const metadata = {
  title: "Milesstone Grill | Open Table",
};

export default async function RestaurantLayout({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
} & { params: { slug: string }}) {
  const restaurant = await getRestaurant(slug);
  if (!restaurant) {
    return null;
  }
  return (
    <main>
      <Header name={restaurant.name} location={restaurant.location.name} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
}
