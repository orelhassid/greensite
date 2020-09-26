import React, { useState } from "react";
import Joi from "joi";
// Form
import ServiceName from "../../../services/ServiceName";
import fields from "../../../config/fields.js";
import Form from "../Form";
import Button from "../../elements/Button";
// Hooks
import { useHistory } from "react-router-dom";
import useFormFields from "../../../hooks/useFormFields";
// Style
import "../forms.scss";

/* -------------------------------- Component ------------------------------- */
const FormName = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useFormFields(fields, setLoading, setData);

  const history = useHistory();

  /* ------------------------------- Form Submit ------------------------------ */
  const handleSubmit = () => {
    console.log("Data", data);
    try {
      history.push("/path/");
    } catch (error) {}
  };

  /* ------------------------------- Validation ------------------------------- */

  const schema = Joi.object({});

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
      <Button label="BUTTON" type="submit" />
    </Form>
  );
};

export default FormName;
