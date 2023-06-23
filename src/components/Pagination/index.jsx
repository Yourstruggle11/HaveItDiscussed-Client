import React from "react";

export default function Pagination({ totalBlogs, onPageClick, currentPage, limit }) {
  let noOfItemsInPagination = Math.ceil(totalBlogs / limit);
  let listOfPages = new Array(noOfItemsInPagination)
    .fill(0)
    .map((_, index) => index + 1);
  let lastLimit = (currentPage - 1) * limit + limit;

  return (
    <div className="w-full px-4 py-3 flex dark:text-white items-center justify-between border-t border-gray-200 sm:px-6 mt-5 dark:outline-2 dark:outline-white">
      <div className="flex-1 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex justify-center sm:justify-start">
          {currentPage > 1 && (
            <button
              onClick={() => onPageClick(currentPage - 1)}
              className="mr-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 mb-2 sm:mb-0 sm:mr-3 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Previous
            </button>
          )}
          {currentPage < noOfItemsInPagination && (
            <button
              onClick={() => onPageClick(currentPage + 1)}
              className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 mb-2 sm:mb-0 sm:mr-3 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Next
            </button>
          )}
        </div>
        <div className="flex items-center mt-2 sm:mt-0">
          {totalBlogs && (
            <p className="text-bolder text-gray-900 dark:text-white text-sm sm:text-base">
              Showing{" "}
              <span className="font-medium">
                {(currentPage - 1) * limit + 1}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {/* if current page is the last page then show total blogs */}
                {currentPage === listOfPages.length
                  ? totalBlogs
                  : lastLimit > totalBlogs
                  ? totalBlogs
                  : lastLimit}
              </span>{" "}
              of <span className="font-medium">{totalBlogs}</span> results
            </p>
          )}

        </div>
      </div>
    </div>
  );
}
