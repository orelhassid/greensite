import React, { createContext, useEffect, useState } from "react";
import visitorService from "../services/visitorService";
import hubSevice from "../services/hubService";

export const VisitorContext = createContext(null);

const VisitorContextProvider = ({ children }) => {
  const [visitor, setVisitor] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    async function fetch() {
      if (localStorage.getItem("hub")) {
        const hub = localStorage.getItem("hub");
        setLocation(JSON.parse(hub));
      }
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
    try {
      const result = await visitorService.checkin(data, location);
    } catch (error) {
      console.error("Checkin Failed", error);
    }
  };

  const checkout = async (params) => {
    try {
      const result = await visitorService.checkout(params, visitor.cid);
    } catch (error) {
      console.error("Checkout Error", error);
    }
  };

  const storeLocation = async (paramsData) => {
    try {
      const result = await hubSevice.getHub(paramsData.hid);
      // if (paramsData.zid) {
      //   const result2 = await hubSevice.getZone(paramsData.hid, paramsData.zid);
      // }

      await visitorService.storeHub(result);
    } catch (error) {}
  };

  const isLogin = () => {
    return Object.keys(visitor).length === 0 && visitor.constructor === Object;
  };

  return (
    <VisitorContext.Provider
      value={{
        visitor,
        location,
        storeLocation,
        checkin,
        checkout,
        register,
        isLogin,
      }}
    >
      {children}
    </VisitorContext.Provider>
  );
};

export default VisitorContextProvider;
