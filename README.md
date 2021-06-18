# react_on_rails-with-api
介绍：
1. 一个 用 ruby on rails + react_on_rails +api 输出调用+ axios + tailwind 的启动项目 基础模板
2. Client-Side Rendering vs. Server-Side Rendering
3. rails Model 和 controller 层 作为后端服务， 通过 react_on_rails 与webpacker 集成 后 前端用 React , 请参考 https://www.shakacode.com/react-on-rails/docs/。
4. 前端通过react-router-dom 作为页面路径跳转， 结合rails 的 route 进行与后端交互请求，用到的 axios 的请求依赖。
5.UI 应用 https://tailwindui.com/#product-marketing , 里面有https://headlessui.dev/react/相关UI 组件。

启动：
git clone git@github.com:jisuanjixue/react_on_rails-with-api-.git

bundle

yarn


用 HMR 运行命令：
foreman start -f Procfile.dev-hmr

没有 HMR, statically creating the bundles 运行命令：

foreman start -f Procfile.dev


About： 
 一个前端和ruby on rails 开发的 bobo
