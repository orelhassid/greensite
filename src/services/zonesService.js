import { toast } from "react-toastify";
import http from "./httpService";

const apiEndpoint = http.api.hub;

export async function getZones(hubId = "") {
  // http://54.72.200.116:5000/hub/${hubId}/zone`
  console.log("Hub ID", hubId);
  try {
    const { data } = http.get(`${apiEndpoint}${hubId}/zone`);
    return {
      zoneId: data.id,
      zoneName: data.name,
      siteid: data.hid,
      zoneLink: "",
      zoneType: "table",
    };
    // {
    //   "address": "The moon",
    //   "company_id": "4321",
    //   "contact_details": "1234",
    //   "contact_name": "neil",
    //   "hid": "WZVV21",
    //   "id": 2,
    //   "name": "Luna",
    //   "parent_id": null,
    //   "type": "cafe"
    // },
  } catch (error) {
    toast.error("Failed to fetch zones");
    console.error(error);
    return [];
  }
}

export function getZone() {}

export default {
  getZones,
  getZone,
};
