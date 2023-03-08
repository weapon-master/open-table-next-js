import { Item } from "@prisma/client";
import React from "react";
import MenuCard from "./MenuCard";

export default function Menu({ menu }: { menu: Item[] }) {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {menu.length ? (
            menu.map((item) => (
              <MenuCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))
          ) : (
            <p className="text-lg font-dark">This restaurant has no menu</p>
          )}
        </div>
      </div>
    </main>
  );
}
