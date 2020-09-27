import React from "react";
import { Link } from "react-router-dom";

const HealthLink = () => (
  <p>
    I comply with the {/* <Link to="/visitor/checkin?popup=health"> */}
    <strong>Health Declaration</strong>
    {/* </Link> */}
  </p>
);

export default [
  {
    label: "Time (in hours)",
    name: "duration",
    type: "range",
    placeholder: "How long your visit will be?",
    defaultValue: 0,
    min: 0,
    max: 10,
    // options: ["10", "20", "30", "40", "50", "60"],
  },
  {
    label: <HealthLink />,
    name: "health",
    type: "checkbox",
    defaultValue: false,
    id: "health",
  },
];

// export default Fields;
