import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HelpIcon } from "../../assets/icons/help.svg";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

const links = [
  { label: "Home", url: "/" },
  { label: "Register", url: "/hub/register" },
  { label: "Zones", url: "/hub/zones" },
  { label: <HelpIcon />, url: "/help" },
];
export const Navigation = () => {
  return (
    <nav className="site-nav">
      <Logo />
      <ul>
        {links.map((item) => (
          <li key={item.label}>
            <Link to={item.url}>{item.label}</Link>
          </li>
        ))}
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
