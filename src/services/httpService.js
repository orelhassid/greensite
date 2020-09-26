import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_HUB_API;
// axios.defaults.baseURL = process.env.REACT_APP_VISITOR_API;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

// function setJwt(jwt) {
//   axios.defaults.headers.common["x-auth-token"] = jwt;
// }

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  api: {
    hub: process.env.REACT_APP_HUB_API,
    visitor: process.env.REACT_APP_VISITOR_API,
    check: process.env.REACT_APP_CHECK_API,
  },
  //   setJwt,
};
