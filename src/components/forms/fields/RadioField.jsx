import React from "react";

export default function RadioField({ field, value, onChange, error }) {
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
      <div className="label">
        <header>
          <label htmlFor={id}>{label}</label>
        </header>
      </div>
      <footer>
        <small>{help}</small>
        <div className="info">
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </footer>
    </div>
  );
}
