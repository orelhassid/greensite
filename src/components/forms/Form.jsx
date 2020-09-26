import React, { useState } from "react";
import { toast } from "react-toastify";
import { Grid } from "../layout";
import Fields from "./fields";

/**
 *
 * @param {*} param0
 * Responsible for handling fields data and errors
 */
const Form = ({
  fields,
  onSubmit,
  data,
  setData,
  schema,
  formId,
  children,
  loading,
}) => {
  const [errors, setErrors] = useState({});

  if (!loading) {
    return <div>Loading...</div>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsMessages = validate();

    // Error object cannot be undefined.
    setErrors(errorsMessages || {});

    if (errorsMessages) return toast.error("Validation Failed");
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

  const validate = () => {
    const { error } = schema.validate(data, { abortEarly: false });

    if (!error) return null;

    const errorsMessages = {};
    for (let item of error.details) errorsMessages[item.path[0]] = item.message;
    return errorsMessages;
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} autoComplete="on" id={formId}>
      <Fields
        fields={fields}
        data={data}
        onChange={(e) => handleChange(e)}
        errors={errors}
      />
      <Grid row={true}>{children}</Grid>
    </form>
  );
};

export default Form;
