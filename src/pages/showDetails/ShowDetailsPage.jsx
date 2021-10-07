import { useContext, useEffect } from "react";

// components
import ShowCard from "../../components/showCard/ShowCard";
import Spinner from "../../components/spinner/Spinner";

// context
import { ShowsContext } from "../../context/shows/showsContext";

const ShowDetailsPage = ({ match }) => {
  // context
  const { getShowDetails, showDetails, isLoading } = useContext(ShowsContext);

  const { name, id, image, summary, genres, rating, officialSite } =
    showDetails;

  useEffect(() => {
    getShowDetails(match.params.id);
  }, []); // eslint-disable-line

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="details__container">
          <ShowCard
            name={name}
            id={id}
            image={image}
            summary={summary}
            genres={genres}
            rating={rating?.average || " no rating"}
            officialSite={officialSite}
            showDetails
          />
        </div>
      )}
    </>
  );
};

export default ShowDetailsPage;
