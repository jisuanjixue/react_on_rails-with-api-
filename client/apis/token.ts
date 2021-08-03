import api from './axios';
import base from './base';

const create = (user:any) => {
  return api.post(`${base.develop}/token`, user);
} 

const tokenApi = {
  create,
};

export default tokenApi;