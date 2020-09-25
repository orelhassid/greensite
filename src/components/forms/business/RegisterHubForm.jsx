import React, { useState } from "react";
import Joi from "joi";
import Form from "../Form";
import Button from "../../elements/Button";
import fields from "../../../config/registerHubFormFields.json";
import "../forms.scss";
// import httpService from "../../services/httpService";
import Hub from "../../../services/hubService";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const RegisterHubForm = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    contactName: "",
    contactPhone: "",
    hubtype: "",
    multiZone: "",
  });
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      const result = await Hub.register(data);
      console.log("Hub", result);
      toast.success(`Register Success! welcome ${result.contact_name}`);
    } catch (error) {
      return toast.error("Registration Failed");
    }
    history.push("/hub/zones");
    console.log("Submitted");
  };

  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    address: Joi.string().required(),
    contactName: Joi.string().required(),
    contactPhone: Joi.string().required(),
    hubtype: Joi.string().required(),
    multiZone: Joi.boolean().invalid(false),
  });

  return (
    <Form
      fields={fields}
      data={data}
      setData={setData}
      onSubmit={() => handleSubmit()}
      schema={schema}
    >
      <Button label="Register" type="submit" />
    </Form>
  );
};

export default RegisterHubForm;
