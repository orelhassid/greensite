import React from "react";
import "./popup.scss";

import { useHistory, useLocation } from "react-router-dom";

import ButtonIcon from "../elements/ButtonIcon";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

const Popup = ({ children, onClick }) => {
  return (
    <article className="popup">
      <div className="close" onClick={onClick}>
        <ButtonIcon icon={<CloseIcon />} />
      </div>
      {children}
    </article>
  );
};

export default Popup;
