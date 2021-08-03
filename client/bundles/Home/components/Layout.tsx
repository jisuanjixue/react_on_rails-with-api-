

/* This example requires Tailwind CSS v2.0+ */
import * as React from 'react';
import { useState, FunctionComponent, useEffect, Fragment } from 'react';
import { Disclosure, Menu, Transition, Popover, Dialog } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from "react-router-dom";
import Hello from "./Hello"


// const navigation = ['Dashboard', 'Team', 'Projects', 'Calendar', 'Reports'];
// const profile = ['Your Profile', 'Settings', 'Sign out'];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Layout = () => {

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-24">
                <span className="block mb-6">KINDERGARTEN</span>
                <span className="block text-indigo-800 xl:inline">智慧幼儿园管理系统</span>
              </h1>

              <span className="block mb-6 font-black text-5xl">您好！</span>
              <span className="block mb-6 font-black text-2xl">欢迎进入智慧幼儿园系统</span>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                  to="/signin"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    开始使用
                  </Link>
                </div>
              </div>
          
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  )
  // return (
  //   <div>
  //     <div>
  //       <Disclosure as="nav" className="bg-gray-800">
  //         {({ open }) => (
  //           <>
  //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //               <div className="flex items-center justify-between h-16">
  //                 <div className="flex items-center">
  //                   <div className="flex-shrink-0">
  //                     <img
  //                       className="h-8 w-8"
  //                       src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
  //                       alt="Workflow"
  //                     />
  //                   </div>
  //                   <div className="hidden md:block">
  //                     <div className="ml-10 flex items-baseline space-x-4">
  //                       {navigation.map((item, itemIdx) =>
  //                         itemIdx === 0 ? (
  //                           <Fragment key={item}>

  //                             {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
  //                             <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
  //                               {item}
  //                             </a>
  //                           </Fragment>
  //                         ) : (
  //                           <a
  //                             key={item}
  //                             href="#"
  //                             className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  //                           >
  //                             {item}
  //                           </a>
  //                         )
  //                       )}
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="hidden md:block">
  //                   <div className="ml-4 flex items-center md:ml-6">
  //                     <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
  //                       <span className="sr-only">View notifications</span>
  //                       <BellIcon className="h-6 w-6" aria-hidden="true" />
  //                     </button>

  //                     {/* Profile dropdown */}
  //                     <Menu as="div" className="ml-3 relative">
  //                       {({ open }) => (
  //                         <>
  //                           <div>
  //                             <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
  //                               <span className="sr-only">Open user menu</span>
  //                               <img
  //                                 className="h-8 w-8 rounded-full"
  //                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  //                                 alt=""
  //                               />
  //                             </Menu.Button>
  //                           </div>
  //                           <Transition
  //                             show={open}
  //                             as={Fragment}
  //                             enter="transition ease-out duration-100"
  //                             enterFrom="transform opacity-0 scale-95"
  //                             enterTo="transform opacity-100 scale-100"
  //                             leave="transition ease-in duration-75"
  //                             leaveFrom="transform opacity-100 scale-100"
  //                             leaveTo="transform opacity-0 scale-95"
  //                           >
  //                             <Menu.Items
  //                               static
  //                               className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
  //                             >
  //                               {profile.map((item, index) => (
  //                                 <Menu.Item key={item}>
  //                                   {({ active }) => (
  //                                     <Link
  //                                       className={classNames(
  //                                         active ? 'bg-gray-100' : '',
  //                                         'block px-4 py-2 text-sm text-gray-700'
  //                                       )}
  //                                       to={index === 0? "/signin" : "/posts"}
  //                                     >
  //                                       {item}
  //                                     </Link>
  //                                   )}
  //                                 </Menu.Item>
  //                               ))}
  //                             </Menu.Items>
  //                           </Transition>
  //                         </>
  //                       )}
  //                     </Menu>
  //                   </div>
  //                 </div>
  //                 <div className="-mr-2 flex md:hidden">
  //                   {/* Mobile menu button */}
  //                   <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
  //                     <span className="sr-only">Open main menu</span>
  //                     {open ? (
  //                       <XIcon className="block h-6 w-6" aria-hidden="true" />
  //                     ) : (
  //                       <MenuIcon className="block h-6 w-6" aria-hidden="true" />
  //                     )}
  //                   </Disclosure.Button>
  //                 </div>
  //               </div>
  //             </div>

  //             <Disclosure.Panel className="md:hidden">
  //               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
  //                 {navigation.map((item, itemIdx) =>
  //                   itemIdx === 0 ? (
  //                     <Fragment key={item}>
  //                       {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
  //                       <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
  //                       </a>
  //                     </Fragment>
  //                   ) : (
  //                     <a
  //                       key={item}
  //                       href="#"
  //                       className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  //                     >
  //                       {item}
  //                     </a>
  //                   )
  //                 )}
  //               </div>
  //               <div className="pt-4 pb-3 border-t border-gray-700">
  //                 <div className="flex items-center px-5">
  //                   <div className="flex-shrink-0">
  //                     <img
  //                       className="h-10 w-10 rounded-full"
  //                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  //                       alt=""
  //                     />
  //                   </div>
  //                   <div className="ml-3">
  //                     <div className="text-base font-medium leading-none text-white">Tom Cook</div>
  //                     <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
  //                   </div>
  //                   <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
  //                     <span className="sr-only">View notifications</span>
  //                     <BellIcon className="h-6 w-6" aria-hidden="true" />
  //                   </button>
  //                 </div>
  //                 <div className="mt-3 px-2 space-y-1">
  //                   {profile.map(item => (
  //                     <a
  //                       key={item}
  //                       href="#"
  //                       className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
  //                     >
  //                       {item}
  //                     </a>
  //                   ))}
  //                 </div>
  //               </div>
  //             </Disclosure.Panel>
  //           </>
  //         )}
  //       </Disclosure>

  //       <header className="bg-white shadow">
  //         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
  //           <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
  //         </div>
  //       </header>
  //       <main>
  //         <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
  //           {/* Replace with your content */}
  //           <div className="px-4 py-6 sm:px-0">
  //             <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
  //             <Hello  />
  //           </div>
  //           {/* /End replace */}
  //         </div>
  //       </main>
  //     </div>
  //   </div>

  // );
};

export default Layout;
