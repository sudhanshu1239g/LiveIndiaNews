import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className="bg-slate-950 text-white py-4 px-6 md:px-12 flex justify-between items-center border-b-4 border-red-600 sticky top-0 z-50 shadow-xl">
      <div className="text-2xl font-black tracking-tighter text-red-600">
        <NavLink to="/">🦅 LIVEUSA <span className="text-white">.</span></NavLink>
      </div>
      
      <ul className="hidden md:flex gap-8 items-center text-sm font-semibold uppercase tracking-wide">
        <li>
          <NavLink to="/" end className={({ isActive }) => 
            isActive ? 'text-white border-b-2 border-red-600 pb-1' : 'text-slate-400 hover:text-white transition-all'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/sports" className={({ isActive }) => 
            isActive ? 'text-white border-b-2 border-red-600 pb-1' : 'text-slate-400 hover:text-white transition-all'}>
            Sports
          </NavLink>
        </li>
        <li>
          <NavLink to="/politics" className={({ isActive }) => 
            isActive ? 'text-white border-b-2 border-red-600 pb-1' : 'text-slate-400 hover:text-white transition-all'}>
            Politics
          </NavLink>
        </li>
        <li>
          <NavLink to="/economy" className={({ isActive }) => 
            isActive ? 'text-white border-b-2 border-red-600 pb-1' : 'text-slate-400 hover:text-white transition-all'}>
            Economy
          </NavLink>
        </li>
        <li>
          <NavLink to="/special-report" className={({ isActive }) => 
            isActive ? 'text-white border-b-2 border-red-600 pb-1' : 'text-slate-400 hover:text-white transition-all'}>
            Special
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;