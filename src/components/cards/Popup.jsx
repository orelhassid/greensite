import React from "react";
import "./popup.scss";

import { useHistory, useLocation } from "react-router-dom";

import ButtonIcon from "../elements/ButtonIcon";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

const Popup = ({ children }) => {
  const location = useLocation();
  const history = useHistory();
  const closeCard = () => {
    history.replace({
      ...location,
      search: "",
    });
  };
  return (
    <article className="popup">
      <div className="close" onClick={() => closeCard()}>
        <ButtonIcon icon={<CloseIcon />} />
      </div>
      {children}
    </article>
  );
};

export default Popup;
