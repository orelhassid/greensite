import React, { useState } from "react";
import Joi from "joi";
import { useHistory } from "react-router-dom";

// Form
// import ServiceName from "../../../services/ServiceName";
import useFormFields from "../../../hooks/useFormFields";
import fields from "../../../config/checkOutZoneFields.js";
import Form from "../Form";
import Button from "../../elements/Button";
import CardSimple from "../../cards/CardSimple";
// Style
import "../forms.scss";

/* -------------------------------- Component ------------------------------- */
const CheckOutZoneForm = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useFormFields(fields, setLoading, setData);

  const history = useHistory();

  /* ------------------------------- Form Submit ------------------------------ */
  const handleSubmit = () => {
    console.log(data);
    history.push({
      pathname: "/visitor/checkout",
      search: `?zoneId=${data.zoneId}`,
    });
  };

  /* ------------------------------- Validation ------------------------------- */
  const schema = Joi.object({
    zoneId: Joi.string().optional().label("Zone ID"),
  });

  /* -------------------------------- Render ------------------------------- */
  return (
    <CardSimple
      title="Add specific Zone"
      optional="(optional)"
      subtitle="Registering for a sub-zone greatly improves our accuracy and reduces your risk of getting alerted"
    >
      <Form
        fields={fields}
        data={data}
        setData={setData}
        loading={loading}
        schema={schema}
        onSubmit={() => handleSubmit()}
      >
        <Button label="register zone" style="outlined" type="submit" />
      </Form>
    </CardSimple>
  );
};

export default CheckOutZoneForm;
