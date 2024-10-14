import React from 'react';
import { useLocation } from 'react-router-dom';
import './Booking.css'; // นำเข้า CSS

const BookingPage = () => {
    const location = useLocation();
    const { name, price, location: accommodationLocation, type, images } = location.state || {};

    if (!location.state) {
        return <div>ไม่พบข้อมูลการจอง</div>;
    }

    return (
        <div className="booking-container">
            <h1>จองที่พัก</h1>
            <div className="booking-details">
                {/* ตรวจสอบว่า images มีค่าและมีอย่างน้อย 1 ภาพ */}
                {images && images.length > 0 ? (
                    <img src={images[0]} alt={name} className="booking-image" />
                ) : (
                    <img src="path/to/default-image.jpg" alt="default" className="booking-image" /> // ใช้ภาพเริ่มต้นถ้าไม่มีภาพ
                )}
                <h2 className="booking-name">{name}</h2>
                <h2 className="booking-price">฿{price}</h2>
                <p className="booking-location">สถานที่: {accommodationLocation}</p>
                <p className="booking-type">ประเภท: {type}</p>
            </div>

            <div className="booking-form">
                <label>
                    วันที่เข้าพัก:
                    <input type="date" />
                </label>
                <label>
                    วันที่ออก:
                    <input type="date" />
                </label>
                <label>
                    จำนวนผู้เข้าพัก:
                    <input type="number" min="1" />
                </label>
                <button className="submit-booking">ส่งการจอง</button>
            </div>
        </div>
    );
};

export default BookingPage;
