import React, { createContext, useState } from "react";
import visitorService from "../services/visitorService";

export const VisitorContext = createContext(null);

const VisitorContextProvider = ({ children }) => {
  const [visitor, setVisitor] = useState({});

  const register = async (account) => {
    const data = await visitorService.register(account);
    console.log("Data", data);
    setVisitor(data);
    console.log(visitor);
  };

  const login = async (account) => {
    const data = await visitorService.register(account);
    console.log(data);
    setVisitor(data);
  };

  return (
    <VisitorContext.Provider value={{ visitor, register }}>
      {children}
    </VisitorContext.Provider>
  );
};

export default VisitorContextProvider;
