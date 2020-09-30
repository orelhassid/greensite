import React, { createContext, useEffect, useState } from "react";
import hubService from "../services/hubService";

export const HubContext = createContext(null);

const HubContextProvider = ({ children }) => {
  const [hub, setHub] = useState({});

  useEffect(() => {
    async function fetch() {
      const hid = localStorage.getItem("hub-key");
      const data = await hubService.getHub(hid);
      console.log("zonesData", data);
      setHub(data);
    }
    fetch();
  }, []);

  const register = async (account) => {
    const data = await hubService.register(account);
    setHub(data);
  };

  const addZones = async (type, count) => {
    const result = await hubService.addZones(type, count);
    console.log("Add Zones", result);
  };

  return (
    <HubContext.Provider value={{ hub, register, addZones }}>
      {children}
    </HubContext.Provider>
  );
};

export default HubContextProvider;