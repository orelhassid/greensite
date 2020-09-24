import React from "react";
import { HelmetProvider } from "react-helmet-async";

import Routing from "./Routing";

function App() {
  return (
    <HelmetProvider>
      <Routing />
    </HelmetProvider>
  );
}

export default App;
