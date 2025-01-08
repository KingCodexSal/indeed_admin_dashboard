import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./Pagination";

const users = [
  { id: 1, name: "John Doe", isAdmin: false, email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", isAdmin: true, email: "jane.smith@example.com" },
  // Add more users as needed
];

interface UsersProps {
  searchQuery: string;
}

const Users: React.FC<UsersProps> = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="overflow-x-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      {filteredUsers.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-200">
          This item cannot be found
        </p>
      ) : (
        <>
          <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 dark:text-gray-200">
                  Name
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 dark:text-gray-200">
                  Status
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 dark:text-gray-200">
                  Email
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 dark:text-gray-200">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0
                      ? "bg-gray-100 dark:bg-gray-900"
                      : "bg-white dark:bg-gray-800"
                  }`}
                >
                  <td className="py-3 px-6 text-sm text-gray-800 dark:text-gray-200">
                    {user.name}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-800 dark:text-gray-200">
                    {user.isAdmin ? "Admin" : "User"}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-800 dark:text-gray-200">
                    {user.email}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-800 dark:text-gray-200 flex space-x-2">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => console.log(`Edit user ${user.id}`)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => console.log(`Delete user ${user.id}`)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Users;
