import React, { useContext } from "react";
import SearchBarContext from "../../Contexts/SearchBarContext";
import { input } from "./Input.module.css";

const Input = () => {
  const { query, setQuery } = useContext(SearchBarContext);
  return (
    <input
      type="text"
      placeholder="Username"
      className={input}
      value={query}
      onChange={event => setQuery(event.target.value)}
    />
  );
};

export default Input;
