import { useContext, useEffect } from "react";
import "./HomePage.css";

// components
import GenreRow from "../../components/genreRow/GenreRow";
import ShowCard from "../../components/showCard/ShowCard";

// context
import { ShowsContext } from "../../context/shows/showsContext";
import Spinner from "../../components/spinner/Spinner";

const HomePage = () => {
  // context
  const { setGenreLists, genreLists, isLoading, matchingShows } =
    useContext(ShowsContext);

  // fetch shows lists on page load
  useEffect(() => {
    setGenreLists();
  }, []); // eslint-disable-line

  return (
    <div
      className={`homePage__container ${
        matchingShows?.length > 0 && "searched__container"
      }`}
    >
      {/* {
        genreLists?.map((list) => <GenreRow key={list[0]} res={list} />)} */}

      {/* if loading */}

      {isLoading ? (
        // display spinner
        <Spinner />
      ) : //

      // else display matchingShows if searched & existed
      matchingShows?.length > 0 ? (
        matchingShows.map(
          ({ show: { id, name, image, rating, summary, genres } }, i) => (
            <ShowCard
              key={id}
              id={id}
              image={image}
              name={name}
              rating={rating?.average || " no rating"}
              summary={summary}
              genres={genres}
            />
          )
        )
      ) : (
        // else (not loading & matchingShows not existed) => display genreLists
        genreLists?.map((list) => <GenreRow key={list[0]} res={list} />)
      )}
    </div>
  );
};

export default HomePage;
