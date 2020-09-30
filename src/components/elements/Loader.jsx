import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div className="lds-roller" style={{ margin: "0 auto" }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
