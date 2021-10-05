import { useContext, useEffect } from "react";
import GenreRow from "../components/genreRow/GenreRow";
// components
// import ShowCard from "../components/showCard/ShowCard";
// context
import { ShowsContext } from "../context/shows/showsContext";

const HomePage = () => {
  const { setGenreLists, genreLists, loading } = useContext(ShowsContext);

  // fetch lists on page load
  useEffect(() => {
    setGenreLists();
  }, []);

  return (
    <div style={{ color: "plum", textAlign: "center", minHeight: "60vh" }}>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        genreLists.map((list) => <GenreRow key={list[0]} res={list} />)
      )}
    </div>
  );
};

export default HomePage;
