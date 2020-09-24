import React, { useState } from "react";
import Joi from "joi";
import Form from "../Form";
import Button from "../../elements/Button";
import fields from "../../../config/checkInFields.json";
// import Visitor from "../../../services/visitorService";
import "../forms.scss";
import visitorService from "../../../services/visitorService";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactComponent as CheckInIcon } from "../../../assets/icons/checkin.svg";

const CheckInForm = () => {
  const [data, setData] = useState({
    visitorId: "",
    password: "",
  });

  const history = useHistory();

  const handleSubmit = () => {
    const result = visitorService.login(data);
    if (result) {
      history.push("/visitor/login/success");
    } else {
      toast.error("Password is incorrect");
    }
    console.log("Submitted");
  };

  const schema = Joi.object({
    time: Joi.string().required().label("Time"),
  });

  return (
    <Form
      fields={fields}
      data={data}
      setData={setData}
      onSubmit={() => handleSubmit()}
      schema={schema}
    >
      <Button label="checkin" type="submit" icon={<CheckInIcon />} />
    </Form>
  );
};

export default CheckInForm;
