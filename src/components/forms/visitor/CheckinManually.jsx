import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../elements/Button";
import { Grid } from "../../layout";
import TextField from "../fields/TextField";

const CheckinManually = () => {
  const [data, setData] = useState({
    hubid: "",
  });

  const field = {
    label: "Hubid",
    id: "hubid",
  };
  const history = useHistory();

  const handleClick = () => {
    console.log("Clicked!");

    history.push(`/visitor/checkin/${data.hubid}`);
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ hubid: input.value });
  };

  return (
    <Grid>
      <p>Scan a QRCode or type Business CID Manually</p>
      <TextField
        field={field}
        onChange={(e) => handleChange(e)}
        value={data.hubid}
      />
      <Button label="Enter" onClick={() => handleClick()} />
    </Grid>
  );
};

export default CheckinManually;
