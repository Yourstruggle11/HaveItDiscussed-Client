import React from 'react'
import { Popover, Transition,Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

export default function Navbar() {


  const [searchTerm, setSearchTerm] = React.useState("")

  // added debounce to prevent the search term from being updated too often
  const search = (value) => {
    console.log('====================================');
    console.log(value);
    console.log('====================================');
    setSearchTerm(value)
  }


  return (
    <>
      <div className="sticky top-0 z-50">
        <Popover className="relative bg-[#fff] dark:bg-MB">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
              {/* Heading / Logo */}
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <div className="cursor-pointer">
                  <span className="sr-only">Logo</span>
                  <Link to="/">
                    HaveItDiscussed
                  </Link>
                </div>
              </div>
              {/* Menu Icons show from tab view */}
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              {/*-------------- Nav Items --------------------*/}

              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {/* Search bar */}
                <div className="xl:w-96">
                  <label className="relative block">
                    <div className="input-group relative flex flex-wrap items-stretch w-full">
                      <input
                        value={searchTerm}
                        onChange={(e) => search(e.target.value)}
                        type="search"
                        className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-[#242424] bg-[white] bg-clip-padding border border-solid border-[gray] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    {!searchTerm &&
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg
                          className="h-5 w-5 fill-black"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                        >
                          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                        </svg>
                      </span>
                    }
                  </label>
                </div>
                {["LOGIN", "SIGNUP"].map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="whitespace-nowrap mx-4 text-base font-medium text-gray-500 hover:text-[gray] cursor-pointer">
                      {/* <item.icons className={item.className} onClick={item.function} /> */}
                      {item}
                    </div>
                  </React.Fragment>
                ))}
                {/* commenting login for future use 
             <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Login
              </a>
             */}
              </div>
              {/*-------------- Nav Items --------------------*/}
            </div>
          </div>
          {/*------ Mobile View ---------*/}
          <Transition
            // as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu
              focus
              className="absolute top-[-5rem] inset-x-0 p-2 transition transform origin-top-right md:hidden z-50 bg-[#fff] dark:bg-MB"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <Link to='/'>
                      {/* <Image
                        className="h-8 w-auto cursor-pointer"
                        src={Logo}
                        alt="Logo"
                        width={200}
                        height={50}
                      /> */}
                      HaveItDiscussed
                    </Link>
                    <div className="-mr-2">
                      <Menu.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6 text-center">
                  {/* <div className="grid grid-cols-1 gap-y-6 gap-x-12">
                    {subNavItems.map((item, key) => (
                      <Link
                        href={item.link}
                        key={key}
                        className="text-base font-medium text-gray-900 hover:text-gray-700 cursor-pointer"
                      >
                        <Menu.Button className={"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"}>{item.title} </Menu.Button>
                      </Link>
                    ))}
                  </div> */}
                  {/* Search bar */}
                  <div className="xl:w-96">
                    <label className="relative block">
                      <div className="input-group relative flex flex-wrap items-stretch w-full">
                        <input
                          value={searchTerm}
                          onChange={(e) => search(e.target.value)}
                          type="search"
                          className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </div>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg
                          className="h-5 w-5 fill-black"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                        >
                          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                  <div className="grid grid-cols-2">
                    {["LOGIN", "SIGNUP"].map((item, key) => (
                      <div
                        key={key}
                        className="text-base m-auto my-1 font-medium text-gray-900 hover:text-gray-700 cursor-pointer"
                      >
                        {/* <item.icons className={item.className} onClick={item.function} /> */}
                        {item}
                      </div>
                    ))}
                  </div>
                  {/*   Conmmenting login button for future use
               <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  </div>
                */}
                </div>
              </div>
            </Menu>
          </Transition>
        </Popover>
      </div>
      {/* <SubNav setSearchTerm={setSearchTerm} /> */}
    </>
  )
}
