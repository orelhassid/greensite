import React, { useState } from "react";
import Joi from "joi";
import Form from "../Form";
import Button from "../../elements/Button";
// import fields from "../../../config/checkInFields.json";
import fields from "../../../config/checkOutFields.js";
import "../forms.scss";
import visitorService from "../../../services/visitorService";
import { useHistory } from "react-router-dom";
// import { toast } from "react-toastify";
import { ReactComponent as CheckOutIcon } from "../../../assets/icons/checkout.svg";

const CheckOutForm = () => {
  const [data, setData] = useState({});

  const history = useHistory();

  const handleSubmit = () => {
    // Checkin

    try {
      const visitor = visitorService.getVisitor();
      console.log("Visitor", visitor);
      // const result = visitorService.checkin(data);
      history.push("/visitor/checkout/zone");
    } catch (error) {
      return console.error("");
    }
    console.log("Submitted");
  };

  const schema = Joi.object({});

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
        onSubmit={() => handleSubmit()}
        schema={schema}
        formId="checkout"
      ></Form>
    </>
  );
};

export default CheckOutForm;
