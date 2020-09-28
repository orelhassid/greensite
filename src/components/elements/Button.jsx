import React from "react";
import "./buttons.scss";

/**
 *
 * @param {string} label
 * @param {string} style
 */
export default function Button({
  label,
  style,
  type,
  variant,
  icon,
  formId,
  disabled,
  ...rest
}) {
  return (
    <button
      className={`btn btn-${variant} btn-${style}`}
      type={type}
      form={formId}
      disabled={disabled}
      {...rest}
    >
      <span className="label">{label}</span>
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
}

Button.defaultProps = {
  variant: "primary",
  style: "contained",
  disabled: false,
};
