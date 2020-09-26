import React from "react";
import { ReactComponent as HelpIcon } from "../../../assets/icons/help.svg";

const TextField = ({ name, label, value, error, ...rest }) => {
  return (
    <div className="form-field">
      <header>
        <label htmlFor={name}>{label}</label>
        <div className="help">
          <HelpIcon />
        </div>
      </header>

      <input id={name} name={name} value={value} {...rest} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextField;
