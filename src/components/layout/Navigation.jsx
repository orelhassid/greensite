import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HelpIcon } from "../../assets/icons/help.svg";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

export const Navigation = () => {
  return (
    <nav className="site-nav">
      <Logo />
      <ul>
        <li>
          <Link to="/help">
            <HelpIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
const Logo = () => (
  <div className="logo">
    <span className="icon">
      <LogoIcon />
    </span>
    <span className="name">GreenSite Pass</span>
  </div>
);
