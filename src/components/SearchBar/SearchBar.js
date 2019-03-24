import React from 'react';
import './searchbar.css';


const SearchBar = ({ searchChange }) => {
     
  return (
    <div className="search-field d-block mx-auto">
        <span className="search-icon"><i className="fas fa-search"></i></span>
      <input id="searchbox" 
        type="search"
        placeholder="Search Patients"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;
