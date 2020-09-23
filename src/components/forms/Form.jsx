import React, { useState } from "react";
import { toast } from "react-toastify";
import Fields from "./Fields";

const Form = ({ fields, onSubmit, data, setData, schema, children }) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsMessages = validate();
    console.log("Error OBJECT", errorsMessages);
    setErrors(errorsMessages);
    if (errorsMessages) return toast.error("Validation Failed");
    onSubmit();
  };

  const handleChange = ({ currentTarget: input }) => {
    const newData = { ...data };
    newData[input.name] = input.value;

    setData(newData);
  };

  const validate = () => {
    const { error } = schema.validate(data, { abortEarly: false });

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
      <Fields
        fields={fields}
        data={data}
        onChange={(e) => handleChange(e)}
        errors={errors}
      />
      {children}
    </form>
  );
};

export default Form;
