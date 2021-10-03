import React from "react";
import SearchShow from "../components/search/SearchShow";
import ShowCard from "../components/showCard/ShowCard";

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>

      <SearchShow />
      <ShowCard />
    </div>
  );
};

export default HomePage;
