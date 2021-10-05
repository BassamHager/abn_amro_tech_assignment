import React, { useCallback, useEffect } from "react";

// components
import ShowCard from "../showCard/ShowCard";

const GenreRow = ({ res }) => {
  // row setup
  const displayRow = useCallback(([genre, showArray]) => {
    return (
      <div>
        <hr />
        <h2>{genre}</h2>
        <hr />

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
