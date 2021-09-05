import api from "./axios"; // 导入http中创建的axios实例
import base from "./base"; // 导入接口域名列表

const list = () => api.get(`${base.develop}/posts`);

const postsApi = {
  list
};

export default postsApi;
