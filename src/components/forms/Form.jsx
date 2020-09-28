import React, { useState } from "react";
import { Fields } from "./fields";

export default function Form({
  fields,
  data,
  setData,
  onSubmit,
  onError,
  schema,
  children,
}) {
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const { error } = schema.validate(data, { abortEarly: false });
    if (!error) return null;

    const errorsMessages = {};
    for (let item of error.details) errorsMessages[item.path[0]] = item.message;
    return errorsMessages;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorsMessages = handleValidation();
    // Error object cannot be undefined.
    setErrors(errorsMessages || {});

    if (errorsMessages) return onError();
    onSubmit();
  };

  const handleChange = ({ currentTarget: input }) => {
    const newData = { ...data };
    newData[input.name] = input.value;
    if (input.type === "checkbox") {
      newData[input.name] = input.checked;
    }
    setData(newData);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} autoComplete="on">
      <Fields
        fields={fields}
        errors={errors}
        onChange={handleChange}
        data={data}
      />
      {children}
    </form>
  );
}
