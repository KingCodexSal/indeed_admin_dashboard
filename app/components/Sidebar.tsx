"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ activeTab, setActiveTab, isSidebarOpen }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      } transition-transform duration-300 ease-in-out bg-gradient-to-b from-gray-900 to-gray-700 text-white w-64 z-50 shadow-sm shadow-[#333]`}
    >
      <div className="mt-2 p-4 text-2xl font-bold">Admin Dashboard</div>
      <nav className="flex-1 p-4">
        <button
          className={`w-full text-left p-4 mb-2 rounded flex items-center space-x-2 ${
            activeTab === "users" ? "bg-gray-700" : "hover:bg-gray-800"
          }`}
          onClick={() => setActiveTab("users")}
        >
          <FontAwesomeIcon icon={faUsers} />
          <span>Users</span>
        </button>
        <button
          className={`w-full text-left p-4 mb-2 rounded flex items-center space-x-2 ${
            activeTab === "jobs" ? "bg-gray-700" : "hover:bg-gray-800"
          }`}
          onClick={() => setActiveTab("jobs")}
        >
          <FontAwesomeIcon icon={faBriefcase} />
          <span>Jobs</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
