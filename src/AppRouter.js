import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { ApplicationsView } from "./views/ApplicationsView";
import { AboutView } from './views/AboutView';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ HomeView } />
        <Route exact path="/applications" component={ ApplicationsView } />
        <Route exact path="/about" component={ AboutView } />
        <Route path="/" component={ HomeView } />
      </Switch>
    </Router>
  );
}
