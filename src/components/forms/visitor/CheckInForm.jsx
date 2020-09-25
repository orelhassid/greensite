import React, { useState } from "react";
import Joi from "joi";
import Form from "../Form";
import Button from "../../elements/Button";
// import fields from "../../../config/checkInFields.json";
import fields from "../../../config/checkInFields.js";
import "../forms.scss";
import visitorService from "../../../services/visitorService";
import { useHistory } from "react-router-dom";
// import { toast } from "react-toastify";
import { ReactComponent as CheckInIcon } from "../../../assets/icons/checkin.svg";

const CheckInForm = () => {
  const [data, setData] = useState({
    time: 0,
    // health: "",
  });

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

  const schema = Joi.object({
    time: Joi.number().required().label("Time"),
    health: Joi.valid(true)
      .required()
      .messages({ message: "Number must be between 1 and 10" }),
  });

  return (
    <Form
      fields={fields}
      data={data}
      setData={setData}
      onSubmit={() => handleSubmit()}
      schema={schema}
    >
      <Button label="check-in" type="submit" icon={<CheckInIcon />} />
    </Form>
  );
};

export default CheckInForm;
