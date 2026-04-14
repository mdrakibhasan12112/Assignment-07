import React from 'react';
import { NavLink } from 'react-router';
import { IoMdTime } from 'react-icons/io';
import { IoMdHome } from 'react-icons/io';
import { ImStatsDots } from 'react-icons/im';

const Navber = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="container mx-auto flex justify-between">
        <div className="">
          <a className="btn btn-ghost text-xl">
            <span className="font-bold">Keen</span>Keeper
          </a>
        </div>

        <ul className="flex gap-6 text-center items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white p-1.5 rounded-sm flex items-center justify-center gap-1 ${isActive ? 'bg-[#244D3F]' : 'bg-gray-500'}`
              }
            >
              <IoMdHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `text-white p-1.5 rounded-sm flex items-center justify-center gap-1 ${isActive ? 'bg-[#244D3F]' : 'bg-gray-500'}`
              }
            >
              <IoMdTime />
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `text-white p-1.5 rounded-sm flex items-center justify-center gap-1 ${isActive ? 'bg-[#244D3F]' : 'bg-gray-500'}`
              }
            >
              <ImStatsDots /> Stats
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
