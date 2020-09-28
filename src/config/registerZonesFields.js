export default [
  {
    label: "Zone Type",
    placeholder: "Options",
    type: "list",
    name: "zoneType",
    id: "zone_type",
    options: ["Class", "Tables", "Office", "Other"],
    help: "zone type means: table at a cafe, carrianges in a train etc.",
  },
  {
    label: "Count",
    placeholder: "How many zones you want?",
    type: "number",
    name: "zoneCount",
    min: 0,
    max: 100,
  },
];
