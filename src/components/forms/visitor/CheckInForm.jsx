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

/* -------------------------------- Component ------------------------------- */
const CheckInForm = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useFormFields(fields, setLoading, setData);
  const history = useHistory();
  const params = useParams();

  /* ------------------------------- Form Submit ------------------------------ */
  const handleSubmit = async () => {
    if (data.option === "else") return history.push("/visitor/register/else");
    try {
      const result = await visitorService.checkin(data, params);
      console.log("Result", result);
      history.push(`/visitor/checkout/${params.hid}`);
    } catch (error) {
      return console.error("Check-in Failed");
    }
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
      data={data}
      setData={setData}
      onSubmit={() => handleSubmit()}
      schema={schema}
      loading={loading}
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
