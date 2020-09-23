import React, { useState } from "react";
import Joi from "joi";
import Form from "./Form";
import Button from "../elements/Button";
import fields from "../../config/registerHubFormFields.json";
import "./forms.scss";

const RegisterHubForm = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    contactName: "",
    contactPhone: "",
    hubtype: "",
  });

  const handleSubmit = () => {
    // Axios post
    // Call the server
    console.log("Submitted");
  };

  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    address: Joi.string().required(),
    contactName: Joi.string().required(),
    contactPhone: Joi.string().required(),
    hubtype: Joi.string().required(),
  });

  return (
    <Form
      fields={fields}
      data={data}
      setData={setData}
      onSubmit={() => handleSubmit()}
      schema={schema}
    >
      <Button label="Register" type="submit" />
    </Form>

    // <form onSubmit={() => handleSubmit} autoComplete="off">
    //   <Fields fields={fields} data={data} onChange={(e) => handleChange(e)} />
    // </form>
  );
};

export default RegisterHubForm;
