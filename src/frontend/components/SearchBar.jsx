import React, { useState } from 'react';

import '../assets/style/components/SearchBar.scss';

const SearchBar = (props) => {
  const handleChange = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <>
      <div className='searchBar'>
        <input
          type='text'
          placeholder='Search by title, year, category, director, etc...'
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default SearchBar;
