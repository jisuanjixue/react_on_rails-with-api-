import api from "./axios";
import base from "./base";

const create = user => {
  return api.post(`${base.develop}/users`, user);
};

const userApi = {
  create
};

export default userApi;
