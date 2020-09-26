import React, { useState } from "react";
import Joi from "joi";
import { useHistory } from "react-router-dom";
// Form
import useFormFields from "../../../hooks/useFormFields";
import fields from "../../../config/checkOutFields.js";
import Form from "../Form";
import Button from "../../elements/Button";
// Style
import { ReactComponent as CheckOutIcon } from "../../../assets/icons/checkout.svg";
import "../forms.scss";

/* -------------------------------- Component ------------------------------- */

const CheckOutForm = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useFormFields(fields, setLoading, setData);
  const history = useHistory();

  /* ------------------------------- Form Submit ------------------------------ */
  const handleSubmit = () => {
    // Checkin

    try {
      // const visitor = visitorService.getVisitor();
      // const result = visitorService.checkin(data);
      history.push("/visitor/checkout/zone");
    } catch (error) {
      return console.error("");
    }
  };

  /* ------------------------------- Validation ------------------------------- */
  const schema = Joi.object({
    location: Joi.valid(true).required(),
  });

  /* -------------------------------- Render ------------------------------- */
  return (
    <>
      <Button
        label="check-out"
        type="submit"
        icon={<CheckOutIcon />}
        formId="checkout"
      />
      <Form
        fields={fields}
        data={data}
        setData={setData}
        loading={loading}
        schema={schema}
        onSubmit={() => handleSubmit()}
        formId="checkout"
      ></Form>
    </>
  );
};

export default CheckOutForm;
