import React, { useState } from "react";
import Joi from "joi";
import Form from "../Form";
import Button from "../../elements/Button";
import "../forms.scss";
import { useHistory } from "react-router-dom";
import CardSimple from "../../cards/CardSimple";

const CheckOutZoneForm = () => {
  const [data, setData] = useState({
    zoneId: "",
  });

  const history = useHistory();

  const handleSubmit = () => {
    console.log(data);
    history.push({
      pathname: "/visitor/checkout",
      search: `?zoneId=${data.zoneId}`,
    });
  };

  const schema = Joi.object({
    zoneId: Joi.string().optional().label("Zone ID"),
  });

  const fields = [
    {
      label: "Zone ID",
      name: "zoneId",
      placeholder: "number",
      type: "number",
      min: 0,
      max: 500,
    },
  ];
  return (
    <CardSimple
      title="Add specific Zone"
      optional="(optional)"
      subtitle="Registering for a sub-zone greatly improves our accuracy and reduces your risk of getting alerted"
    >
      <Form
        fields={fields}
        data={data}
        setData={setData}
        onSubmit={() => handleSubmit()}
        schema={schema}
      >
        <Button label="register zone" style="outlined" type="submit" />
      </Form>
    </CardSimple>
  );
};

export default CheckOutZoneForm;
