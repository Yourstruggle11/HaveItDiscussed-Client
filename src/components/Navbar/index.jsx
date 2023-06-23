import React from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'
import { MenuIcon, XIcon, MoonIcon, SunIcon } from '@heroicons/react/outline'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actions/userAction'
import ProfileMenuPopUpWithMenuItems from './components/ProfileMenuPopupWithMenuItems'
import NotificationBell from '../NotificationBell'
import BellIcon from '../CustomIcon/BellIcon'
import { ButtonDefinations } from '../ButtonDefinations'
// import { getAllQuestions } from '../../redux/actions/questionAction'

export default function Navbar() {
    const [searchTerm, setSearchTerm] = React.useState('')

    // get path name
    const location = useLocation()

    const { userInfo: data } = useSelector((state) => state.userSignin)
    const { isDark } = useSelector((state) => state.darkMode)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // added debounce to prevent the search term from being updated too often
    const search = (value) => {
        // const {data} = useSelector(state => state.getAllQuestions)
        setSearchTerm(value)
        navigate(`/?search=${value}`)
    }

    const handleDarkMode = () => {
        if (!isDark) {
            dispatch({ type: 'DARK', payload: true })
            localStorage.theme = 'dark'
        } else {
            dispatch({ type: 'DARK', payload: false })
            localStorage.theme = 'light'
        }
    }

    const redirectHandler = () => {
        navigate(`/login?redirect=${location.pathname}`)
    }

    return (
        <>
            <div className="sticky top-0 z-[5555]">
                <Popover className="relative bg-[#fff] dark:bg-MB">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                            {/* Heading / Logo */}
                            <div className="flex justify-start lg:w-0 lg:flex-1 h-[48px]">
                                <div className="cursor-pointer">
                                    <span className="sr-only">Logo</span>
                                    <Link to="/">
                                        <img
                                            src={logo}
                                            alt="logo"
                                            className="w-[5rem] h-[5rem]"
                                        />
                                    </Link>
                                </div>
                            </div>
                            {/* Menu Icons show from tab view */}
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </Popover.Button>
                            </div>
                            {/*-------------- Nav Items --------------------*/}

                            <div className="min-w-[60%] hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                {/* Search bar */}
                                <div className="xl:w-[10.5rem] mr-5">
                                    <label className="relative block">
                                        <div className="input-group relative flex flex-wrap items-stretch w-full">
                                            <input
                                                value={searchTerm}
                                                onChange={(e) =>
                                                    search(e.target.value)
                                                }
                                                type="search"
                                                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-[#242424] bg-[white] bg-clip-padding border border-solid border-[gray] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                        </div>
                                        {!searchTerm && (
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
                                        )}
                                    </label>
                                </div>
                                {isDark ? (
                                    <SunIcon
                                        className="h-6 w-6 cursor-pointer dark:text-white"
                                        onClick={handleDarkMode}
                                    />
                                ) : (
                                    <MoonIcon
                                        className="h-6 w-6 cursor-pointer"
                                        onClick={handleDarkMode}
                                    />
                                )}
                                {data ? (
                                    <React.Fragment>
                                        <div className="whitespace-nowrap mx-4 text-base font-medium text-gray-500 hover:text-[gray] cursor-pointer">
                                            {/* <item.icons className={item.className} onClick={item.function} /> */}
                                        </div>
                                        <ProfileMenuPopUpWithMenuItems />
                                        <div className="w-10 h-10 mx-4">
                                            <NotificationBell />
                                        </div>
                                        <div className="whitespace-nowrap mx-4 text-base font-medium text-gray-500 hover:text-[gray] cursor-pointer">
                                            {/* <item.icons className={item.className} onClick={item.function} /> */}
                                            <Link to="/question/new">
                                                <ButtonDefinations.EngageButton>
                                                    Engage with Community
                                                </ButtonDefinations.EngageButton>
                                            </Link>
                                        </div>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        {/* <Link to="/login"> */}
                                        <div
                                            onClick={redirectHandler}
                                            className="whitespace-nowrap mx-4 text-base font-medium text-gray-500 hover:text-[gray] cursor-pointer"
                                        >
                                            {/* <item.icons className={item.className} onClick={item.function} /> */}
                                            Login
                                        </div>
                                        {/* </Link> */}
                                    </React.Fragment>
                                )}
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
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-MB divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <Link to="/">
                                            <img
                                                src={logo}
                                                alt="logo"
                                                className="w-[5rem] h-[5rem]"
                                            />
                                        </Link>
                                        <div className="-mr-2">
                                            <Menu.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">
                                                    Close menu
                                                </span>
                                                <XIcon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </Menu.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-6 px-5 space-y-6 text-center">
                                    {/* Search bar */}
                                    <div className="xl:w-96">
                                        <label className="relative block">
                                            <div className="input-group relative flex flex-wrap items-stretch w-full">
                                                <input
                                                    value={searchTerm}
                                                    onChange={(e) =>
                                                        search(e.target.value)
                                                    }
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
                                    <div
                                        className={
                                            !data
                                                ? 'grid items-center'
                                                : 'flex flex-col justify-items-center items-center'
                                        }
                                    >
                                        {isDark ? (
                                            <SunIcon
                                                className="h-6 w-6 cursor-pointer dark:text-white m-auto"
                                                onClick={handleDarkMode}
                                            />
                                        ) : (
                                            <MoonIcon
                                                className="h-6 w-6 m-auto"
                                                onClick={handleDarkMode}
                                            />
                                        )}
                                        {data ? (
                                            <React.Fragment>
                                                <div
                                                    onClick={() => {
                                                        dispatch(logoutUser())
                                                    }}
                                                    className="whitespace-nowrap mx-4 text-base font-medium text-gray-500 hover:text-[gray] cursor-pointer mb-5"
                                                >
                                                    {/* <item.icons className={item.className} onClick={item.function} /> */}
                                                    Logout
                                                </div>

                                                <Link
                                                    to={`/users/${data?.userNo}/${data?.userName}`}
                                                    className="whitespace-nowrap mx-4 text-base font-medium text-gray-500 hover:text-[gray] cursor-pointer mb-5"
                                                >
                                                    {/* <item.icons className={item.className} onClick={item.function} /> */}
                                                    <img
                                                        className="w-10 h-10 rounded-full"
                                                        src={
                                                            data
                                                                ? data.profilePic
                                                                : 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                                                        }
                                                        alt="Rounded avatar"
                                                    />
                                                </Link>
                                                <Link
                                                    to="notifications"
                                                    className="whitespace-nowrap mx-4 text-base font-medium text-gray-500 hover:text-[gray] cursor-pointer mb-5"
                                                >
                                                    <div className="relative">
                                                        <BellIcon className="h-6 w-6" />
                                                        {15 > 0 && (
                                                            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                                                                {15}
                                                            </span>
                                                        )}
                                                    </div>
                                                </Link>
                                                <div className="whitespace-nowrap mx-4 text-base font-medium text-gray-500 hover:text-[gray] cursor-pointer ">
                                                    {/* <item.icons className={item.className} onClick={item.function} /> */}
                                                    <Link to="/question/new">
                                                        <ButtonDefinations.EngageButton>
                                                            Engage with Community
                                                        </ButtonDefinations.EngageButton>
                                                    </Link>
                                                </div>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <div
                                                    onClick={redirectHandler}
                                                    className="whitespace-nowrap mx-4 text-base font-medium text-gray-500 hover:text-[gray] cursor-pointer"
                                                >
                                                    {/* <item.icons className={item.className} onClick={item.function} /> */}
                                                    Login
                                                </div>
                                            </React.Fragment>
                                        )}
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
        </>
    )
}
