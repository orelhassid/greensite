import React from "react";

export default function RangeField({ field, value, onChange }) {
  const { label, help, ...rest } = field;
  return (
    <div className="form-field">
      <label htmlFor="name">{label}</label>
      <input onChange={onChange} defaultValue={value} {...rest} />
      <div className="timer">
        <h2>{parseInt(value) === 0 ? 30 : value}</h2>
        <span>{parseInt(value) === 0 ? <p>Minutes</p> : <p>Hours</p>}</span>
      </div>
      <small>{help}</small>
    </div>
  );
}
