import RestaurantCard from "./components/RestaurantCard";
import SearchHeader from "./components/SearchHeader";

export default function Home() {
  return (
    <main>
      <SearchHeader />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <RestaurantCard />
      </div>
    </main>
  );
}
