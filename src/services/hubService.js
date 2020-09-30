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

export async function getHub(hid) {
  try {
    const { data } = await http.get(`${apiEndpoint}/${hid}`);
    return data;
  } catch (error) {
    throw new Error("Hubid does'nt Exist", error);
  }
}

export async function getZones(hid) {
  // const hubid = getHubKey();
  if (!hid) throw new Error("Hub not exist.");

  const api = `${apiEndpoint}/${hid}/zone`;

  try {
    const { data } = await http.get(api);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function getZone(hid, zid) {
  // https://hub.pasescovid.com/hub/GKTIL8/zone/2
  let result;
  try {
    if (!zid) {
      result = http.get(`${apiEndpoint}/${hid}/zone`);
    } else {
      result = http.get(`${apiEndpoint}/${hid}/zone/${zid}`);
    }
    return result;
  } catch (error) {
    throw new Error("Get Zone Failed", error);
  }
}

export default {
  login,
  register,
  logout,
  getHubKey,
  // getHub: getHubKey,
  getHub,
  addZones,
  getZones,
  getZone,
};

/**
Hub/{id}/zone GETid = db.Column(db.Integer, primary_key=True)  name = db.Column(db.String(100))  type = db.Column(db.String(200))
*/
