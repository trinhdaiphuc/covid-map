import React from "react";
import "./App.css";
import CovidDashboard from "./component/map/CovidDashboard";
import StatsDashboard from "./component/stats/StatsDashboard";
import Navigation from "./component/navigation/Navigation";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/map">
          <Navigation />
          <CovidDashboard />
        </Route>
        <Route exact path="/stats">
          <Navigation />
          <StatsDashboard />
        </Route>
        <Route path="/">
          <Navigation />
          <CovidDashboard />
        </Route>
        {/* <Route component={NoMatch}></Route> */}
      </Switch>
    </div>
  );
}

export default App;
