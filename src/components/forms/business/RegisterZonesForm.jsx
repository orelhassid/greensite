import React, { useState } from "react";
import Joi from "joi";

import HubService from "../../../services/hubService";
import useFormFields from "../../../hooks/useFormFields";
import Form from "../Form";
import fields from "../../../config/registerZonesFields.js";
import Button from "../../elements/Button";
import "../forms.scss";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterZonesForm = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useFormFields(fields, setLoading, setData);
  const history = useHistory();

  /* ------------------------------- Form Submit (Add zones to Hub) ------------------------------ */
  const onSubmit = async () => {
    try {
      await HubService.addZones(data.zoneType, parseInt(data.zoneCount));
      history.push("/hub/zones");
    } catch (error) {
      return console.error("Registration Failed", error);
    }
  };
  const onError = () => {
    toast.error("Register Zones Failed");
  };

  const schema = Joi.object({
    zoneType: Joi.string().alphanum().optional(),
    zoneCount: Joi.number().required(),
  });

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
          <Button label="Add Zones" />
        </Form>
      )}
    </>
  );
};

export default RegisterZonesForm;
