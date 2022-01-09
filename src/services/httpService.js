import axios from "axios";
import { toast } from "react-toastify";
/**
 * this service provides all HTTP requests,
 * we also handle errors that may be happened.
 */
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (config) => {
    config.timeout = 5 * 1000; // 5 second
    return config;
  },
  (error) => {
    toast.dismiss();
    toast.error("an error occured from the server!", {
      hideProgressBar: true,
    });
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    //console.log(error);
    toast.dismiss();
    toast.error("an error occured from the server!", {
      hideProgressBar: true,
      bodyClassName: {
        color: "red",
      },
    });
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
