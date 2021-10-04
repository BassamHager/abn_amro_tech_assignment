import { useContext, useEffect } from "react";
// components
// import ShowCard from "../components/showCard/ShowCard";
// context
import { ShowsContext } from "../context/shows/showsContext";

const HomePage = () => {
  const { fetchShowsLists, genreRows, loading } = useContext(ShowsContext);

  useEffect(() => {
    fetchShowsLists();
  }, [loading]);

  return (
    <div style={{ color: "plum", textAlign: "center" }}>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        Object.keys(genreRows).map((e) => <h2 key={e}>{e}</h2>)
      )}
    </div>
  );
};

export default HomePage;
