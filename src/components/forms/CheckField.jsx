import React from "react";
import { ReactComponent as HelpIcon } from "../../assets/icons/help.svg";

const InputField = ({
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="form-field form-field-checkbox">
      <div className="input">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          // checked={value}
        />
      </div>
      <div className="label">
        <header>
          <label htmlFor={name}>{label}</label>
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

export default InputField;
