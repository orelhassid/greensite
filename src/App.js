import React from "react";
import { HelmetProvider } from "react-helmet-async";
import HubContextProvider from "./contexts/HubContext";
import VisitorContextProvider from "./contexts/VisitorContext";
import Routing from "./Routing";

function App() {
  return (
    <HelmetProvider>
      <VisitorContextProvider>
        <HubContextProvider>
          <Routing />
        </HubContextProvider>
      </VisitorContextProvider>
    </HelmetProvider>
  );
}

export default App;
