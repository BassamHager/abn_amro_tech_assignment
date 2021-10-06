import "./ShowCard.css";

const ShowCard = ({ name, id, image, summary, genres, rating }) => {
  const filterString = (string) => {
    return string.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <div className="card">
      {/* card image */}
      <img
        src={
          image?.medium ||
          "https://w1.pngwing.com/pngs/901/630/png-transparent-camera-graphic-film-reel-roll-film-movie-camera-cinema-filmstrip-movie-projector.png"
        }
        alt={name}
      />

      {/* show details */}
      <div className="details">
        {/* show name */}
        <h2>{name}</h2>

        <hr />

        {/* rating dynamic - todo */}
        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star" aria-hidden="true"></i>
          <span> {rating}</span>
        </div>

        {/* show summary */}
        <div className="info">
          <p>
            {filterString(summary || "").substring(0, 100) ||
              "No summary found!"}
            ...
          </p>
        </div>

        {/* genre tags */}
        <div className="tags">
          {genres?.map((genre) => (
            <span key={genre} className={genre.toLowerCase()}>
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
