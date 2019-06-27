import React, { useState } from "react";
// contexts
import SearchBarContext from "../Contexts/SearchBarContext";

const SearchBarProvider = ({ ...props }) => {
  const [query, setQuery] = useState("");
  return (
    <SearchBarContext.Provider value={{ query, setQuery }}>
      {props.children}
    </SearchBarContext.Provider>
  );
};

export default SearchBarProvider;
