import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";

export default function Navigator() {
  return (
    <>
        <BrowserRouter>
                <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
