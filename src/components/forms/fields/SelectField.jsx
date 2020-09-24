import React from "react";
import { ReactComponent as HelpIcon } from "../../../assets/icons/help.svg";

const SelectField = ({
  name,
  label,
  placeholder,
  value,
  options,
  onChange,
  error,
  checked,
}) => {
  return (
    <div className="form-field">
      <header>
        <label htmlFor={name}>{label}</label>
        <div className="help">
          <HelpIcon />
        </div>
      </header>

      <select name={name} id={name} onChange={onChange} value={value}>
        <option value="" disabled defaultValue={checked} hidden>
          {placeholder}
        </option>
        {options.map((item) => (
          <option key={item} value={item}>{`${item} Minutes`}</option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectField;
