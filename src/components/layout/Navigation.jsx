import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HelpIcon } from "../../assets/icons/help.svg";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as RegisterIcon } from "../../assets/icons/register.svg";
import { ReactComponent as LoginIcon } from "../../assets/icons/login.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as QrCode } from "../../assets/icons/qrcode.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import { ReactComponent as ZoneIcon } from "../../assets/icons/zone.svg";
import { getVisitor } from "../../services/visitorService";
import { getHub } from "../../services/hubService";

const commonLinks = [
  { label: <Logout />, url: "/logout" },
  { label: <HomeIcon />, url: "/" },
  { label: <HelpIcon />, url: "/help" },
];

const visitorLinks = [{ label: <RegisterIcon />, url: "/visitor/register" }];

const hubLinks = [
  { label: <RegisterIcon />, url: "/hub/register" },
  { label: <LoginIcon />, url: "/hub/login" },
  { label: <ZoneIcon />, url: "/hub/register/zones" },
  { label: <QrCode />, url: "/hub/zones" },
];

export const Navigation = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Display links depending the logged account
    // Display Visitors Links
    if (getVisitor()) return setLinks([...visitorLinks, ...commonLinks]);
    // Display Hub/Business Links
    if (!getHub()) return setLinks([...hubLinks, ...commonLinks]);
    setLinks(commonLinks);
  }, []);
  return (
    <nav className="site-nav">
      <Logo />
      <ul>
        {links.map((item) => (
          <li key={item.url}>
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
