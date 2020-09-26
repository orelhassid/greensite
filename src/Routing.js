import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Common
import Home from "./pages/home";
import Help from "./pages/help";
import HealthPage from "./pages/HealthPage";
import Logout from "./pages/logout";
import NotFound from "./pages/notfound";
// Hub / Businness
import RegisterHubPage from "./pages/business/RegisterHubPage";
import RegisterZonesPage from "./pages/business/RegisterZonesPage";
// import ZoneSinglePage from "./pages/business/ZoneSinglePage";
import LoginHubPage from "./pages/business/LoginHubPage";
import ZonesPage from "./pages/business/zonesPage";
// Visitor
import RegisterVisitorPage from "./pages/visitor/RegisterVisitorPage";
import RegisterSuccessPage from "./pages/visitor/RegisterSuccessPage";
import LoginVisitorPage from "./pages/visitor/LoginVisitorPage";
import CheckOutPage from "./pages/visitor/CheckOutPage";
import CheckOutSucessPage from "./pages/visitor/CheckOutSucessPage";
import CheckOutZonePage from "./pages/visitor/CheckOutZonePage";
import CheckInPage from "./pages/visitor/CheckInPage";
// Zones
import ZonesSinglePage from "./pages/zones/ZonesSinglePage";

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
      <Route path="/visitor/checkout/zone">
        <CheckOutZonePage />
      </Route>
      <Route path="/visitor/checkout/sucess">
        <CheckOutSucessPage />
      </Route>
      <Route path="/visitor/checkout">
        <CheckOutPage />
      </Route>
      <Route path="/visitor/checkin">
        <CheckInPage />
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
        <RegisterHubPage />
      </Route>
      <Route path={["/zones"]}>
        <ZonesSinglePage />
        {/* <ZoneSinglePage /> */}
      </Route>
      <Route path="/hub/zones">
        <ZonesPage />
      </Route>
      {/* Common */}
      <Route path="/help">
        <Help />
      </Route>
      <Route path="/health">
        <HealthPage />
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
