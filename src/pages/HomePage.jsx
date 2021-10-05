import { useContext, useEffect } from "react";
// components
import ShowCard from "../components/showCard/ShowCard";
// context
import { ShowsContext } from "../context/shows/showsContext";

const HomePage = () => {
  const { setGenreLists, genreLists, loading } = useContext(ShowsContext);

  // fetch lists on page load
  useEffect(() => {
    setGenreLists();
  }, []);

  const displayRow = () => {
    console.log(genreLists);
    return (
      <div>
        <h1>row</h1>
      </div>
    );
  };

  return (
    <div style={{ color: "plum", textAlign: "center", minHeight: "60vh" }}>
      {loading ? <h2>Loading...</h2> : displayRow()}
    </div>
  );
};

export default HomePage;
