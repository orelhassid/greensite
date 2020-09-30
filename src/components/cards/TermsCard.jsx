import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import marked from "marked";

const TermsCard = ({ onClick }) => {
  const [markdown, setMarkdown] = useState();
  useEffect(() => {
    try {
      const readmePath = require("../../assets/content/healthContent.md");
      fetch(readmePath)
        .then((response) => {
          return response.text();
        })
        .then((text) => {
          setMarkdown(marked(text));
        });
    } catch (error) {
      console.error("Markdown error", error);
    }
  });

  return (
    <Popup onClick={onClick}>
      <section dangerouslySetInnerHTML={{ __html: markdown }}></section>
    </Popup>
  );
};

export default TermsCard;
