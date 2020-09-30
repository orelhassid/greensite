import React, { useState } from "react";
import Joi from "joi";
import { toast } from "react-toastify";
// Form
import visitorService from "../../../services/visitorService";
import fields from "../../../config/loginVisitorFields.js";
import Form from "../Form";
import Button from "../../elements/Button";
// Hooks
import { useHistory } from "react-router-dom";
import useVisitorKey from "../../../hooks/useVisitorKey";
import useFormFields from "../../../hooks/useFormFields";
// Style
import "../forms.scss";

/* -------------------------------- Component ------------------------------- */
const LoginVisitorForm = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useFormFields(fields, setLoading, setData);
  useVisitorKey();
  const history = useHistory();

  /* ------------------------------- Form Submit ------------------------------ */
  const handleSubmit = async () => {
    const result = await visitorService.login(data);
    result
      ? history.push("/visitor/login/success")
      : toast.error("Login Failed");
  };
  /* ------------------------------- Validation ------------------------------- */
  const schema = Joi.object({
    visitorId: Joi.string().required().label("Your ID"),
    password: Joi.string().required().label("Password"),
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
      <Button label="login" type="submit" />
    </Form>
  );
};

export default LoginVisitorForm;
