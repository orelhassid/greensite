import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const VisitorContext = createContext();

const VisitorContextProvider = ({ children }) => {
  const [location, setLocation] = useState({});

  // useEffect(() => {
  //   setLocation(JSON.parse(localStorage.getItem("hub")));
  // }, []);

  const addLocation = (data) => {
    setLocation(data);
  };
  return (
    <VisitorContext.Provider value={{ location, setLocation }}>
      {children}
    </VisitorContext.Provider>
  );
};

export default VisitorContextProvider;
