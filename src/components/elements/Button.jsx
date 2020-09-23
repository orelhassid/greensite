import React from "react";
import "./buttons.scss";

/**
 *
 * @param {string} label
 */
export default function Button({ label, type }) {
  return (
    <button className="btn btn-contained" type={type}>
      {label}
    </button>
  );
}
