import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Help from "./pages/help";
import HubRegister from "./pages/business/hubRegister";
import HubRegisterZone from "./pages/business/hubRegisterZone";
import HubZones from "./pages/business/hubZones";

function App() {
  return (
    <Switch>
      <Route path="/hub/register">
        <HubRegister />
      </Route>
      <Route path="/hub/register/zones">
        <HubRegisterZone />
      </Route>
      <Route path="/hub/zones">
        <HubZones />
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
