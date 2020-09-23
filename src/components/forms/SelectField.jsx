import React from "react";
import { ReactComponent as HelpIcon } from "../../assets/icons/help.svg";

const SelectField = ({
  name,
  label,
  placeholder,
  value,
  options,
  onChange,
  error,
}) => {
  const listId = name + "_list";
  return (
    <div className="form-field">
      <header>
        <label htmlFor={name}>{label}</label>
        <div className="help">
          <HelpIcon />
        </div>
      </header>

      <input
        list={listId}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}

      <datalist id={listId}>
        {options.map((item) => (
          <option key={item} value={item}></option>
        ))}
      </datalist>
    </div>
  );
};

export default SelectField;
