import React from "react";
import Fields from "../../config/registerHubFormFields.json";
import Button from "../elements/Button";
import Form from "./Form";

const RegisterHubForm = () => {
  return (
    <Form fields={Fields}>
      <Button label="Register" />
    </Form>
  );
};

export default RegisterHubForm;
