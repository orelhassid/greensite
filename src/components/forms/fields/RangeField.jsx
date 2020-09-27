import React from "react";
import { ReactComponent as HelpIcon } from "../../../assets/icons/help.svg";

const RangeField = ({ name, label, placeholder, value, error, ...rest }) => {
  return (
    <div className="form-field">
      <header>
        <label htmlFor={name}>{label}</label>
        <div className="help">
          <HelpIcon />
        </div>
      </header>
      <p style={{ padding: "0 10px", opacity: "0.8" }}>{placeholder}</p>

      <input id={name} name={name} type="range" value={value} {...rest} />
      <div className="timer">
        <h2>{parseInt(value) === 0 ? 30 : value}</h2>
        <span>{parseInt(value) === 0 ? <p>Minutes</p> : <p>Hours</p>}</span>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default RangeField;