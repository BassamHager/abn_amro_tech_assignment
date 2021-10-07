import { useCallback } from "react";
import "./GenreRow.css";

// components
import ShowCard from "../showCard/ShowCard";

const GenreRow = ({ res }) => {
  // row setup
  const displayRow = useCallback(([genre, showArray]) => {
    return (
      <div>
        <h2 className="row__genre">
          {genre}
          <span className="scroll__msg">
            Shift + Scroll on cards to scroll horizontally
          </span>
        </h2>

        <div
          style={{
            display: "flex",
            overflowY: "hidden",
            overflowX: "scroll",
          }}
        >
          {showArray.map(({ id, name, image, genres, summary }) => (
            <ShowCard
              key={id}
              name={name}
              image={image}
              summary={summary}
              genres={genres}
            />
          ))}
          ;
        </div>
      </div>
    );
  }, []);

  // useEffect(() => {}, [res]);

  return <>{(res?.length > 0 && displayRow(res)) || ""}</>;
};

export default GenreRow;
