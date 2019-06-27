import React, { useContext } from "react";
import { Link } from "react-router-dom";
// context
import AppContext from "../../Contexts/AppContext";
// burger menu
import { slide as Menu } from "react-burger-menu";
// css
import { link } from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const { isOpen, stateChangeHandler, toggleMenu } = useContext(AppContext);
  return (
    <Menu isOpen={isOpen} onStateChange={state => stateChangeHandler(state)}>
      <Link to="/" exact="true" onClick={toggleMenu} className={link}>
        Home
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
