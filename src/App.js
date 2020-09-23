import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/home";
import Help from "./pages/help";
import HubRegister from "./pages/business/hubRegister";
import HubRegisterZone from "./pages/business/hubRegisterZone";
import HubZones from "./pages/business/hubZones";
import Logout from "./pages/logout";
import NotFound from "./pages/notfound";

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
      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/not-found">
        <NotFound />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
      <Redirect to="/not-found" />
    </Switch>
  );
}

export default App;
