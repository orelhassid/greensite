import React from "react";
import { Navigation } from "../layout";
import "./layout.scss";

export default function Layout({ children }) {
  return (
    <div className="site">
      <Navigation />
      {children}
    </div>
  );
}
