import React, { useState } from 'react';
import { connect } from 'react-redux';

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
      <Header onSearch={onSearch} />
      <MediaList media={searchQuerys(props.media, search)} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    media: state.media.movies.concat(state.media.series),
  };
};

export default connect(mapStateToProps, null)(SearchPage);
