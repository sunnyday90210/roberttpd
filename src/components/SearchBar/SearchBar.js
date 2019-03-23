import React from 'react';
import './searchbar.css';


const SearchBar = ({ searchChange }) => {
     
  return (
    <div className="search-field">
      <input
        className="d-block mx-auto mt-5"
        type="search"
        placeholder="Search Patients"
        onChange={searchChange}
      />
      <span className="search-icon"><i class="fas fa-search"></i></span>
    </div>
  );
};

export default SearchBar;
