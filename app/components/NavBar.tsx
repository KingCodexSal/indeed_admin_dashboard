"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const NavBar = ({ toggleSidebar, activeTab, setActiveTab, setSearchQuery }) => {
  const [search, setSearch] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-md transition-all duration-300">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="p-2 focus:outline-none md:hidden"
        >
          <FontAwesomeIcon icon={faBars} className="text-white" />
        </button>
        {activeTab === "users" || activeTab === "jobs" ? (
          <div className="relative flex items-center space-x-2">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder={`Search ${
                activeTab === "users" ? "Users" : "Jobs"
              }...`}
              className="p-2 pl-10 w-32 md:w-80 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none ml-2"
            />
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 focus:outline-none">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-gray-500 dark:text-gray-300"
              />
            </button>
          </div>
        ) : null}
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 focus:outline-none">
          <FontAwesomeIcon icon={faBell} className="text-white" />
        </button>
        <div className="relative">
          <button
            onClick={() => setActiveTab("profile")}
            className="p-2 focus:outline-none"
          >
            <Image
              src="/profile.jpg"
              width={30}
              height={30}
              alt="profile"
              className="rounded-full border-2 border-[#f1f1f1] shadow-lg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
