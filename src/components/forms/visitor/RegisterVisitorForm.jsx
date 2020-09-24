import React, { useState } from "react";
import Joi from "joi";
import Form from "../Form";
import Button from "../../elements/Button";
import fields from "../../../config/registerVisitorFields.json";
import Visitor from "../../../services/visitorService";
import "../forms.scss";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const RegisterVisitorForm = () => {
  const [data, setData] = useState({
    phone: "",
    id: "",
    name: "",
    option: "myself",
  });
  const history = useHistory();

  const handleSubmit = () => {
    // Call the server
    try {
      Visitor.register(data);
      toast.success(
        `Registration Success! ${data.name && `Welcome ${data.name}`}`
      );
      history.push("/visitor/register/success");
    } catch (error) {
      return console.error("Registration Failed", error);
    }
  };

  const schema = Joi.object({
    phone: Joi.string().required().label("Phone Number"),
    id: Joi.string()
      .length(3)
      .pattern(/^[0-9]+$/)
      .required()
      .label("ID"),
    name: Joi.any().optional(),
    option: Joi.any().required(),
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
