import http from "./httpService";
import { toast } from "react-toastify";

const apiEndpoint = http.api.hub + "/hub";

// localStorage key name
const hubKey = "hub-key";

// Register

export async function login(email, password) {
  //   const { data: cid } = await http.post(apiEndpoint, { email, password });
  //   localStorage.setItem(visitorKey, cid);
}

export async function register(hub) {
  // 1. Map the hub object into api object
  // 2. POST request to the server
  // 3. Store the hub-key in localStorage
  const hubObject = {
    name: hub.name,
    address: hub.address,
    type: hub.hubType,
    contact_name: hub.contactName,
    contact_details: hub.contactPhone,
    company_id: hub.id,
  };

  try {
    const { data } = await http.post(apiEndpoint, hubObject);
    localStorage.setItem(hubKey, data.hid);
    return data;
  } catch (error) {
    throw new Error("Registration Failed", error);
  }
}

export function logout() {
  localStorage.removeItem(hubKey);
}

export async function addZones(type, count) {
  // 1. Generate arrays of zones
  // 2. Get hub id
  // 3. POST zones
  // 4. Error handling

  let zones = new Array(count).fill({ name: type });
  const hub = getHub();
  // http://54.72.200.116:5000/hub/D8X5VB/zone
  console.log(`${apiEndpoint}/${hub.id}/zone`);
  try {
    const { data } = await http.post(`${apiEndpoint}/${hub.id}/zone`, zones);
    return data;
  } catch (error) {
    throw new Error("Register Zones Failed.");
  }
}

export function getHub() {
  try {
    return {
      id: localStorage.getItem(hubKey),
    };
  } catch (error) {
    throw new Error("Hubid does'nt Exist");
  }
}

export async function getZones(hub) {
  // http://54.72.200.116:5000/hub/D8X5VB/zone
  const api = `${apiEndpoint}/${hub.id}/zone`;

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
export async function getZone(id) {
  console.log(id);
  // Get Zone by id
  const hub = getHub();
  try {
    // http.get(apiEndpoint, )
  } catch (error) {}
  return {};
}
export default {
  login,
  register,
  logout,
  getHub,
  addZones,
  getZones,
  getZone,
};

/**
Hub/{id}/zone GET id = db.Column(db.Integer, primary_key=True)   name = db.Column(db.String(100))   type = db.Column(db.String(200))
*/
