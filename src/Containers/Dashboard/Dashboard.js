import React from "react";
import { Route, Switch } from "react-router-dom";
// components
import Header from "../../Components/Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import ListRepos from "./ListRepos/ListRepos";
import Repos from "./Repos/Repos";
// provider
import AppProvider from "../../Providers/AppProvider";

const Dashboard = () => (
  <AppProvider>
    <Header />
    <Switch>
      <Route path="/" exact component={SearchBar} />
      <Route path="/:username" exact component={ListRepos} />
      <Route path="/:username/:repos" exact component={Repos} />
    </Switch>
  </AppProvider>
);

export default Dashboard;