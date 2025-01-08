import React, { useState } from "react";
import Pagination from "./Pagination";

const jobs = [
  { id: 1, title: "Software Engineer", company: "Tech Corp" },
  { id: 2, title: "Product Manager", company: "Business Inc" },
  // Add more jobs as needed
];

interface JobsProps {
  searchQuery: string;
}

const Jobs: React.FC<JobsProps> = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="overflow-x-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Jobs</h2>
      {filteredJobs.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-200">
          This item cannot be found
        </p>
      ) : (
        <>
          <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 dark:text-gray-200">
                  Title
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 dark:text-gray-200">
                  Company
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 dark:text-gray-200">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentJobs.map((job, index) => (
                <tr
                  key={job.id}
                  className={`${
                    index % 2 === 0
                      ? "bg-gray-100 dark:bg-gray-900"
                      : "bg-white dark:bg-gray-800"
                  }`}
                >
                  <td className="py-3 px-6 text-sm text-gray-800 dark:text-gray-200">
                    {job.title}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-800 dark:text-gray-200">
                    {job.company}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-800 dark:text-gray-200">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => console.log(`Verify job ${job.id}`)}
                    >
                      Verify
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

export default Jobs;
