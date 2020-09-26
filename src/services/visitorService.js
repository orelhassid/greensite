import { toast } from "react-toastify";
import http from "./httpService";
import hubService from "./hubService";

const apiVisitor = http.api.visitor + "/user";
const apiCheck = http.api.check + "/user";

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
    return localStorage.setItem(visitorKey, data.cid);
  } catch (error) {
    toast.error("Registration Failed");
    throw new Error("Registration Failed");
    console.log("error");
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

export function getVisitor() {
  return {
    name: "",
    cid: localStorage.getItem(visitorKey),
  };
}
export async function checkin(data) {
  // http://54.72.200.116:7000/hub/1
  const visitor = getVisitor();
  const hub = hubService.getHub();

  const checkinObject = {
    hub_id: hub.id,
    zone_id: 1,
    duration: data.duration,
    user_cid: visitor.cid,
  };
  try {
    const result = await http.post(`${apiCheck}/checkin`, checkinObject);
  } catch (error) {}

  return {};
}
export async function checkout() {
  // http://54.72.200.116:7000/hub/1
  try {
    const result = await http.post(`${apiCheck}/checkout`, {});
  } catch (error) {}
}

export default {
  register,
  logout,
  login,
  getVisitor,
  checkin,
  checkout,
};
