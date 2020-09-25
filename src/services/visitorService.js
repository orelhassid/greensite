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
  console.log("Visitor", visitor);
  // "uid": "V8VRUD1PLK"
  // "cid": "V8VRUD",
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
  return {};
}

export default {
  register,
  logout,
  login,
  getVisitor,
  checkin,
};
