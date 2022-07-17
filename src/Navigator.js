import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Question from './pages/Question';

export default function Navigator() {
  return (
    <>
        <BrowserRouter>
                <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/question" element={<Question />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
