/* eslint-disable no-console */
import * as React from "react";
import { FunctionComponent, useState } from "react";

import { LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Fragment } from "react-router/node_modules/@types/react";

import apis from "../../../apis";
import { setToLocalStorage } from "../../helpers/storage";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// eslint-disable-next-line import/exports-last
export interface Props {
  type: string;
}

const UserForm: FunctionComponent<Props> = (props: Props) => {
  const { type } = props;
  const [user, getUser] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const subSave = async (e: any) => {
    e.preventDefault();
    const tokenUser = {
      name: user.name,
      password_digest: user.password,
      email: user.email
    };
    const newUser = { ...tokenUser, role: 1 };

    try {
      setLoading(true);
      if (type === "up") {
        await apis.userApi.create({ ...newUser });
        setLoading(false);
        history.push("/signIn");
      } else {
        const res = await apis.tokenApi.create({ ...tokenUser });
        const token = res.data.token;
        if (res.data) {
          setToLocalStorage(token);
        }
        setLoading(false);
        history.push("/");
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const handChange = (name, e) => {
    user[`${name}`] = e.target.value;
    getUser({ ...user });
  };

  console.log(loading);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <div className="w-full max-w-md space-y-8">
          <div className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
            <img
              className="w-auto h-12 mx-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              {type === "in" ? "马 上 登 录" : "注 册 您 的 账 户"}
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {type === "in" ? "开始您的快乐之旅" : "免费注册"}
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            {type === "up" && (
              <Fragment>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="username"
                      className="block text-sm text-gray-800 dark:text-gray-200"
                    >
                      用户名
                    </label>
                  </div>
                  <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    defaultValue="true"
                    value={user.name}
                    id="name-address"
                    name="name"
                    onChange={e => handChange("name", e)}
                    autoComplete="name"
                    required
                  />
                </div>
              </Fragment>
            )}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="username"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  邮箱
                </label>
                <Link
                  to="#"
                  className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
                >
                  验证码登录
                </Link>
              </div>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                defaultValue="true"
                value={user.email}
                id="name-email"
                name="email"
                onChange={e => handChange("email", e)}
                autoComplete="email"
                required
              />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  密码
                </label>
                {type === "in" && (
                  <Link
                    to="#"
                    className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    忘记密码?
                  </Link>
                )}
              </div>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={user.password}
                onChange={e => handChange("password", e)}
                id="password"
                name="password"
                autoComplete="current-password"
                required
              />
            </div>
            <div className="mt-6">
              <button
                onClick={e => subSave(e)}
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                {type === "in" ? "登录" : "注册"}
              </button>
            </div>
          </form>
          {type === "in" && (
            <React.Fragment>
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <a
                  href="#"
                  className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
                >
                  或者其他账号登录
                </a>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
              </div>
              <div className="flex items-center mt-6 -mx-2">
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
                >
                  <svg
                    className="w-4 h-4 mx-2 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                  </svg>

                  <span className="hidden mx-2 sm:inline">微信登录</span>
                </button>

                {/* <a href="#"
                  className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-200 transform bg-gray-300 rounded-md hover:bg-gray-200">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z">
                    </path>
                  </svg>
                </a> */}
              </div>

              <p className="mt-8 text-xs font-light text-center text-gray-400">
                {" "}
                还没有账号?
                <Link
                  to="/signup"
                  className="font-medium text-gray-800 dark:text-gray-200 hover:underline"
                >
                  没有注册？
                </Link>
              </p>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserForm;
