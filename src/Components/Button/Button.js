import React from "react";
import { button } from "./Button.module.css";

const Button = ({ handleClick, children }) => (
  <button className={button} onClick={handleClick}>
    {children}
  </button>
);

export default Button;
