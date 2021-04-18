import React, { ChangeEventHandler } from "react";

import "../assets/style/components/SearchBar.scss";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onSearch(e.target.value);
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
