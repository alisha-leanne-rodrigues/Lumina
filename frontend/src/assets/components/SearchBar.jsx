import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar() {

  return (
    <div className="search-container">

      <FaSearch className="search-icon"/>

      <input
        type="text"
        placeholder="Search stocks..."
      />

    </div>
  );
}

export default SearchBar;