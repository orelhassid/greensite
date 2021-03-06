import React, { useContext, useState } from "react";
import Joi from "joi";
import { useHistory, useParams } from "react-router-dom";

// Form
// import ServiceName from "../../../services/ServiceName";
import useFormFields from "../../../hooks/useFormFields";
import fields from "../../../config/checkOutZoneFields.js";
import Form from "../Form";
import Button from "../../elements/Button";
import CardSimple from "../../cards/CardSimple";
// Style
import "../forms.scss";
import { toast } from "react-toastify";
import { VisitorContext } from "../../../contexts/VisitorContext";
import visitorService from "../../../services/visitorService";

/* -------------------------------- Component ------------------------------- */
const CheckOutZoneForm = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useFormFields(fields, setLoading, setData);

  const history = useHistory();
  const params = useParams();
  const { registerZone } = useContext(VisitorContext);

  /* ------------------------------- Form Submit ------------------------------ */
  const onSubmit = async () => {
    try {
      await registerZone(params.hid, data.zoneId);
      history.push(`/visitor/checkout/${params.hid}/${data.zoneId}`);
    } catch (error) {}
  };
  const onError = () => {
    toast.error("Registration Failed");
  };

  /* ------------------------------- Validation ------------------------------- */
  const schema = Joi.object({
    zoneId: Joi.string().optional(),
  });

  /* -------------------------------- Render ------------------------------- */
  return (
    <CardSimple
      title="Add specific Zone"
      optional="(optional)"
      subtitle="Registering for a sub-zone greatly improves our accuracy and reduces your risk of getting alerted"
    >
      {loading && (
        <Form
          fields={fields}
          setData={setData}
          data={data}
          onSubmit={onSubmit}
          onError={onError}
          schema={schema}
        >
          <Button label="Register Zone" style="outlined" />
        </Form>
      )}
    </CardSimple>
  );
};

export default CheckOutZoneForm;
