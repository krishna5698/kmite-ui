
import React from 'react';
import Sidebar from './sidebar';
import TopBar from './topbar';
import Dashboard from '../Dashboard/dashboard';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <Dashboard /> 
      </div>
    </div>
  );
};

export default Layout;
