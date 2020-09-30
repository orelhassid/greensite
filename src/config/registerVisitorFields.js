export default [
  {
    label: "Phone Number",
    placeholder: "050-3334444",
    type: "tel",
    name: "phone",
    id: "phone",
  },
  {
    label: "ID (last 3)",
    placeholder: "Last 3 digits of ID",
    type: "text",
    name: "id",
    id: "id",
  },
  {
    label: "Name (optional)",
    placeholder: "Your name / nickname",
    type: "text",
    name: "name",
    id: "name",
  },
  {
    label: "Register for myself",
    type: "radio",
    name: "option",
    id: "myself",
    defaultValue: "myself",
    defaultChecked: "on",
  },
  {
    label: "Register someone else",
    type: "radio",
    name: "option",
    id: "else",
    disabled: true,
  },
];
