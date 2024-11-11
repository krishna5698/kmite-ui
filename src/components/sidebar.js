import React, { useState,useEffect } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); 

  const toggleSidebar = () => {
    setIsOpen(prevIsOpen => !prevIsOpen); 
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(true);
      } 
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);


  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div onClick={toggleSidebar} className="toggle-button">
      {isOpen ? '☰' : '☰ kmite'}
      </div>
      <div className="sidebar-content">
        <div className="sidebar-item"> {isOpen?'🏠' : '🏠 Tamil'}</div>
        <div className="sidebar-item">{isOpen?'💼' : '💼 English'}</div>
        <div className="sidebar-item">{isOpen?'🏡' : '🏡 Maths'}</div>
        <div className="sidebar-item">{isOpen?'🚗' : '🚗 Science'}</div>
        <div className="sidebar-item">{isOpen?'🛡️' : '🛡️ Social'}</div>
      </div>
    </div>
  );
};

export default Sidebar;