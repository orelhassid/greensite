import React, { createContext, useEffect, useState } from "react";
import hubService from "../services/hubService";

export const HubContext = createContext(null);

const HubContextProvider = ({ children }) => {
  const [hub, setHub] = useState({});
  const [zones, setZones] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        if (localStorage.getItem("hub-key")) {
          const hid = localStorage.getItem("hub-key");
          const data = await hubService.getHub(hid);
          const zonesData = await hubService.getZones(hid);
          setZones(zonesData);
          setHub(data);
        }
      } catch (error) {
        console.error("Hub Context:", error);
      }
    }
    fetch();
  }, []);

  const register = async (account) => {
    const data = await hubService.register(account);
    setHub(data);
  };

  const addZones = async (type, count) => {
    try {
      const result = await hubService.addZones(type, count);
      setZones(zones, ...result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <HubContext.Provider value={{ hub, register, addZones, zones }}>
      {children}
    </HubContext.Provider>
  );
};

export default HubContextProvider;
