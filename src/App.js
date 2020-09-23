import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
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
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
