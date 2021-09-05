import axios from "axios";
import { useHistory } from "react-router-dom";

import Toastr from "../bundles/common/Toastr";
import {
  getFromLocalStorage,
  setToLocalStorage
} from "../bundles/helpers/storage";

const handleSuccessResponse = response => {
  if (response) {
    response.success = response.status === 200;
    if (response.data.notice) {
      Toastr.success(response.data.notice);
    }
  }
  return response;
};

const handleErrorResponse = error => {
  let history = useHistory();
  if (error.response?.status === 401) {
    setToLocalStorage(null);
  }
  if (error.response?.status === 403) {
    localStorage.removeItem("token");
    setToLocalStorage(null);
    Toastr.error("登录过期，请重新登录");
    setTimeout(() => {
      history.push("/");
    }, 1000);
  }
  Toastr.error(
    error.response?.data?.error ||
      error.response?.data?.notice ||
      error.message ||
      error.notice ||
      "Something went wrong!"
  );
  if (error.response?.status === 423) {
    history.push("/");
  }
  return Promise.reject(error);
};

// 创建axios实例
const api = axios.create({ timeout: 1000 * 12 });
api.defaults.headers = {
  Accept: "applicaion/json",
  "Content-Type": "application/json",
  "X-CSRF-TOKEN": document
    .querySelector('[name="csrf-token"]')
    .getAttribute("content")
};
// 设置post请求头
// api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
api.interceptors.request.use(
  config => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    const token = getFromLocalStorage("token");
    console.log(token, "333");
    token && (config.headers.Authorization = token);
    return config;
  },
  error => Promise.reject(error)
);

// 响应拦截器
axios.interceptors.response.use(handleSuccessResponse, error =>
  handleErrorResponse(error)
);

export default api;
