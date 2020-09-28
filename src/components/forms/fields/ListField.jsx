import React from "react";

export default function ListField({ field, value, onChange, error }) {
  const { label, id, help, options, ...rest } = field;
  const listId = id + "_list";

  return (
    <div className="form-field">
      <header>
        <label htmlFor={id}>{label}</label>
      </header>
      <input
        id={id}
        list={listId}
        onChange={onChange}
        value={value}
        {...rest}
      />
      <footer>
        <small>{help}</small>
        <div className="info">
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </footer>
      <datalist id={listId}>
        {options.map((item) => (
          <option key={item} value={item}></option>
        ))}
      </datalist>
    </div>
  );
}
