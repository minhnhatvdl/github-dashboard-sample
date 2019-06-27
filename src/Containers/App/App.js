import React from "react";
// components
import Dashboard from "../../Containers/Dashboard/Dashboard";
// router
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>
);

export default App;
