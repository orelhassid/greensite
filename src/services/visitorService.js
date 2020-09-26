import { toast } from "react-toastify";
import http from "./httpService";
const api = http.api.visitor;
const apiVisitor = api + "/user/";

// localStorage key name
const visitorKey = "visitor-key";

// Register
export async function register(visitor) {
  const visitorData = {
    name: visitor.name,
    phone: visitor.phone,
    personal_id: visitor.id,
  };
  try {
    const { data } = await http.post(api + "/user", visitorData);
    localStorage.setItem(visitorKey, data.cid);
  } catch (error) {
    toast.error("Registration Failed");
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
    key: localStorage.getItem(visitorKey),
  };
}
export function checkin() {
  // http://54.72.200.116:7000/hub/1
  return {};
}
export function checkout() {
  // http://54.72.200.116:7000/hub/1
  return {};
}

export default {
  register,
  logout,
  login,
  getVisitor,
  checkin,
  checkout,
};
