import React from "react";
import { Link } from "react-router-dom";

const HealthLink = () => (
  <p>
    I comply with the{" "}
    <Link to="/health">
      <strong>health Declation</strong>
    </Link>
  </p>
);

export default [
  {
    label: "Time (in hours)",
    name: "time",
    type: "range",
    placeholder: "How long your visit will be?",
    min: 0,
    max: 10,
    // options: ["10", "20", "30", "40", "50", "60"],
  },
  {
    label: <HealthLink />,
    name: "health",
    type: "checkbox",
    id: "health",
  },
];

// export default Fields;
