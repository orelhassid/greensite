import { toast } from "react-toastify";
import http from "./httpService";
import hubService from "./hubService";

const apiVisitor = http.api.visitor + "/user";
const apiCheck = http.api.check + "/user";

// console.log(`${apiCheck}/checkin`);
// console.log(http.api);

// localStorage key name
const visitorKey = "visitor-key";

// Register Visitor
// http://54.72.200.116:9000/user/

export async function register(visitor) {
  const visitorData = {
    name: visitor.name,
    phone: visitor.phone,
    personal_id: visitor.id,
  };
  try {
    const { data } = await http.post(apiVisitor, visitorData);
    localStorage.setItem(visitorKey, data.cid);
    return data;
  } catch (error) {
    toast.error("Registration Failed");
    throw new Error("Registration Failed");
  }
}

export function logout() {
  localStorage.removeItem(visitorKey);
}

export async function login(visitor) {
  const { data } = await http.get(apiVisitor + visitor.password);
  console.log("Visitor", data);
  localStorage.setItem(visitorKey, data.cid);
  return data;
}

export async function getVisitor() {
  try {
    const cid = localStorage.getItem(visitorKey);

    const { data } = await http.get(`${apiVisitor}/${cid}`);
    return data;
  } catch (error) {
    throw new Error("User not found", error);
  }
}
export async function checkin(data, params, visitor) {
  // const visitor = getVisitor();
  try {
    // const hub = await hubService.getHub(params.hid);
    // localStorage.setItem(
    //   "hub",
    //   JSON.stringify({
    //     name: hub.name,
    //     hid: hub.hid,
    //   })
    // );
  } catch (error) {
    console.error(error);
  }
  let duration = parseInt(data.duration);
  const minutes = duration === 0 ? 30 : duration * 60;

  const checkinObject = {
    hub_id: params.hid,
    zone_id: params.zid || 0,
    duration: minutes,
    user_cid: visitor.cid,
  };

  try {
    const { data } = await http.post(`${apiCheck}/checkin`, checkinObject);
    return data;
  } catch (error) {
    throw new Error("Check-in Failed", error);
  }
}
export async function checkout(params, visitorId) {
  // http://54.72.200.116:7000/user/checkout

  const id = getVisitorId();
  const requestObject = {
    hub_id: params.hid,
    zone_id: params.zid || null,
    user_cid: id,
  };

  try {
    const { data } = await http.post(`${apiCheck}/checkout`, requestObject);
    // localStorage.removeItem("hub");
    console.log("Checkout Services", data);
    return data;
  } catch (error) {}
}

export function isLogin() {
  const cid = localStorage.getItem(visitorKey);
  if (cid) return true;
  else return false;
}
export function getVisitorId() {
  return localStorage.getItem(visitorKey);
}

export async function storeHub(hub) {
  return await localStorage.setItem(
    "hub",
    JSON.stringify({
      name: hub.name,
      hid: hub.hid,
      zid: hub.zid,
    })
  );
}

export default {
  register,
  logout,
  login,
  isLogin,
  getVisitor,
  checkin,
  checkout,
  visitorId: getVisitorId,
  storeHub,
};
