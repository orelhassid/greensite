import React from "react";
import { Link } from "react-router-dom";

const Label = () => (
  <p>
    I comply with the{" "}
    <Link to="/health">
      <strong>health Declation</strong>
    </Link>
  </p>
);

export default [
  {
    label: "Time",
    name: "time",
    type: "list",
    placeholder: "How long your visit will be?",
    options: ["30 Minutes", "50 Minutes"],
  },
  {
    label: <Label />,
    name: "health",
    type: "checkbox",
    id: "health",
  },
];

// export default Fields;
