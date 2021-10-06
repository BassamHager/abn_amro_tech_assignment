import { useCallback, useContext, useState } from "react";
import "./SearchShow.css";

// components
import Alert from "../../components/alert/Alert";

// context
import { ShowsContext } from "../../context/shows/showsContext";

const SearchShow = () => {
  // context
  const { searchShow } = useContext(ShowsContext);

  // inner state
  const [searchInput, setSearchInput] = useState("");

  // submit search
  const submitSearch = useCallback(
    (e) => {
      e.preventDefault();

      // fetch matching shows
      searchShow(searchInput);

      // clear search field
      setSearchInput("");
    },
    [searchInput, searchShow]
  );

  return (
    <div className="container">
      <div className="SearchShow__container">
        {/* search alert */}
        <Alert msg="please enter to search a TV-show" type="danger" />

        {/* search form  */}
        <form className="SearchShow__form " onSubmit={(e) => submitSearch(e)}>
          {/* search input */}
          <input
            type="text"
            placeholder="Search for TV show"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="input__sticky"
          />

          {/* submitting button */}
          <button type="submit" className="btn btn-block">
            {/* search icon */}
            <i className="fa fa-search " />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchShow;
