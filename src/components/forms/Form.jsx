import React from "react";
import Input from "./Input";
import "./forms.scss";
/**
 *
 * @param {array} fields
 */
const Form = ({ fields, children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {fields.map((input) => (
        <Input key={input.name} field={input} />
      ))}
      {children}
    </form>
  );
};

export default Form;
