import React, { useState } from "react";
import Joi from "joi";
import Form from "../Form";
import Button from "../../elements/Button";
import fields from "../../../config/loginHubFields.json";
// import Hub from "../../../services/hubService";
import "../forms.scss";

const LoginHubForm = () => {
  const [data, setData] = useState({
    hubId: "",
    password: "",
  });

  const handleSubmit = () => {
    // Call the server
    try {
      //   Hub.addZones(data);
    } catch (error) {
      //   return console.error("Registration Failed", error);
    }
    console.log("Submitted");
  };

  const schema = Joi.object({
    hubId: Joi.number().required(),
    password: Joi.string().min(3).max(30),
  });

  return (
    <Form
      fields={fields}
      data={data}
      setData={setData}
      onSubmit={() => handleSubmit()}
      schema={schema}
    >
      <Button label="Login" type="submit" />
    </Form>
  );
};

export default LoginHubForm;
