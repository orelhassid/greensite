import Home from "../pages/home";
import Help from "../pages/help";
import HealthPage from "../pages/HealthPage";
import Logout from "../pages/logout";
import NotFound from "../pages/notfound";

export default [
  { path: "/help", component: Help },
  { path: "/health", component: HealthPage },
  { path: "/logout", component: Logout },
  { path: "/notfound", component: NotFound },
  { path: "/", component: Home },
];
