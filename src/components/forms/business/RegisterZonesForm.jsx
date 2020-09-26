import React, { useState } from "react";
import Joi from "joi";

import HubService from "../../../services/hubService";
import useFormFields from "../../../hooks/useFormFields";
import Form from "../Form";
import fields from "../../../config/registerZonesFields.json";
import Button from "../../elements/Button";
import "../forms.scss";

const RegisterZonesForm = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useFormFields(fields, setLoading, setData);

  /* ------------------------------- Form Submit (Add zones to Hub) ------------------------------ */
  const handleSubmit = async () => {
    try {
      const result = await HubService.addZones(data.zoneType, data.zoneCount);
      console.log("Result hub:", result);
    } catch (error) {
      return console.error("Registration Failed", error);
    }
  };

  const schema = Joi.object({
    zoneType: Joi.string().alphanum().optional(),
    zoneCount: Joi.number().required(),
  });

  return (
    <Form
      fields={fields}
      data={data}
      setData={setData}
      onSubmit={() => handleSubmit()}
      schema={schema}
      loading={loading}
    >
      <Button label="Add Zones" type="submit" />
    </Form>
  );
};

export default RegisterZonesForm;
