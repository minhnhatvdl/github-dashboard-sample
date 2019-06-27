import React, { useState, useEffect } from "react";
// contexts
import AppContext from "../Contexts/AppContext";

const AppProvider = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  // handle theme
  useEffect(() => {
    const handleTheme = () => {
      document.documentElement.classList.add("animationColorTheme");
      document.documentElement.setAttribute("data-theme", theme);
      window.setTimeout(() => {
        document.documentElement.classList.remove("animationColorTheme");
      }, 500);
    };
    handleTheme();
  }, [theme]);
  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        isOpen,
        toggleMenu: () => setIsOpen(!isOpen),
        stateChangeHandler: newState => setIsOpen(newState.isOpen)
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
