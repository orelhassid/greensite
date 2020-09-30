import React from "react";
import { HelmetProvider } from "react-helmet-async";
import HubContextProvider from "./contexts/HubContext";
import VisitorContextProvider from "./contexts/VisitorContext";
// import Routing from "./Routing";
import RoutingTest from "./RoutingTest";

function App() {
  return (
    <HelmetProvider>
      {/* <VisitorContextProvider>
        <HubContextProvider> */}
      <RoutingTest />
      {/* </HubContextProvider>
      </VisitorContextProvider> */}
    </HelmetProvider>
  );
}

export default App;
