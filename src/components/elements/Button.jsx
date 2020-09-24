import React from "react";
import "./buttons.scss";

/**
 *
 * @param {string} label
 */
export default function Button({ label, type, variant }) {
  return (
    <button className={`btn btn-contained btn-${variant}`} type={type}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  variant: "primary",
};
