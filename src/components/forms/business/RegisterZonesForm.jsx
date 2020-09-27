import React, { useState } from "react";
import Joi from "joi";

import HubService from "../../../services/hubService";
import useFormFields from "../../../hooks/useFormFields";
import Form from "../Form";
import fields from "../../../config/registerZonesFields.json";
import Button from "../../elements/Button";
import "../forms.scss";
import { useHistory } from "react-router-dom";

const RegisterZonesForm = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useFormFields(fields, setLoading, setData);
  const history = useHistory();

  /* ------------------------------- Form Submit (Add zones to Hub) ------------------------------ */
  const handleSubmit = async () => {
    try {
      await HubService.addZones(data.zoneType, parseInt(data.zoneCount));
      history.push("/hub/zones");
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
