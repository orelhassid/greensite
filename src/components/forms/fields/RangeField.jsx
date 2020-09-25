import React from "react";
import { ReactComponent as HelpIcon } from "../../../assets/icons/help.svg";

const RangeField = ({
  name,
  label,
  min,
  max,
  placeholder,
  value,
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
      <p style={{ padding: "0 10px", opacity: "0.8" }}>{placeholder}</p>

      <input
        type="range"
        id={name}
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <div className="timer">
        <h2>{value}</h2>
        <span>Minutes{value > 60 && <p>(more than an hour)</p>}</span>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default RangeField;
