import React from "react";
// import hubService from "../services/hubService";
// async function getCurrentHub() {
//   const hub = await hubService.getHub();
//   return hub;
// }
export default [
  {
    label: "",
    type: "radio",
    name: "location",
    id: "hub",
    defaultValue: "hub",
    defaultChecked: "on",
  },
  {
    label: "Check out only from sub-zone",
    type: "radio",
    name: "location",
    id: "zone",
  },
];

// export default Fields;
