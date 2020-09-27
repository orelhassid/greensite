import React, { useState } from "react";
import Joi from "joi";
import { useHistory, useParams } from "react-router-dom";
// Form
import useFormFields from "../../../hooks/useFormFields";
import fields from "../../../config/checkOutFields.js";
import Form from "../Form";
import Button from "../../elements/Button";
import visitorService from "../../../services/visitorService";
// Style
import { ReactComponent as CheckOutIcon } from "../../../assets/icons/checkout.svg";
import "../forms.scss";
import { toast } from "react-toastify";

/* -------------------------------- Component ------------------------------- */

const CheckOutForm = ({ hub }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useFormFields(fields, setLoading, setData);
  const history = useHistory();
  const params = useParams();

  /* ------------------------------- Form Submit ------------------------------ */
  const handleSubmit = () => {
    // Check out
    async function fetch() {
      try {
        await visitorService.checkout(params);
        toast.success("Check out Success");
        history.push("/visitor/checkout/success");
      } catch (error) {
        return console.error("");
      }
    }
    fetch();
  };

  /* ------------------------------- Validation ------------------------------- */
  const schema = Joi.object({
    location: Joi.string().required(),
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
