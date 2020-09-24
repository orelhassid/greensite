import React, { useState } from "react";
import Joi from "joi";
import Form from "../Form";
import Button from "../../elements/Button";
import fields from "../../../config/registerVisitorFields.json";
// import Visitor from "../../../services/visitorService";
import "../forms.scss";

const RegisterVisitorForm = () => {
  const [data, setData] = useState({
    visitorPhone: "",
    visitorId: "",
    visitorName: "",
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
    visitorPhone: Joi.string().required().label("Phone Number"),
    visitorId: Joi.number().min(3).max(3).integer().required().label("ID"),
    visitorName: Joi.any().optional(),
  });

  return (
    <Form
      fields={fields}
      data={data}
      setData={setData}
      onSubmit={() => handleSubmit()}
      schema={schema}
    >
      <Button label="register" type="submit" />
    </Form>
  );
};

export default RegisterVisitorForm;
