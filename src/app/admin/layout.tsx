"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import '../../styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineDashboard, AiOutlineWallet, AiOutlineBell, AiOutlineSetting, AiOutlineDown, AiOutlinePushpin } from 'react-icons/ai';
import { FaClinicMedical, FaUser } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';

const Sidebar = ({ isSidebarPinned, toggleSidebarPin }) => {
    const [isBaiDangMenuOpen, setBaiDangMenuOpen] = useState(false);
    const [isNhaTroMenuOpen, setNhaTroMenuOpen] = useState(false);
    const [isSocialMenuOpen, setSocialMenuOpen] = useState(false);
    const [isSidebarHovered, setSidebarHovered] = useState(false);

    const toggleBaiDangMenu = () => {
        setBaiDangMenuOpen(!isBaiDangMenuOpen);
    };

    const toggleNhaTroMenu = () => {
        setNhaTroMenuOpen(!isNhaTroMenuOpen);
    };

    const toggleSocialMenu = () => {
        setSocialMenuOpen(!isSocialMenuOpen);
    };

    const handleMouseEnter = () => {
        if (!isSidebarPinned) setSidebarHovered(true);
    };

    const handleMouseLeave = () => {
        if (!isSidebarPinned) setSidebarHovered(false);
    };

    return (
        <nav
            className={`sidebar ${isSidebarPinned || isSidebarHovered ? 'expanded' : ''} bg-dark text-white vh-100 p-3 overflow-auto`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="text-uppercase">Logo</h3>
                <button onClick={toggleSidebarPin} className="btn btn-sm text-white ms-auto">
                    <AiOutlinePushpin size={20} className={isSidebarPinned ? 'text-warning' : ''} />
                </button>
            </div>

            <ul className="nav flex-column mt-4">
                {/* Menu Bài Đăng */}
                <li className="nav-item my-2">
                    <div onClick={toggleBaiDangMenu} className="nav-link text-white d-flex align-items-center cursor-pointer">
                        <FaClinicMedical className="me-2" /> <span>Bài Đăng</span>
                        <AiOutlineDown className={`ms-auto ${isBaiDangMenuOpen ? 'rotate-icon' : ''}`} />
                    </div>
                    {isBaiDangMenuOpen && (
                        <ul className="nav flex-column ms-3">
                            <li className="nav-item my-2">
                                <Link href="/admin/crud_baidang" className="nav-link text-white">
                                    <span>CRUD</span>
                                </Link>
                            </li>
                            <li className="nav-item my-2">
                                <Link href="/admin/hospital/staff" className="nav-link text-white">
                                    <span>Các Tương Tác</span>
                                </Link>
                            </li>
                            <li className="nav-item my-2">
                                <Link href="/admin/hospital/staff" className="nav-link text-white">
                                    <span>Ràng buộc</span>
                                </Link>
                            </li>
                            <li className="nav-item my-2">
                                <Link href="/admin/hospital/staff" className="nav-link text-white">
                                    <span>Liên hệ</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Menu Nhà Trọ */}
                <li className="nav-item my-2">
                    <div onClick={toggleNhaTroMenu} className="nav-link text-white d-flex align-items-center cursor-pointer">
                        <FaClinicMedical className="me-2" /> <span>Nhà Trọ</span>
                        <AiOutlineDown className={`ms-auto ${isNhaTroMenuOpen ? 'rotate-icon' : ''}`} />
                    </div>
                    {isNhaTroMenuOpen && (
                        <ul className="nav flex-column ms-3">
                            <li className="nav-item my-2">
                                <Link href="/admin/hospital/departments" className="nav-link text-white">
                                    <span>CRUD Thông Tin</span>
                                </Link>
                            </li>
                            <li className="nav-item my-2">
                                <Link href="/admin/hospital/staff" className="nav-link text-white">
                                    <span>Các Tương Tác</span>
                                </Link>
                            </li>
                            <li className="nav-item my-2">
                                <Link href="/admin/hospital/staff" className="nav-link text-white">
                                    <span>Phạm vi tìm kiếm</span>
                                </Link>
                            </li>
                            <li className="nav-item my-2">
                                <Link href="/admin/hospital/staff" className="nav-link text-white">
                                    <span>Cá nhân hóa người dùng</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Menu Social */}
                <li className="nav-item my-2">
                    <div onClick={toggleSocialMenu} className="nav-link text-white d-flex align-items-center cursor-pointer">
                        <AiOutlineDashboard className="me-2" /> <span>Social</span>
                        <AiOutlineDown className={`ms-auto ${isSocialMenuOpen ? 'rotate-icon' : ''}`} />
                    </div>
                    {isSocialMenuOpen && (
                        <ul className="nav flex-column ms-3">
                            <li className="nav-item my-2">
                                <Link href="/admin/social/voucher" className="nav-link text-white">
                                    <span>Ví Voucher</span>
                                </Link>
                            </li>
                            <li className="nav-item my-2">
                                <Link href="/admin/social/game" className="nav-link text-white">
                                    <span>Game Tương Tác</span>
                                </Link>
                            </li>
                            <li className="nav-item my-2">
                                <Link href="/admin/social/short-video" className="nav-link text-white">
                                    <span>Video Ngắn</span>
                                </Link>
                            </li>
                            <li className="nav-item my-2">
                                <Link href="/admin/social/friends" className="nav-link text-white">
                                    <span>Kết Bạn Bốn Phương</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

const Header = ({ toggleSettings }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <header className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
            <div className="input-group w-50">
                <input type="text" placeholder="Search something..." className="form-control rounded-pill shadow-sm" />
                <button className="btn btn-outline-secondary rounded-circle ms-2" type="button">
                    <BsSearch />
                </button>
            </div>
            <div className="d-flex align-items-center">
                <AiOutlineBell className="ms-3" size={24} />
                <AiOutlineSetting className="ms-3" size={24} onClick={toggleSettings} style={{ cursor: 'pointer' }} />
                <div className="ms-3 d-flex align-items-center">
                    <FaUser className="me-2" />
                    <span>User Profile</span>
                </div>
                <div className="ms-3">
                    <select
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        className="form-select form-select-sm"
                        style={{ width: 'auto' }}
                    >
                        <option value="en">English</option>
                        <option value="vi">Vietnamese</option>
                    </select>
                </div>
            </div>
        </header>
    );
};


const AdminLayout = ({ children }) => {
    const [isSidebarPinned, setSidebarPinned] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const toggleSidebarPin = () => {
        setSidebarPinned((prev) => !prev);
    };

    const toggleSettings = () => {
        setShowSettings((prev) => !prev);
    };

    return (
        <div className="d-flex">
            <Sidebar isSidebarPinned={isSidebarPinned} toggleSidebarPin={toggleSidebarPin} />
            <div className={`main-content flex-grow-1 p-4 ${isSidebarPinned ? 'sidebar-expanded' : ''}`}>
                <Header toggleSettings={toggleSettings} />
                {showSettings && (
                    <div className="settings-panel position-fixed top-0 end-0 bg-light p-3 shadow-lg rounded">
                        <h5>Settings</h5>
                        <div className="form-group">
                            <label>Color Scheme</label>
                            <select className="form-select">
                                <option>Light</option>
                                <option>Dark</option>
                            </select>
                        </div>
                        <div className="form-group mt-3">
                            <label>Layout Mode</label>
                            <select className="form-select">
                                <option>Default</option>
                                <option>Compact</option>
                            </select>
                        </div>
                        <div className="form-group mt-3">
                            <label>Sidebar Size</label>
                            <select className="form-select">
                                <option>Small</option>
                                <option>Large</option>
                            </select>
                        </div>
                    </div>
                )}
                <main>{children}</main>
            </div>
        </div>
    );
};

export default AdminLayout;
