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
    label: "I comply with the Health Declaration",
    name: "health",
    type: "checkbox",
    defaultValue: false,
    id: "health",
  },
];
