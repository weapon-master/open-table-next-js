"use client";
import { Cusine, Location } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SidebarItem from "./SidebarItem";

interface Props {
  locations: Location[];
  cuisines: Cusine[];
}

export default function SearchSidebar({ locations, cuisines }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentCity = searchParams.get("city") || "";
  const currentCuisine = searchParams.get("cuisine") || "";
  const currentPrice = searchParams.get("price") || "";
  const router = useRouter();
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <SidebarItem
            key={location.id}
            queryKey="city"
            target={location.name}
            active={location.name === currentCity}
          >
            <p key={location.id} className="font-light text-reg capitalize">
              {location.name}
            </p>
          </SidebarItem>
        ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cusine) => (
          <SidebarItem
            key={cusine.id}
            queryKey="cuisine"
            target={cusine.name}
            active={cusine.name === currentCuisine}
          >
            <p key={cusine.id} className="font-light text-reg capitalize">
              {cusine.name}
            </p>
          </SidebarItem>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <SidebarItem
            queryKey="price"
            target="CHEAP"
            active={currentPrice === "CHEAP"}
          >
            <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-l">
              $
            </button>
          </SidebarItem>
          <SidebarItem
            queryKey="price"
            target="MEDIUM"
            active={currentPrice === "MEDIUM"}
          >
            <button className="border-r border-t border-b w-full text-reg font-light p-2">
              $$
            </button>
          </SidebarItem>
          <SidebarItem
            queryKey="price"
            target="EXPENSIVE"
            active={currentPrice === "EXPENSIVE"}
          >
            <button className="border-t border-b w-full text-reg font-light p-2 rounded-r">
              $$$
            </button>
          </SidebarItem>
        </div>
      </div>
    </div>
  );
}
