import React from "react";
import { Navigation } from "../layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./layout.scss";

export default function Layout({ children }) {
  return (
    <div className="site">
      <ToastContainer />
      <Navigation />
      {children}
    </div>
  );
}
