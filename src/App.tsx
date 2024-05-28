import React, { useState } from 'react';
import './App.css';
import Navbar from './layouts/header-footer/Navbar';
import Footer from './layouts/header-footer/Footer';
import HomePage from './layouts/homepage/components/HomePage';
import { layToanBoSach } from './api/SachAPI';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './layouts/about/About';
import ChiTietSanPham from './layouts/product/ChiTietSanPham';

function App() {
    const [tuKhoaTimKiem, setTuKhoaTimKiem] = useState('');

    return (
        <div className="">
            <BrowserRouter>
                <Navbar
                    tuKhoaTimKiem={tuKhoaTimKiem}
                    setTuKhoaTimKiem={setTuKhoaTimKiem}
                ></Navbar>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage tuKhoaTimKiem={tuKhoaTimKiem}></HomePage>
                        }
                    ></Route>
                    <Route
                        path="/:maTheLoai"
                        element={
                            <HomePage tuKhoaTimKiem={tuKhoaTimKiem}></HomePage>
                        }
                    ></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route
                        path="/sach/:maSach"
                        element={<ChiTietSanPham></ChiTietSanPham>}
                    ></Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
