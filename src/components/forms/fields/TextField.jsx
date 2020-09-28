import React from "react";

export default function TextField({ field, value, onChange, error }) {
  const { label, id, help, ...rest } = field;
  return (
    <div className="form-field">
      <header>
        <label htmlFor={id}>{label}</label>
      </header>
      <input id={id} onChange={onChange} value={value} {...rest} />
      <footer>
        <small>{help}</small>
        <div className="info">
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </footer>
    </div>
  );
}

TextField.defaultValue = {
  label: "Label",
};
