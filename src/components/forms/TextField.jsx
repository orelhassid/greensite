import React from "react";
import { ReactComponent as HelpIcon } from "../../assets/icons/help.svg";

const TextField = ({
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="form-field">
      <header>
        <label htmlFor={name}>{label}</label>
        <div className="help">
          <HelpIcon />
        </div>
      </header>

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextField;
