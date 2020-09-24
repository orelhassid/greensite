import React, { useState } from "react";
import Joi from "joi";
import Form from "../Form";
import Button from "../../elements/Button";
import fields from "../../../config/registerZonesFields.json";
import "../forms.scss";

const RegisterZonesForm = () => {
  const [data, setData] = useState({
    zoneType: "",
    zoneCount: "",
  });

  const handleSubmit = () => {
    // Axios post
    // Call the server
    console.log("Submitted");
  };

  const schema = Joi.object({
    zoneType: Joi.string().alphanum().min(3).max(30).required(),
    zoneCount: Joi.number().max(500).required(),
  });

  return (
    <Form
      fields={fields}
      data={data}
      setData={setData}
      onSubmit={() => handleSubmit()}
      schema={schema}
    >
      <Button label="Add Zones" type="submit" />
    </Form>
  );
};

export default RegisterZonesForm;
