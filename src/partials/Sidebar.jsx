import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';

// Icon Import
import {MdAccountCircle} from 'react-icons/md';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div className='h-screen'>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={` flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out border-r-2 border-slate-100 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-0 pr-3 sm:px-2 ">
          {/* Close button */}
          <butto
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </butto>
          {/* Logo */}
          <NavLink end to="/" className="block ">
           <h1 className='text-2xl font-extrabold text-gray-700'>CBT</h1>
          </NavLink>
        </div>

        {/* Links */}
        <div className="">
          {/* Pages group */}
          {/* Account Details----------------------> */}
          <div>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup activecondition={pathname === '/' || pathname.includes('dashboard')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={({ isActive }) =>
                        `block truncate transition duration-150 ${isActive ? 'text-gray-700' : 'text-white'}`
                      }
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="">
                           
                            <NavLink
                              end
                              to="/"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-white' : 'text-gray-700')
                              }
                            >
                              <span className='inline-block -mb-[5px] text-xl'>
                                <i class="fa-solid fa-table-columns"></i> {/* Icon */}
                              </span>
                              <span className="inline-block text-sm ml-2 font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Account Details
                              </span>
                            </NavLink>
                          </div>
                        </div>
                      </a>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>

           {/* Send Money-------------------------------> */}
           <div>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup activecondition={pathname === '/send-money' || pathname.includes('send-money')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={({ isActive }) =>
                        `block truncate transition duration-150 ${isActive ? 'text-gray-700' : 'text-white'}`
                      }
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <NavLink
                              end
                              to="/send-money"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-white' : 'text-gray-700')
                              }
                            >
                              <span className='inline-block -mb-[5px] text-xl'>
                                <i className="fas fa-share-square"></i> {/* Icon */}
                              </span>
                              <span className="text-sm ml-2 font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Send Money
                              </span>
                            </NavLink>
                          </div>
                        </div>
                      </a>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>

          {/* Bank Transfer------------------------> */}
           <div>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup activecondition={pathname === '/bank-transfer' || pathname.includes('bank-transfer')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={({ isActive }) =>
                        `block truncate transition duration-150 ${isActive ? 'text-gray-700' : 'text-white'}`
                      }
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <NavLink
                              end
                              to="/bank-transfer"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-white' : 'text-gray-700')
                              }
                            >
                              <span className='inline-block -mb-[5px] text-xl'>
                                <i className="fas fa-university"></i> {/* Icon */}
                              </span>
                              <span className="text-sm ml-2 font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Bank Transfer
                              </span>
                            </NavLink>
                          </div>
                        </div>
                      </a>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>

          {/* Cash out-------------------------------> */}
          <div>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup activecondition={pathname === '/cash-out' || pathname.includes('cash-out')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={({ isActive }) =>
                        `block truncate transition duration-150 ${isActive ? 'text-gray-700' : 'text-white'}`
                      }
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <NavLink
                              end
                              to="/cash-out"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-white' : 'text-gray-700')
                              }
                            >
                              <span className='inline-block -mb-[5px] text-xl'>
                              <i className="fas fa-hand-holding-usd"></i> {/* Icon */}
                              </span>
                              <span className="text-sm ml-2 font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Cash Out
                              </span>
                            </NavLink>
                          </div>
                        </div>
                      </a>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>

          {/* Payment--------------------------------> */}
          <div>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup activecondition={pathname === '/payment' || pathname.includes('payment')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={({ isActive }) =>
                        `block truncate transition duration-150 ${isActive ? 'text-gray-700' : 'text-white'}`
                      }
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <NavLink
                              end
                              to="/payment"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-white' : 'text-gray-700')
                              }
                            >
                              <span className='inline-block -mb-[5px] text-xl'>
                                <i className="fas fa-money-check-alt"></i> {/* Icon */}
                              </span>
                              <span className="text-sm ml-2 font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Payment
                              </span>
                            </NavLink>
                          </div>
                        </div>
                      </a>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>

          {/* Deposti--------------------------> */}
          <div>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup activecondition={pathname === '/deposit' || pathname.includes('deposit')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={({ isActive }) =>
                        `block truncate transition duration-150 ${isActive ? 'text-gray-700' : 'text-white'}`
                      }
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <NavLink
                              end
                              to="/deposit"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-white' : 'text-gray-700')
                              }
                            >
                              <span className='inline-block -mb-[5px] text-xl'>
                                <i className="fas fa-donate"></i> {/* Icon */}
                              </span>
                              <span className="text-sm ml-2 font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Deposti
                              </span>
                            </NavLink>
                          </div>
                        </div>
                      </a>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>

         
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text_bkash" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text_bkash" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
