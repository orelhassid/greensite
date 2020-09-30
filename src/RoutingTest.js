import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Routes
import CommonsRoutes from "./routing/CommonsRoutes";
import VisitorRoutes from "./routing/VisitorRoutes";
import HubRoutes from "./routing/HubRoutes";
// Providers
import VisitorContextProvider from "./contexts/VisitorContext";
import HubContextProvider from "./contexts/HubContext";

const RoutingTest = () => {
  return (
    <Switch>
      {VisitorRoutes.map(({ path, component: Component, ...rest }) => (
        <Route key={path} path={path} {...rest}>
          <VisitorContextProvider>{<Component />}</VisitorContextProvider>
        </Route>
      ))}

      {HubRoutes.map(({ path, component: Component, ...rest }) => (
        <Route key={path} path={path} {...rest}>
          <HubContextProvider>
            <Component />
          </HubContextProvider>
        </Route>
      ))}

      {CommonsRoutes.map(({ path, component: Component, ...rest }) => (
        <Route key={path} path={path}>
          <Component />
        </Route>
      ))}
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default RoutingTest;
