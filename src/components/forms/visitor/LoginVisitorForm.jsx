import React, { useState } from "react";
import Joi from "joi";
import Form from "../Form";
import Button from "../../elements/Button";
import fields from "../../../config/loginVisitorFields.json";
// import Visitor from "../../../services/visitorService";
import "../forms.scss";
import visitorService from "../../../services/visitorService";
import { useHistory } from "react-router-dom";

const LoginVisitorForm = () => {
  const [data, setData] = useState({
    visitorId: "",
    password: "",
  });

  const history = useHistory();

  const handleSubmit = () => {
    try {
      visitorService.login(data);
      console.log("Login");
      history.push("/visitor/login/success");
    } catch (error) {
      return console.error("Registration Failed", error);
    }
    console.log("Submitted");
  };

  const schema = Joi.object({
    visitorId: Joi.string().required().label("Your ID"),
    password: Joi.string().required().label("Password"),
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
