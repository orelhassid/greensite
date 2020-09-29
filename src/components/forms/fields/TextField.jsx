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

/*

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
*/
