import React, { useContext } from "react";
import SearchBarContext from "../Contexts/SearchBarContext";

export const withClickSearch = WrappedConponent => ({ ...props }) => {
  const { query } = useContext(SearchBarContext);
  const clickSearch = () => {
    if (query) {
      props.history.push(`/${query}`);
    }
  };
  return <WrappedConponent {...props} handleClick={clickSearch} />;
};
