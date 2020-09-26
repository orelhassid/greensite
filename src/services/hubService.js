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
  const hubid = getHubKey();
  try {
    const { data } = await http.post(`${apiEndpoint}/${hubid}/zone`, {
      count,
      type,
    });

    return data;
  } catch (error) {
    throw new Error("Register Zones Failed.");
  }
  // http://54.72.200.116:5000/hub/D8X5VB/zone
}

export function getHubKey() {
  if (localStorage.getItem(hubKey)) {
    return localStorage.getItem(hubKey);
  } else throw new Error("Hub Key not exist");
}

export async function getHub() {
  const hubid = getHubKey();
  try {
    const { data } = await http.get(`${apiEndpoint}/${hubid}`);
    return data;
  } catch (error) {
    throw new Error("Hubid does'nt Exist");
  }
}

export async function getZones() {
  const hubid = getHubKey();
  if (!hubid) throw new Error("Hub not exist.");

  const api = `${apiEndpoint}/${hubid}/zone`;

  try {
    const { data } = await http.get(api);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function getZone(id) {}

export default {
  login,
  register,
  logout,
  getHub: getHubKey,
  addZones,
  getZones,
  getZone,
};

/**
Hub/{id}/zone GET id = db.Column(db.Integer, primary_key=True)   name = db.Column(db.String(100))   type = db.Column(db.String(200))
*/
