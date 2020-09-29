import React from "react";
import { HelmetProvider } from "react-helmet-async";
import VisitorContextProvider from "./contexts/VisitorContext";
import Routing from "./Routing";

function App() {
  return (
    <HelmetProvider>
      <VisitorContextProvider>
        <Routing />
      </VisitorContextProvider>
    </HelmetProvider>
  );
}

export default App;
