import "./SearchShow.css";

const SearchShow = () => {
  return (
    <div className="container">
      <form className="search-form">
        <input
          type="input"
          placeholder="Search..."
          className="search-bar border__rounded"
        />
        <i className="fas fa-search"></i>
      </form>
    </div>
  );
};

export default SearchShow;
