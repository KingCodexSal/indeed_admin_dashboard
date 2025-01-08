import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBriefcase } from "@fortawesome/free-solid-svg-icons";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  isSidebarOpen,
}) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64`}
    >
      <div className="flex items-center justify-center h-16 shadow-md">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
      <nav className="mt-10">
        <button
          onClick={() => setActiveTab("users")}
          className={`flex items-center px-4 py-2 mt-2 text-sm font-medium rounded-lg ${
            activeTab === "users" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
        >
          <FontAwesomeIcon icon={faUsers} className="mr-3" />
          Users
        </button>
        <button
          onClick={() => setActiveTab("jobs")}
          className={`flex items-center px-4 py-2 mt-2 text-sm font-medium rounded-lg ${
            activeTab === "jobs" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
        >
          <FontAwesomeIcon icon={faBriefcase} className="mr-3" />
          Jobs
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
