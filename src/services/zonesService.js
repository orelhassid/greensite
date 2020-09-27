import http from "./httpService";
import hubService from "./hubService";

const apiHub = http.api.hub + "/hub";

export function getZone() {}

export async function createZones() {
  try {
    const hub = await hubService.getHub();
    console.log("Hub", hub);
  } catch (error) {}
}

export default {
  getZones,
  getZone,
  createZones,
};
