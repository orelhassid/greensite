import React, { useState, useEffect } from "react";
import Joi from "joi";
import { useHistory, useParams } from "react-router-dom";
// Form
import useFormFields from "../../../hooks/useFormFields";
import fields from "../../../config/checkOutFields.js";
import Form from "../Form";
import Button from "../../elements/Button";
import visitorService from "../../../services/visitorService";
// Style
// import { ReactComponent as CheckOutIcon } from "../../../assets/icons/checkout.svg";
import "../forms.scss";
import { toast } from "react-toastify";

/* -------------------------------- Component ------------------------------- */

const CheckOutForm = ({ hub }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useFormFields(fields, setLoading, setData);
  const history = useHistory();
  const params = useParams();

  fields[0].label = (
    <span>
      Check out from <b>{hub.name}</b>
    </span>
  );
  useEffect(() => {
    fields[1].label = (
      <span>
        Check out only from <b>{hub.name}</b>
      </span>
    );
  }, []);
  /* ------------------------------- Form Submit ------------------------------ */
  const onSubmit = async () => {
    // Check out
    async function fetch() {
      try {
        await visitorService.checkout(params);
        toast.success("Check out Success");
        history.push(`/visitor/checkout/success/${params.hid}`);
      } catch (error) {
        return console.error("");
      }
    }
    fetch();
  };

  const onError = () => {
    toast.error("Checkout Failed");
  };

  /* ------------------------------- Validation ------------------------------- */
  const schema = Joi.object({
    location: Joi.string().required(),
  });

  /* -------------------------------- Render ------------------------------- */
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
          <Button label="Check-out" />
        </Form>
      )}
    </>
  );
};

export default CheckOutForm;
