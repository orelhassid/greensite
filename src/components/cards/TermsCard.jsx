import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Popup from "./Popup";
import useMarkdown from "../../hooks/useMarkdown";
import ButtonIcon from "../elements/ButtonIcon";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
// import marked from "marked";

const TermsCard = () => {
  const [markdown, setMarkdown] = useState();
  useMarkdown(setMarkdown);

  const location = useLocation();
  const history = useHistory();
  const closeCard = () => {
    history.replace({
      ...location,
      search: "",
    });
  };
  return (
    <Popup>
      <div className="close" onClick={() => closeCard()}>
        <ButtonIcon icon={<CloseIcon />} />
      </div>
      <section dangerouslySetInnerHTML={{ __html: markdown }}></section>
    </Popup>
  );
};

export default TermsCard;
