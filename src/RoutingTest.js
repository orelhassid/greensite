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
      {UserRoutes.map(({ path, component: Component, ...rest }) => (
        <Route key={path} {...rest}>
          <UserContextProvider>
            <Component />
          </UserContextProvider>
        </Route>
      ))}

      {ManagerRoutes.map(({ path, component: Component, ...rest }) => (
        <Route key={path} {...rest}>
          <ManagerContextProvider>
            <Component />
          </ManagerContextProvider>
        </Route>
      ))}

      {CommonsRoutes.map((props) => (
        <Route key={props.path} {...props} />
      ))}
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default RoutingTest;
