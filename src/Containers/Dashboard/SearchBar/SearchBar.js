import React from "react";
import MySearchBar from "../../../Components/MySearchBar/MySearchBar";
import SearchBarProvider from "../../../Providers/SearchBarProvider";

const SearchBar = ({ history }) => (
  <SearchBarProvider>
    <MySearchBar history={history} />
  </SearchBarProvider>
);

export default SearchBar;
