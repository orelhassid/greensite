import React, { useState } from "react";
import Joi from "joi";
import Form from "../Form";
import Button from "../../elements/Button";
import fields from "../../../config/loginVisitorFields.json";
// import Visitor from "../../../services/visitorService";
import "../forms.scss";

const LoginVisitorForm = () => {
  const [data, setData] = useState({
    visitorId: "",
    visitorPassword: "",
  });

  const handleSubmit = () => {
    // Call the server
    try {
    } catch (error) {
      return console.error("Registration Failed", error);
    }
    console.log("Submitted");
  };

  const schema = Joi.object({
    visitorId: Joi.string().required().label("Your ID"),
    visitorPassword: Joi.number()
      .min(3)
      .max(3)
      .integer()
      .required()
      .label("Password"),
  });

  return (
    <Form
      fields={fields}
      data={data}
      setData={setData}
      onSubmit={() => handleSubmit()}
      schema={schema}
    >
      <Button label="login" type="submit" />
    </Form>
  );
};

export default LoginVisitorForm;
