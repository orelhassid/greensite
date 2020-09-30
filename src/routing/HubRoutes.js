import RegisterHubPage from "../pages/business/RegisterHubPage";
import RegisterZonesPage from "../pages/business/RegisterZonesPage";
// import ZonesSinglePage from "../pages/business/ZoneSinglePage";
import LoginHubPage from "../pages/business/LoginHubPage";
import ZonesPage from "../pages/business/zonesPage";

export default [
  { path: "/hub/zones", component: RegisterZonesPage },
  { path: "/hub/login", component: LoginHubPage },
  { path: "/hub/login", component: LoginHubPage },
  //   { path: "/hub/zone/:hid?/:zid?", component: ZonesSinglePage },
  { path: "/hub/register", component: RegisterHubPage },
  { path: "/hub/zones", component: ZonesPage },
];
