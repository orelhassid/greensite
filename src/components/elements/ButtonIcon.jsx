import React from "react";
import "./buttons.scss";

/**
 *
 * @param {string} label
 * @param {string} style
 */
export default function ButtonIcon({ type, icon, ...rest }) {
  return (
    <button className={`btn-icon`} type={type} {...rest}>
      {icon}
    </button>
  );
}

ButtonIcon.defaultProps = {
  type: "button",
};
