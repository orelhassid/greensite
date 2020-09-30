import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import HubContext from "../../contexts/HubContext";
// Common
// import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as HelpIcon } from "../../assets/icons/help.svg";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
// Hub / Business
import { ReactComponent as RegisterIcon } from "../../assets/icons/register.svg";
import { ReactComponent as QrCode } from "../../assets/icons/qrcode.svg";
import { ReactComponent as ZoneIcon } from "../../assets/icons/zone.svg";
// Visitor
import { ReactComponent as CheckInIcon } from "../../assets/icons/checkin.svg";
// import { ReactComponent as CheckOutIcon } from "../../assets/icons/checkout.svg";
// import { ReactComponent as LoginIcon } from "../../assets/icons/login.svg";
// import { ReactComponent as Logout } from "../../assets/icons/logout.svg";

const commonLinks = [
  // { label: <Logout />, url: "/logout" },
  // { label: <HomeIcon />, url: "/" },
  { label: <HelpIcon />, url: "/help" },
];

const visitorLinks = [
  // { label: <LoginIcon />, url: "/visitor/login" },
  // { label: <RegisterIcon />, url: "/visitor/register" },
  { label: <CheckInIcon />, url: "/visitor/checkin" },
  // { label: <CheckOutIcon />, url: "/visitor/checkout" },
];

const hubLinks = [
  { label: <RegisterIcon />, url: "/hub/register" },
  // { label: <LoginIcon />, url: "/hub/login" },
  { label: <ZoneIcon />, url: "/hub/register/zones" },
  { label: <QrCode />, url: "/hub/zones" },
];

export const Navigation = () => {
  const [links, setLinks] = useState([]);
  const hub = useContext(HubContext);

  // console.log(hub);
  let location = useLocation();
  const path = location.pathname.replace(/^\/([^\/]*).*$/, "$1"); // eslint-disable-line

  useEffect(() => {
    // Display links depending the logged account
    // Display Visitors Links
    if (path === "visitor") return setLinks([...visitorLinks, ...commonLinks]);
    // Display Hub/Business Links
    if (path === "hub") return setLinks([...hubLinks, ...commonLinks]);
    setLinks(commonLinks);
  }, [path]);
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
  <Link to="/" className="logo">
    <span className="icon">
      <LogoIcon />
    </span>
    <div className="name">
      <h2 className="name">GreenSite Pass</h2>
      <small className="name">Your Green Pass for normal life</small>
    </div>
  </Link>
);
