import "../styles/SearchBox.css";

function SearchBox({ placeholder, onChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default SearchBox;
