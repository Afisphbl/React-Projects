import "../styles/SearchBar.css";

function SearchBar() {
  return (
    <form className="search-bar">
      <input
        type="text"
        placeholder="Enter city name..."
        className="search-input"
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
