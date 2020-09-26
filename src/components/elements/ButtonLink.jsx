import React from "react";
import { Link } from "react-router-dom";
import "./buttons.scss";

/**
 *
 * @param {string} label
 * @param {string} style
 */
export default function ButtonLink({
  label,
  style,
  type,
  variant,
  icon,
  link,
  ...rest
}) {
  return (
    <Link to={link} className={`btn btn-${variant} btn-${style}`} {...rest}>
      <span className="label">{label}</span>
      {icon && <span className="icon">{icon}</span>}
    </Link>
  );
}

ButtonLink.defaultProps = {
  variant: "primary",
  style: "contained",
  link: "/",
};
