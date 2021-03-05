import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { ApplicationsView } from "./views/ApplicationsView";
import { AboutView } from './views/AboutView';
import { ContactView } from "./views/ContactView";
import { WhatsIsView } from "./views/WhatsIsView";
import { TalkView } from "./views/TalkView";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/whatsIs" component={ WhatsIsView } />
        <Route exact path="/applications" component={ ApplicationsView } />
        <Route exact path="/about" component={ AboutView } />
        <Route exact path="/contact" component={ ContactView } />
        <Route exact path="/talk" component={ TalkView } />
        <Route path="/" component={ HomeView } />
      </Switch>
    </Router>
  );
}
