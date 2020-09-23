import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Help from "./pages/help";
import HubRegister from "./pages/business/hubRegister";
import HubRegisterZone from "./pages/business/hubRegisterZone";

function App() {
  return (
    <Switch>
      <Route path="/hub/register">
        <HubRegister />
      </Route>
      <Route path="/hub/zones">
        <HubRegisterZone />
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
