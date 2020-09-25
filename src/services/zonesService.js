import { toast } from "react-toastify";
import http from "./httpService";

const apiEndpoint = http.api.hub;

export async function getZones(hubId) {
  const api = `${apiEndpoint}/hub/${hubId}/zone`;

  try {
    const { data } = await http.get(api);
    return data;
    // return {
    //   zoneId: data.id,
    //   zoneName: data.name,
    //   siteid: data.hid,
    //   zoneLink: "",
    //   zoneType: "table",
    // };
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
