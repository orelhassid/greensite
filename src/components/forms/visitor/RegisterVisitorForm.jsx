import React, { useState } from "react";
import Joi from "joi";
import { useHistory } from "react-router-dom";
// Form
import VisitorService from "../../../services/visitorService";
import useFormFields from "../../../hooks/useFormFields";
import Form from "../Form";
import Button from "../../elements/Button";
import fields from "../../../config/registerVisitorFields.json";
// Style
import "../forms.scss";

/* -------------------------------- Component ------------------------------- */
const RegisterVisitorForm = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useFormFields(fields, setLoading, setData);

  const history = useHistory();

  /* ------------------------------- Form Submit (Create New User/Visitor) ------------------------------ */
  const handleSubmit = async () => {
    // Call the server
    try {
      await VisitorService.register(data);
      if (data.option === "myself") history.push("/visitor/register/success");
    } catch (error) {
      return console.error("Registration Failed", error);
    }
  };

  /* ------------------------------- Validation ------------------------------- */
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

  /* --------------------------------- Render --------------------------------- */
  return (
    <Form
      fields={fields}
      data={data}
      setData={setData}
      loading={loading}
      schema={schema}
      onSubmit={() => handleSubmit()}
    >
      <Button label="register" type="submit" />
    </Form>
  );
};

export default RegisterVisitorForm;
