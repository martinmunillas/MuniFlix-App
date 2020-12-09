import React, { useState } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';

import Header from '../components/Header';
import MediaList from '../components/MediaList';
import searchQuerys from '../utils/funcs/searchQuerys';

const SearchPage = (props) => {
  const [search, setSearch] = useState('');

  const onSearch = (query) => {
    setSearch(query);
  };

  return (
    <>
      <Header />
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Search</h1>
      <SearchBar onSearch={onSearch} />
      <MediaList
        media={searchQuerys(props.media, search)}
        title={`Showing results for: ${search}`}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    media: state.media.movies.concat(state.media.series),
  };
};

export default connect(mapStateToProps, null)(SearchPage);
