import React, { useEffect, useState } from "react";
import Joi from "joi";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router-dom";
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
  const [healthToggle, setHealthToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  useFormFields(fields, setLoading, setData);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const search = queryString.parse(location.search);
    search.popup === "health" ? setHealthToggle(true) : setHealthToggle(false);
  }, [location]);
  /* ------------------------------- Form Submit ------------------------------ */
  const handleSubmit = () => {
    // Checkin

    try {
      const result = visitorService.checkin(data);
      console.log("Result", result);
      // history.push("/visitor/checkout/zone");
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
      {healthToggle && <TermsCard />}
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
