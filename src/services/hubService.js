import { toast } from "react-toastify";
import http from "./httpService";

const apiEndpoint = http.api.hub + "/hub";

// localStorage key name
const hubKey = "hub-key";

// Register

export async function login(email, password) {
  //   const { data: cid } = await http.post(apiEndpoint, { email, password });
  //   localStorage.setItem(visitorKey, cid);
}

export async function register(hub) {
  const hubObject = {
    name: hub.name,
    address: hub.address,
    type: hub.hubType,
    contact_name: hub.contactName,
    contact_details: hub.contactPhone,
    company_id: hub.id,
  };
  try {
    const { data: hub } = await http.post(apiEndpoint, hubObject);
    console.log("data", hub);
    localStorage.setItem(hubKey, hub.id);
    toast.success(`Register Success! welcome ${hub.contact_name}`);
  } catch (error) {
    return toast.error("Register Hub Failed.");
  }
}

export function logout() {
  localStorage.removeItem(hubKey);
}

export function addZones(zones) {
  // Adding zone to hub
  // const hub = getHub();
  http.post(http.api.hub, zones);
}

export function getHub() {
  try {
    // const hubId = localStorage.getItem(hubKey);
    // const key = localStorage.getItem(hubKey);
    // Get request by id
  } catch (error) {
    return null;
  }
}

export default {
  login,
  register,
  logout,
  getHub,
  addZones,
};

/**
Hub/{id}/zone GET id = db.Column(db.Integer, primary_key=True)   name = db.Column(db.String(100))   type = db.Column(db.String(200))
*/
