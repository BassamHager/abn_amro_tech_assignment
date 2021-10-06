import { useCallback, useContext, useState } from "react";
import "./SearchShow.css";

// components
import Alert from "../../components/alert/Alert";

// context
import { ShowsContext } from "../../context/shows/showsContext";
import { AlertsContext } from "../../context/alerts/alertsContext";

const SearchShow = () => {
  // context
  const { searchShow } = useContext(ShowsContext);
  const { alert, setAlert } = useContext(AlertsContext);

  // inner state
  const [searchInput, setSearchInput] = useState("");

  // submit search
  const submitSearch = useCallback(
    (e) => {
      e.preventDefault();

      // alert if empty
      if (searchInput === "") setAlert("Please type something", "danger");
      // or fetch matching shows
      else searchShow(searchInput);

      // clear search field
      setSearchInput("");
    },
    [searchInput, searchShow, setAlert]
  );

  return (
    <div className="container">
      <div className="SearchShow__container">
        {/* alert */}
        {/*  */}
        {alert && console.log(alert)}
        {alert && <Alert message={alert.message} type={alert.type} />}

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
