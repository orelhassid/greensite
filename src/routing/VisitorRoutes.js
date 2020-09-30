import RegisterVisitorPage from "../pages/visitor/RegisterVisitorPage";
import RegisterElsePage from "../pages/visitor/RegisterElsePage";
import RegisterSuccessPage from "../pages/visitor/RegisterSuccessPage";
import LoginVisitorPage from "../pages/visitor/LoginVisitorPage";
import CheckOutPage from "../pages/visitor/CheckOutPage";
import CheckOutSuccessPage from "../pages/visitor/CheckOutSuccessPage";
import CheckOutZonePage from "../pages/visitor/CheckOutZonePage";
import CheckInPage from "../pages/visitor/CheckInPage";

export default [
  { path: "/visitor/register/success", component: RegisterSuccessPage },
  { path: "/visitor/login", component: LoginVisitorPage },
  { path: "/visitor/checkin/:hid?/:zid?", component: CheckInPage },
  { path: "/visitor/checkout/success/:hid?", component: CheckOutSuccessPage },
  { path: "/visitor/checkout/zone/:hid", component: CheckOutZonePage },
  { path: "/visitor/checkout/:hid", component: CheckOutPage },
  { path: "/visitor/register", component: RegisterVisitorPage },
  { path: "/visitor/register/else", component: RegisterElsePage },
];
