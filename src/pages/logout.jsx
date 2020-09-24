import visitor from "../services/visitorService";
import hub from "../services/hubService";

function Logout() {
  visitor.logout();
  hub.logout();
  window.location = "/";
  return null;
}

export default Logout;
