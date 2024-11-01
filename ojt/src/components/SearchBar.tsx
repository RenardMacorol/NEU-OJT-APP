import "../styles/App.css";
import React from "react";

const SearchBar: React.FC = () => {
    return(
      <div className="search-bar flex justify-center items-center p-5">
        <input type="text" placeholder="Search" className="p-2.5 rounded-xl text-base w-5/12 m-2.5"/>
      </div>
    )
}

export default SearchBar;
