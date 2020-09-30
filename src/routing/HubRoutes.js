import RegisterHubPage from "../pages/business/RegisterHubPage";
import RegisterZonesPage from "../pages/business/RegisterZonesPage";
import ZonesSinglePage from "../pages/zones/ZonesSinglePage";
import LoginHubPage from "../pages/business/LoginHubPage";
import ZonesPage from "../pages/business/zonesPage";

export default [
  { path: "/hub/register/zones", component: RegisterZonesPage },
  { path: "/hub/login", component: LoginHubPage },
  { path: "/hub/register", component: RegisterHubPage },
  { path: "/hub/zone/:hid?/:zid?", component: ZonesSinglePage },
  { path: "/hub/zones", component: ZonesPage },
];
