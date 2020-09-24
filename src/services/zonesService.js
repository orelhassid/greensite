// import http from "./httpService";

// const apiEndpoint = "/zones";
export function getZones() {
  // Get request
  // http.get(apiEndpoint)
  return [
    {
      zoneId: 1,
      zoneName: "Table",
      siteid: "66664D",
      zoneLink: "",
      zoneType: "table",
    },
    {
      zoneId: 2,
      zoneName: "Table",
      siteid: "66664D",
      zoneLink: "",
      zoneType: "table",
    },
    {
      zoneId: 3,
      zoneName: "Table",
      siteid: "66664D",
      zoneLink: "",
      zoneType: "table",
    },
    {
      zoneId: 4,
      zoneName: "Table",
      siteid: "66664D",
      zoneLink: "",
      zoneType: "table",
    },
  ];
}

export function getZonesHub() {}

export default {
  getZones,
};
