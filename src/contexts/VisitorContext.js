import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import visitorService from "../services/visitorService";
import hubSevice from "../services/hubService";

export const VisitorContext = createContext(null);

const VisitorContextProvider = ({ children }) => {
  const [visitor, setVisitor] = useState({});
  const [location, setLocation] = useState({});
  const [params, setParams] = useState({});

  useEffect(() => {
    async function fetch() {
      const hub = localStorage.getItem("hub");
      setLocation(JSON.parse(hub));
      const data = await visitorService.getVisitor();
      setVisitor(data);
    }
    fetch();
  }, []);

  const register = async (account) => {
    const data = await visitorService.register(account);
    setVisitor(data);
  };

  const checkin = async (data) => {
    const result = await visitorService.checkin(data, location);
    console.log("checkin", result);
  };

  const storeLocation = async (paramsData) => {
    try {
      const result = await hubSevice.getHub(paramsData.hid);
      if (paramsData.zid) {
        const result2 = await hubSevice.getZone(paramsData.hid, paramsData.zid);
      }
      console.log("Result Store Locaiton", result);
      await visitorService.storeHub(result);
    } catch (error) {}
  };

  return (
    <VisitorContext.Provider
      value={{ visitor, location, storeLocation, checkin, register }}
    >
      {children}
    </VisitorContext.Provider>
  );
};

export default VisitorContextProvider;
