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
import RegisterElsePage from "./pages/visitor/RegisterElsePage";
import RegisterSuccessPage from "./pages/visitor/RegisterSuccessPage";
import LoginVisitorPage from "./pages/visitor/LoginVisitorPage";
import CheckOutPage from "./pages/visitor/CheckOutPage";
import CheckOutSuccessPage from "./pages/visitor/CheckOutSuccessPage";
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
      <Route path="/visitor/checkout/success/:hid?">
        <CheckOutSuccessPage />
      </Route>
      <Route path="/visitor/checkout/:hid">
        <CheckOutPage />
      </Route>
      <Route path="/visitor/checkin/:hid?/:zid?">
        <CheckInPage />
      </Route>
      <Route path="/visitor/register">
        <RegisterVisitorPage />
      </Route>
      <Route path="/visitor/register/else">
        <RegisterElsePage />
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
      <Route path={"/hub/zone/:hid?/:zid?"}>
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
