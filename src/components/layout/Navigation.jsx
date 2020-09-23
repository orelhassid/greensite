import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="site-nav">
      <Logo />
      <ul>
        <li>
          <Link to="/help">🆘</Link>
        </li>
      </ul>
    </nav>
  );
};
const Logo = () => (
  <div className="logo">
    <span className="icon">🛡</span>
    <span className="name">GreenSite Pass</span>
  </div>
);
