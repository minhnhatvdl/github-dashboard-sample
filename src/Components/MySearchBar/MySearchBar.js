import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { withClickSearch } from "../../HOCs/withClickSearch";
import { searchBar } from "./MySearchBar.module.css";

const MySearchBar = ({ history }) => {
  const ButtonWithClickSearch = withClickSearch(Button);
  return (
    <div className={searchBar}>
      <Input />
      <ButtonWithClickSearch history={history}>Search</ButtonWithClickSearch>
    </div>
  );
};

export default MySearchBar;
