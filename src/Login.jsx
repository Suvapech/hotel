import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate
import './Login.css'; // นำเข้า CSS สำหรับล็อกอิน
import { FaUserCircle } from 'react-icons/fa'; // นำเข้าไอคอนโปรไฟล์

const LoginPage = () => {
    const navigate = useNavigate(); // ใช้ useNavigate สำหรับนำทาง
    const [isLoggedIn, setIsLoggedIn] = useState(false); // สถานะการเข้าสู่ระบบ

    const handleRegisterClick = () => {
        navigate('/register'); // นำทางไปหน้าลงทะเบียน
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // ป้องกันการรีเฟรชหน้า
        // ดำเนินการตรวจสอบชื่อผู้ใช้และรหัสผ่านที่นี่
        // ถ้าผู้ใช้เข้าสู่ระบบสำเร็จ
        setIsLoggedIn(true); // เปลี่ยนสถานะการเข้าสู่ระบบ
        navigate('/accommodation'); // เปลี่ยนเส้นทางไปยังหน้าที่พัก
    };

    return (
        <div className="login-page">
            <div className="card">
                <h2>เข้าสู่ระบบ</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">ชื่อผู้ใช้:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div>
                        <label htmlFor="password">รหัสผ่าน:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">เข้าสู่ระบบ</button>
                </form>
                <button className="register-button" onClick={handleRegisterClick}>
                    ลงทะเบียน
                </button>
                {isLoggedIn && ( // แสดงไอคอนโปรไฟล์เมื่อผู้ใช้เข้าสู่ระบบ
                    <button className="profile-button" onClick={() => navigate('/profile')}>
                        <FaUserCircle /> {/* ไอคอนโปรไฟล์ */}
                    </button>
                )}
            </div>
        </div>
    );
};

export default LoginPage;
