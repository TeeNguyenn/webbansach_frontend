import React, { ChangeEvent, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface NavbarProps {
    tuKhoaTimKiem: string;
    setTuKhoaTimKiem: (tuKhoa: string) => void;
}

const Navbar = ({ tuKhoaTimKiem, setTuKhoaTimKiem }: NavbarProps) => {
    const [tuKhoaTamThoi, setTuKhoaTamThoi] = useState('');

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTuKhoaTamThoi(e.target.value);
    };

    const handleSearch = () => {
        setTuKhoaTimKiem(tuKhoaTamThoi);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Bookstore
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Trang chủ
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdown1"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Thể loại sách
                            </NavLink>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown1"
                            >
                                <li>
                                    <NavLink className="dropdown-item" to="/1">
                                        Thể loại 1
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/2">
                                        Thể loại 2
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/3">
                                        Thể loại 3
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdown2"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Quy định bán hàng
                            </NavLink>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown2"
                            >
                                <li>
                                    <NavLink className="dropdown-item" to="#">
                                        Quy định 1
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="#">
                                        Quy định 2
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="#">
                                        Quy định 3
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">
                                Liên hệ
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Tìm kiếm */}
                <div className="d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Tìm kiếm"
                        aria-label="Search"
                        onChange={onSearchInputChange}
                        value={tuKhoaTamThoi}
                        onKeyDown={(e) =>
                            e.key === 'Enter' && setTuKhoaTimKiem(tuKhoaTamThoi)
                        }
                    />
                    <button
                        className="btn btn-outline-success"
                        type="button"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>

                {/* Biểu tượng giỏ hàng */}
                <ul className="navbar-nav me-1">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </li>
                </ul>

                {/* Biểu tượng đăng nhập */}
                <ul className="navbar-nav me-1">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-user"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
