import React from "react";
import Paper from "./Paper";
const ErrorCard = (error) => {
  return (
    <Paper>
      <h1>Error</h1>
      <p>{error}</p>
    </Paper>
  );
};

export default ErrorCard;
