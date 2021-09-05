/**
 * api接口的统一出口
 */
// 文章模块接口
import postsApi from "./posts";
import tokenApi from "./token";
import userApi from "./user";
// 其他模块的接口……

// 导出接口
const apis = {
  postsApi,
  userApi,
  tokenApi
};

export default apis;
