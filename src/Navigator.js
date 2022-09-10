import React from 'react'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Question from './pages/Question'
import PostQuestion from './pages/PostQuestion'
import Login from './pages/Login'
import { UserProtection } from './Layout/RouteProtection'

export default function Navigator() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <ToastContainer
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    // className={classes.socialToastContainer}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/question/:questionSlug" element={<Question />} />
                    <Route
                        path="/question/new"
                        element={
                            <UserProtection>
                                <PostQuestion />
                            </UserProtection>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}
