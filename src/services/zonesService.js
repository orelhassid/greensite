import http from "./httpService";
import hubService from "./hubService";

const apiHub = http.api.hub + "/hub";

export function getZone(hid, zid) {
  try {
    // https://hub.pasescovid.com/hub/GKTIL8/zone/2
    const {data} = await http.get(`${apiHub}/${hid}/zone/${zid}`)
    return data;
  } catch (error) {
    throw new Error("Zone was't found", error)
    
  }
}

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
