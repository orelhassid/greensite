import React from "react";
import { ReactComponent as HelpIcon } from "../../../assets/icons/help.svg";

const CheckField = ({
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
  error,
  id,
  checked,
}) => {
  return (
    <div className="form-field form-field-checkbox">
      <div className="input">
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onClick={onChange}
          onChange={onChange}
          defaultChecked={checked}
        />
      </div>
      <div className="label">
        <header>
          <label htmlFor={id}>{label}</label>
          <div className="help">
            <HelpIcon />
          </div>
        </header>
        <small>{placeholder}</small>
      </div>
      <div className="info">
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default CheckField;
