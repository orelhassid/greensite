import React from "react";
import { ReactComponent as HelpIcon } from "../../assets/icons/help.svg";

const Input = ({ field }) => {
  const { name, label } = field;

  return (
    <div className="form-field">
      <header>
        <label htmlFor={name}>{label}</label>
        <div className="help">
          <HelpIcon />
        </div>
      </header>
      {renderInputs(field)}
    </div>
  );
};

const renderInputs = (field) => {
  if (field.options !== undefined) return <InputList field={field} />;
  else {
    return <InputText field={field} />;
  }
};

const InputText = ({ field }) => {
  const { name, type, placeholder } = field;

  return <input type={type} id={name} name={name} placeholder={placeholder} />;
};

const InputList = ({ field }) => {
  const { name, placeholder, options } = field;

  return (
    <>
      <input list={name} id={name} name={name} placeholder={placeholder} />
      <datalist id={name}>
        {options.map((item) => (
          <option key={item} value={item} />
        ))}
      </datalist>
    </>
  );
};

export default Input;
