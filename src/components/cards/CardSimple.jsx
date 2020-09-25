import React from "react";
import Paper from "./Paper";

const CardSimple = ({ title, subtitle, optional, children }) => {
  return (
    <Paper>
      <p className="subtitle">{subtitle}</p>
      <h3 className="title">
        {title}
        {optional && <span className="optional">{optional}</span>}
      </h3>
      {children}
    </Paper>
  );
};

export default CardSimple;
