import "./ShowCard.css";

const ShowCard = ({ name, id, image, summary, genres }) => {
  const filterString = (string) => {
    return string.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <div className="card">
      {/* <div className="poster"></div> */}
      <img
        src={
          image?.medium ||
          "https://w1.pngwing.com/pngs/901/630/png-transparent-camera-graphic-film-reel-roll-film-movie-camera-cinema-filmstrip-movie-projector.png"
        }
        alt={name}
      />

      <div className="details">
        <h2>{name}</h2>
        {/* dynamic - todo */}
        <div className="rating">
          <p>rating:</p>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star" aria-hidden="true"></i>
          <span>4/5</span>
        </div>
        <div className="tags">
          {console.log(genres)}
          {genres?.map((genre) => (
            <span className={genre.toLowerCase()}> {genre} </span>
          ))}
        </div>
        <div className="info">
          <p>{filterString(summary).substring(0, 50)}...</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
