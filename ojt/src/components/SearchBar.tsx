import "../styles/App.css";
import React from "react";

const SearchBar: React.FC = () => {
    return(
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-bar"/>
      </div>
    )
}

export default SearchBar;
