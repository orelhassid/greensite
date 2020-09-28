import React from "react";

export default function CheckField({ field, value, onChange, error }) {
  const { label, id, help, ...rest } = field;
  return (
    <div className="form-field form-field-checkbox">
      <div className="input">
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
        <small>{help}</small>
      </div>

      <div className="info">
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}
