import React from "react";
import { Header, Content } from "../layout";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <div className="site">
      <Header />
      {children}
    </div>
  );
}
