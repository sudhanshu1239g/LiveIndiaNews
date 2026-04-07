import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../features/newsList/components/Navbar';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="py-12 bg-slate-950 text-slate-500 text-center text-sm border-t border-slate-800">
        © 2026 LiveIndia News Engine. Powered by MERN + Socket.io + Redis.
      </footer>
    </div>
  );
};

export default MainLayout;