import React, { useContext, useState } from "react";
import Joi from "joi";
import { useHistory } from "react-router-dom";
// Form
import VisitorService from "../../../services/visitorService";
import useFormFields from "../../../hooks/useFormFields";
import Form from "../Form";
import Button from "../../elements/Button";
import fields from "../../../config/registerVisitorFields.js";
// Style
import "../forms.scss";
import { toast } from "react-toastify";
import { VisitorContext } from "../../../contexts/VisitorContext";

/* -------------------------------- Component ------------------------------- */
const RegisterVisitorForm = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useFormFields(fields, setLoading, setData);

  const { register } = useContext(VisitorContext);

  const history = useHistory();

  /* ------------------------------- Form Submit (Create New User/Visitor) ------------------------------ */
  const onSubmit = async () => {
    // Call the server
    try {
      // await VisitorService.register(data);
      register(data);
      if (data.option === "myself") history.push("/visitor/register/success");
    } catch (error) {
      return console.error("Registration Failed", error);
    }
  };
  const onError = () => {
    toast.error("Registration Failed");
  };

  /* ------------------------------- Validation ------------------------------- */
  const schema = Joi.object({
    phone: Joi.string().required(),
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
    <>
      {loading && (
        <Form
          fields={fields}
          setData={setData}
          data={data}
          onSubmit={onSubmit}
          onError={onError}
          schema={schema}
        >
          <Button label="Register" />
        </Form>
      )}
    </>
  );
};
export default RegisterVisitorForm;
