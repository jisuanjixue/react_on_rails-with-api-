import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import apis from '../../../apis';
import { setToLocalStorage } from '../../helpers/storage'


export interface Props {
  type: string
}

const UserForm: FunctionComponent<Props> = (props: Props) => {
  const { type } = props
  const [user, getUser] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const subSave = async (e: any) => {
    e.preventDefault();
    const tokenUser = { email: user.email, password_digest: user.password, }
    const newUser = { ...tokenUser, role: 1 }

    try {
      setLoading(true)
      if (type === 'up') {
        await apis.userApi.create({ ...newUser })
        setLoading(false);
        history.push("/signIn");
      } else {
        const res = await apis.tokenApi.create({ ...tokenUser })
        const token = res.data.token
        if (res.data) {
          setToLocalStorage(token)
        }
        setLoading(false);
        history.push("/");
      }
    }
    catch (error) {
      setLoading(false);
    }
  };

  const handChange = (name, e) => {
    user[`${name}`] = e.target.value;
    getUser({ ...user });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{type === 'in' ? '马 上 登 录' : '注 册 您 的 账 户'}</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              {type === 'in' ? '开始您的快乐之旅' : '免费注册'}
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                电子邮箱
              </label>
              <input
                value={user.email}
                id="email-address"
                name="email"
                onChange={e => handChange('email', e)}
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                密码
              </label>
              <input
                value={user.password}
                onChange={e => handChange('password', e)}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {type === 'in' &&
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  记住我
                </label>
              </div>
              <div className="text-sm">
              <Link to="/users" className="font-medium text-indigo-600 hover:text-indigo-500">
                没有注册？
              </Link>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  忘记密码？
                </a>
              </div>
            </div>
          }
          <div>
            <button
              onClick={(e) => subSave(e)}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              {type === 'in'? '登录' : '注册'}
            </button>
          </div>
        </form>
      </div >
    </div >
  )
}

export default UserForm
