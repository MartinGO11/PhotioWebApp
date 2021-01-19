import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ApplicationsView } from "./views/ApplicationsView";
import { HomeView } from "./views/HomeView";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ HomeView } />
        <Route exact path="/applications" component={ ApplicationsView } />
        <Route path="/" component={ HomeView } />
      </Switch>
    </Router>
  );
}