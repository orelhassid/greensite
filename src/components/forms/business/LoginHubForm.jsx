import React, { useState } from "react";
import Joi from "joi";
// Form
import useFormFields from "../../../hooks/useFormFields";
// import HubService from "../../../services/hubService";
import fields from "../../../config/loginHubFields.json";
import Form from "../Form";
import Button from "../../elements/Button";
// Style
import "../forms.scss";

/* -------------------------------- Component ------------------------------- */
const LoginHubForm = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useFormFields(fields, setLoading, setData);

  /* ------------------------------- Form Submit ------------------------------ */

  const handleSubmit = () => {
    // Call the server
    try {
      //   Hub.addZones(data);
    } catch (error) {
      //   return console.error("Registration Failed", error);
    }
    console.log("Submitted");
  };
  /* ------------------------------- Validation ------------------------------- */

  const schema = Joi.object({
    hubId: Joi.number().required(),
    password: Joi.string().min(3).max(30),
  });
  /* -------------------------------- Render ------------------------------- */

  return (
    <Form
      fields={fields}
      data={data}
      setData={setData}
      loading={loading}
      schema={schema}
      onSubmit={() => handleSubmit()}
    >
      <Button label="Login" type="submit" />
    </Form>
  );
};

export default LoginHubForm;
