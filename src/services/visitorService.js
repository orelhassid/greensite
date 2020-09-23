import http from "./httpService";
const apiEndpoint = "/auth";
// Register / Check-in
// Login
// Get Visitor

// localStorage key name
const visitorKey = "cid-key";

// Register

export async function login(email, password) {
  const { data: cid } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(visitorKey, cid);
}

export function logout() {
  localStorage.removeItem(visitorKey);
}

export function getVisitor() {
  try {
    // const cid = localStorage.getItem(visitorKey);
    // return http.get
  } catch (error) {
    return null;
  }
}

export default {
  login,
  logout,
  getVisitor,
};
