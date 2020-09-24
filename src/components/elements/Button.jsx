import React from "react";
import "./buttons.scss";

/**
 *
 * @param {string} label
 */
export default function Button({ label, style, type, variant, icon }) {
  return (
    <button className={`btn btn-${style} btn-${variant}`} type={type}>
      <span className="label">{label}</span>
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
}

Button.defaultProps = {
  variant: "primary",
  style: "contained",
};
