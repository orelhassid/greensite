import React, { useState } from "react";
import Popup from "./Popup";
import useMarkdown from "../../hooks/useMarkdown";
// import marked from "marked";

const TermsCard = () => {
  const [markdown, setMarkdown] = useState();
  useMarkdown(setMarkdown);

  return (
    <Popup>
      <section dangerouslySetInnerHTML={{ __html: markdown }}></section>
    </Popup>
  );
};

export default TermsCard;
