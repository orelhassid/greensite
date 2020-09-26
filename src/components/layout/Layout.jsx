import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigation } from "../layout";

import "./layout.scss";

export default function Layout({ children }) {
  return (
    <div className="site">
      <ToastContainer />
      {/* <Navigation /> */}
      {children}
    </div>
  );
}
