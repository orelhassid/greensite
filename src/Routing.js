import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Help from "./pages/help";
import HubRegister from "./pages/business/hubRegister";
import RegisterZonesPage from "./pages/business/RegisterZonesPage";
import LoginHubPage from "./pages/business/LoginHubPage";
import ZonesPage from "./pages/business/zonesPage";
import Logout from "./pages/logout";
import NotFound from "./pages/notfound";
import RegisterVisitorPage from "./pages/visitor/RegisterVisitorPage";
import RegisterSuccessPage from "./pages/visitor/RegisterSuccessPage";
import LoginVisitorPage from "./pages/visitor/LoginVisitorPage";

const Routing = () => {
  return (
    <Switch>
      {/* Visitor */}
      <Route path={["/visitor/register/success", "/visitor/login/success"]}>
        <RegisterSuccessPage />
      </Route>
      <Route path="/visitor/login">
        <LoginVisitorPage />
      </Route>
      <Route path="/visitor/register">
        <RegisterVisitorPage />
      </Route>
      {/* Hub */}
      <Route path="/hub/register/zones">
        <RegisterZonesPage />
      </Route>
      <Route path="/hub/login">
        <LoginHubPage />
      </Route>
      <Route path="/hub/register">
        <HubRegister />
      </Route>
      <Route path="/hub/zones">
        <ZonesPage />
      </Route>
      {/* Common */}
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
};
export default Routing;
