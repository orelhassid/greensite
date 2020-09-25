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
  console.log("Hub", hub);
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
    console.log("data", data);
    localStorage.setItem(hubKey, data.hid);
    return data;
  } catch (error) {
    throw new Error("Registration Failed", error);
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
  const hubId = localStorage.getItem(hubKey);
  if (hubId) {
    return hubId;
  } else {
    throw new Error("Hubid does'nt Exist");
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
