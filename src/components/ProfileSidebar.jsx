import React, { useState } from "react";
import {
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const ProfileSidebar = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: <FaUser className="text-blue-500" /> },
    { id: "settings", label: "Settings", icon: <FaCog className="text-green-500" /> },
    { id: "logout", label: "Logout", icon: <FaSignOutAlt className="text-red-500" /> },
    { id: "email", label: "Email", icon: <FaEnvelope className="text-yellow-500" />, value: "john.doe@example.com" },
    { id: "phone", label: "Phone", icon: <FaPhone className="text-purple-500" />, value: "+1234567890" },
  ];

  return (
    <div className={`fixed top-16 right-0 h-full w-64 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
      <div className="relative h-full bg-[#2b5ffc] bg-opacity-30 backdrop-blur-3xl border border-white border-opacity-20 shadow-lg">
        <div className="bg-[#16224d] bg-opacity-40 backdrop-blur-xl text-white px-6 py-4 border-b border-white border-opacity-20">
          <div className="flex items-center space-x-4">
            <FaUserCircle className="text-6xl text-white" />
            <div>
              <p className="font-semibold text-3xl mb-2">Redwan </p>
              <p className="text-lg">Web Designer</p>
            </div>
          </div>
        </div>
        <div className="py-6 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`w-full flex items-center space-x-4 px-4 py-3 text-white rounded-lg hover:bg-[#111c43] hover:bg-opacity-50 focus:outline-none transition-all duration-300 ${
                activeTab === tab.id ? "bg-[#111c43] bg-opacity-50" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex items-center space-x-3">
                {tab.icon}
                <span className="text-lg text-white">{tab.label}</span>
              </div>
              {tab.value && (
                <div className="ml-auto">
                  <p className="text-sm text-white">{tab.value}</p>
                </div>
              )}
            </button>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <button
            className="w-full py-3 bg-red-600 text-white font-semibold hover:bg-red-700 focus:outline-none transition-all duration-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
