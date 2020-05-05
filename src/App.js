import React from "react";
import "./App.css";
import CovidDashboard from "./component/map/CovidDashboard";
import StatsDashboard from "./component/stats/StatsDashboard";
import Navigation from "./component/navigation/Navigation";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/map" component={CovidDashboard} />
        <Route exact path="/stats" component={StatsDashboard} />
        <Route exact path="/" component={CovidDashboard} />
      </Switch>
    </div>
  );
}

export default App;
