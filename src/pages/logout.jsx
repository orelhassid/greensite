import visitor from "../services/visitorService";

function Logout() {
  visitor.logout();
  window.location = "/";
  return null;
}

export default Logout;
