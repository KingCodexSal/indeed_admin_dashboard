"use client";
import React from "react";

const Profile = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <h1 className="text-3xl font-semibold mb-4">Profile</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">User Information</h2>
        <p className="mb-2">
          <strong>Name:</strong> Jane Doe
        </p>
        <p className="mb-2">
          <strong>Email:</strong> jane.doe@example.com
        </p>
        <p className="mb-2">
          <strong>Status:</strong> Admin
        </p>
      </div>
    </div>
  );
};

export default Profile;
