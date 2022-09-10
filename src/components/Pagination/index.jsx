import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

export default function Pagination({ totalBlogs, onPageClick, currentPage, limit }) {
    let noOfItemsInPagination = Math.ceil(totalBlogs / limit)
    let listOfPages = new Array(noOfItemsInPagination)
        .fill(0)
        .map((_, index) => index + 1)
    let lastLimit = (currentPage - 1) * limit + limit
    // let firstLimit = (currentPage - 1) * limit + 1

    return (
        <div className="bg-white w-full h-[5rem] px-4 py-3 flex dark:bg-MB dark:text-white items-center justify-between border-t border-gray-200 sm:px-6 mt-5 dark:outline-2 dark:outline-white">
            <div className="flex-1 flex justify-between sm:hidden">
                {currentPage > 1 && (
                    <button
                        onClick={() => onPageClick(currentPage - 1)}
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Previous
                    </button>
                )}
                {currentPage < noOfItemsInPagination && (
                    <button
                        onClick={() => onPageClick(currentPage + 1)}
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Next
                    </button>
                )}
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    {totalBlogs ? (
                        <p className="text-sm text-gray-700 dark:text-white">
                            Showing{' '}
                            <span className="font-medium">
                                {(currentPage - 1) * limit + 1}
                            </span>{' '}
                            to{' '}
                            <span className="font-medium">
                                {/* if current page is the last page then show total blogs */}
                                {currentPage === listOfPages.length
                                    ? totalBlogs
                                    : lastLimit > totalBlogs
                                    ? totalBlogs
                                    : lastLimit}
                            </span>{' '}
                            of <span className="font-medium">{totalBlogs}</span>{' '}
                            results
                        </p>
                    ) : null}
                </div>
                <div>
                    <nav
                        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                        aria-label="Pagination"
                    >
                        {/* Move the Previous page if current page is not the first page */}
                        {currentPage > 1 && (
                            <button
                                onClick={() => onPageClick(currentPage - 1)}
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        )}

                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                        {/* Show each page button  */}
                        {listOfPages.map((page, index) => (
                            <button
                                key={index}
                                onClick={() => onPageClick(page)}
                                aria-current="page"
                                className="no-underline z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            >
                                {page}
                            </button>
                        ))}
                        {/* Move the Next page if current page is not the last page */}
                        {currentPage < noOfItemsInPagination && (
                            <button
                                onClick={() => onPageClick(currentPage + 1)}
                                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    )
}
