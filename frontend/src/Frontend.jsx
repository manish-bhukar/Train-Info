import React, { useState } from 'react';
import { FaHome, FaTicketAlt, FaSubway, FaHandsHelping, FaClipboardList, FaSuitcase } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineStorage } from "react-icons/md";
import './Frontend.css';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navigateTo = (path) => {
    window.location.href = `${window.location.origin}${path}`;
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <nav className="navbar">
        <div className="brand">
          <div className="toggle" onClick={toggleSidebar}>
            <MdOutlineStorage className="toggle-icon" />
          </div>
          {!isCollapsed && <span className="logo">CoolieWale</span>}
        </div>
        <div className="list">
          <div onClick={() => navigateTo('/home')} className="link active">
            <FaHome className="icon" />
            {!isCollapsed && <span className="name">Home</span>}
          </div>
          <div onClick={() => navigateTo('/pnr-form')} className="link">
            <FaTicketAlt className="icon" />
            {!isCollapsed && <span className="name">Check PNR Status</span>}
          </div>
          <div onClick={() => navigateTo('/train-live')} className="link">
            <AiOutlineCheckCircle className="icon" />
            {!isCollapsed && <span className="name">Live Train Status</span>}
          </div>
          <div onClick={() => navigateTo('/trainform')} className="link">
            <FaSubway className="icon" />
            {!isCollapsed && <span className="name">Train Route</span>}
          </div>
          <div onClick={() => navigateTo('/order-coolie')} className="link">
            <FaSuitcase className="icon" />
            {!isCollapsed && <span className="name">Order a Coolie</span>}
          </div>
          <div onClick={() => navigateTo('/status')} className="link">
            <FaClipboardList className="icon" />
            {!isCollapsed && <span className="name">Status</span>}
          </div>
          <div onClick={() => navigateTo('/support')} className="link">
            <FaHandsHelping className="icon" />
            {!isCollapsed && <span className="name">Support</span>}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
