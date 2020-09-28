import React, { useState } from "react";
import Joi from "joi";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

// Form
import useFormFields from "../../../hooks/useFormFields";
import HubService from "../../../services/hubService";
import fields from "../../../config/registerHubFormFields.js";
import Form from "../Form";
import Button from "../../elements/Button";
// Style
import "../forms.scss";

/* -------------------------------- Component ------------------------------- */
const RegisterHubForm = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useFormFields(fields, setLoading, setData);

  const history = useHistory();

  /* ------------------------------- Form Submit (Create New Hub) ------------------------------ */
  const onSubmit = async () => {
    try {
      // Create new Hub in DB
      const result = await HubService.register(data);
      toast.success(`Register Success! welcome ${result.contact_name}`);

      // is Multi-zone on?
      if (data.multiZone) history.push("/hub/register/zones");
      if (!data.multiZone) history.push("/hub/zones");
    } catch (error) {
      return toast.error("Registration Failed");
    }
  };

  const onError = () => {
    toast.error("Registration Failed");
  };

  /* ------------------------------- Validation ------------------------------- */

  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    address: Joi.string().required(),
    contactName: Joi.string().required(),
    contactPhone: Joi.string().required(),
    hubtype: Joi.string().required(),
    multiZone: Joi.any().optional(),
  });

  /* -------------------------------- Render ------------------------------- */
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

export default RegisterHubForm;
