import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";

import Header from "../components/Header";
import MediaList from "../components/MediaList";
import searchQuerys from "../utils/funcs/searchQuerys";

const SearchPage = ({}) => {
  const [search, setSearch] = useState("");
  const media = useSelector((state: any) =>
    state.media.movies.concat(state.media.series)
  );
  const onSearch = (query: string) => {
    setSearch(query);
  };

  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Search</h1>
      <SearchBar onSearch={onSearch} />
      <MediaList
        media={searchQuerys(media, search)}
        title={`Showing results for: ${search}`}
      />
    </>
  );
};

export default SearchPage;
