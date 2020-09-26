import { useEffect } from "react";
import marked from "marked";
import { useLocation } from "react-router-dom";
// import queryString from "query-string";

export default function useMarkdown(setMarkdown) {
  const location = useLocation();

  useEffect(() => {
    let readmePath;
    // const parse = queryString.parse(location.search);
    try {
      switch (location.pathname) {
        case "/help":
          readmePath = require("../assets/content/helpContent.md");
          break;
        case "/visitor/checkin":
          readmePath = require("../assets/content/healthContent.md");
          break;
        default:
          readmePath = require("../assets/content/defaultContent.md");
      }
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
  }, []);
}
