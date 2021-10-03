import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>404 - Not Found!</h2>
      <p>
        Please search a movie, or you can go <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
