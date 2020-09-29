import React from "react";

export default function CheckField({ field, value, onChange, error }) {
  const { label, id, help, ...rest } = field;
  return (
    <div className="form-field form-field-checkbox">
      <div className="input" style={{ marginRight: "10px" }}>
        <input
          id={id}
          defaultValue={value}
          onChange={onChange}
          onClick={onChange}
          {...rest}
        />
      </div>

      <div className="text">
        <label htmlFor={id}>{label}</label>
        <br />
        <small style={{ fontSize: "0.8rem" }}>{help}</small>
      </div>

      <div className="info">
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}
