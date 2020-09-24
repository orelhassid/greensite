import { toast } from "react-toastify";
import http from "./httpService";
const api = http.api.visitor;
// Register / Check-in
// Login
// Get Visitor

// localStorage key name
const visitorKey = "visitor-key";

// Register
// http://54.72.200.116:9000/user
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

export function login(visitor) {
  // Check the data

  if (visitor.password === getVisitor()) {
    return true;
  } else {
    return null;
  }
}

export function getVisitor() {
  try {
    return localStorage.getItem(visitorKey);
  } catch (error) {
    return null;
  }
}

export default {
  register,
  logout,
  login,
  getVisitor,
};
