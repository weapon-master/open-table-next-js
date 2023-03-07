import RestaurantCard from "./components/RestaurantCard";
import SearchHeader from "./components/SearchHeader";
import SearchSidebar from "./components/SearchSidebar";

export const metadata = {
  title: "Search | Open Table",
}

export default function Search() {
  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}
