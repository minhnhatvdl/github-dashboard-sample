import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Button from "../Button/Button";
import { withToggleTheme } from "../../HOCs/withToggleTheme";
import { header, title } from "./Header.module.css";

const Header = () => {
  const ButtonWithToggleTheme = withToggleTheme(Button);
  return (
    <div className={header}>
      <BurgerMenu />
      <Link exact="true" to={"/"} className={title}>
        <span>Github Dashboard Sample</span>
      </Link>
      <ButtonWithToggleTheme>Theme</ButtonWithToggleTheme>
    </div>
  );
};

export default Header;
