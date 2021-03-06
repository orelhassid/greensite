import React, { useContext, useState } from "react";
import Joi from "joi";
import { useHistory, useParams } from "react-router-dom";
// Form
import useFormFields from "../../../hooks/useFormFields";
import fields from "../../../config/checkInFields.js";
import Form from "../Form";
import Button from "../../elements/Button";
import TermsCard from "../../cards/TermsCard";
// Style
import { ReactComponent as CheckInIcon } from "../../../assets/icons/checkin.svg";
import "../forms.scss";
import { toast } from "react-toastify";
import { VisitorContext } from "../../../contexts/VisitorContext";

/* -------------------------------- Component ------------------------------- */
const CheckInForm = () => {
  const [data, setData] = useState({});
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  useFormFields(fields, setLoading, setData);
  const history = useHistory();
  const params = useParams();
  const { location, checkin } = useContext(VisitorContext);

  /* ------------------------------- Form Submit ------------------------------ */
  const onSubmit = async () => {
    // if (data.option === "else") return history.push("/visitor/register/else");
    // console.log("Checkin Success");

    try {
      await checkin(data, location);
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

  fields[1].label = (
    <p>
      I comply with the{" "}
      <strong style={{ cursor: "pointer" }} onClick={() => setPopup(!popup)}>
        Health Declaration
      </strong>
    </p>
  );
  return (
    <Form
      fields={fields}
      setData={setData}
      data={data}
      onSubmit={onSubmit}
      onError={onError}
      schema={schema}
    >
      {popup && <TermsCard onClick={() => setPopup(!popup)} />}
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
