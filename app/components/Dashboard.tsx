"use client";
import React, { useState } from "react";
import Users from "./Users";
import Jobs from "./Jobs";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
      />
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0 md:ml-64"
        }`}
      >
        <NavBar
          toggleSidebar={toggleSidebar}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setSearchQuery={setSearchQuery}
        />
        <div className="p-4">
          <div className="flex justify-end mb-4"></div>
          {activeTab === "users" && <Users searchQuery={searchQuery} />}
          {activeTab === "jobs" && <Jobs searchQuery={searchQuery} />}
          {activeTab === "profile" && <Profile />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
