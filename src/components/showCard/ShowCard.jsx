import { Link, useHistory } from "react-router-dom";
import "./ShowCard.css";

const ShowCard = ({
  name,
  id,
  image,
  summary,
  genres,
  rating,
  officialSite,
  details, // embedded only when clicking a show card to manipulate style
}) => {
  // use history to control when & where should card stop functioning as a link
  const history = useHistory();

  // filter out html tags
  const filterString = (string) => {
    return string.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <Link
      to={
        history.location.pathname !== `/showDetails`
          ? `/showDetails/${id}`
          : "/"
      }
      // onClick={details && clearShowDetails}
    >
      <div className={`card ${details && "showDetails"}`}>
        {/* card image */}
        <img
          src={
            details
              ? image?.original
              : image?.medium ||
                "https://w1.pngwing.com/pngs/901/630/png-transparent-camera-graphic-film-reel-roll-film-movie-camera-cinema-filmstrip-movie-projector.png"
          }
          alt={name}
        />

        {/* show card details */}
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
              {
                summary /* if summary */
                  ? details /* and if showDetails */
                    ? filterString(summary) /* if both display this */
                    : filterString(summary).substring(0, 100) +
                      "..." /* if only summary do this*/
                  : "No summary found!" /* if none do this */
              }
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

          {details && (
            <p className="site">
              <span>Official Site:</span> <br />
              {officialSite ? officialSite : " No official site"}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ShowCard;
