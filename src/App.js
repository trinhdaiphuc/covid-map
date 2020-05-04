import React from "react";
import "./App.css";
import CovidDashboard from "./component/map/CovidDashboard";
import Navigation from "./component/navigation/Navigation";
import { Switch, Route } from "react-router-dom";

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/map">
          <Navigation />
          <CovidDashboard />
        </Route>
        <Route exact path="/">
          <Navigation />
          <CovidDashboard />
        </Route>
        <Route component={NoMatch}></Route>
      </Switch>
    </div>
  );
}

export default App;
