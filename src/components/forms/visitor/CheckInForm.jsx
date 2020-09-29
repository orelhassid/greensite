import React, { useState } from "react";
import Joi from "joi";
import { useHistory, useParams } from "react-router-dom";
// Form

import visitorService from "../../../services/visitorService";
import useFormFields from "../../../hooks/useFormFields";
import fields from "../../../config/checkInFields.js";
import Form from "../Form";
import Button from "../../elements/Button";
import TermsCard from "../../cards/TermsCard";
// Style
import { ReactComponent as CheckInIcon } from "../../../assets/icons/checkin.svg";
import "../forms.scss";
import { toast } from "react-toastify";

/* -------------------------------- Component ------------------------------- */
const CheckInForm = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useFormFields(fields, setLoading, setData);
  const history = useHistory();
  const params = useParams();

  /* ------------------------------- Form Submit ------------------------------ */
  const onSubmit = async () => {
    if (data.option === "else") return history.push("/visitor/register/else");
    try {
      const result = await visitorService.checkin(data, params);
      history.push(`/visitor/checkout/zone/${params.hid}`);
    } catch (error) {
      return console.error("Check-in Failed");
    }
  };

  const onError = () => {
    toast.error("Registration Failed");
  };
  /* ------------------------------- Validation ------------------------------- */

  const schema = Joi.object({
    duration: Joi.number().required().label("Time"),
    health: Joi.valid(true)
      .required()
      .messages({ message: "Number must be between 1 and 10" }),
  });

  /* -------------------------------- Render ------------------------------- */
  return (
    <Form
      fields={fields}
      setData={setData}
      data={data}
      onSubmit={onSubmit}
      onError={onError}
      schema={schema}
    >
      {false && <TermsCard />}
      <Button
        label="check-in"
        type="submit"
        icon={<CheckInIcon />}
        disabled={!data.health}
      />
    </Form>
  );
};

export default CheckInForm;
