import React from "react";
import "./popup.scss";

const Popup = ({ children }) => {
  return <article className="popup">{children}</article>;
};

export default Popup;
