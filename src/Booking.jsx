import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Booking.css'; // นำเข้า CSS

const BookingPage = () => {
    const location = useLocation();
    const { name, price, location: accommodationLocation, type, images } = location.state || {};
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [guestCount, setGuestCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [slipImage, setSlipImage] = useState(null);
    const [guestName, setGuestName] = useState('');

    if (!location.state) {
        return <div>ไม่พบข้อมูลการจอง</div>;
    }

    const calculateTotalPrice = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const nights = Math.max((end - start) / (1000 * 60 * 60 * 24), 0); // คำนวณจำนวนคืน
        let additionalCharge = 0;

        // เพิ่มราคา 500 บาทต่อคนสำหรับผู้เข้าพักที่เกิน 3 คน
        if (guestCount > 3) {
            additionalCharge = (guestCount - 3) * 500;
        }

        setTotalPrice(nights * price + additionalCharge); // คำนวณราคารวม
        setShowModal(true); // เปิด modal
    };

    const handleConfirmBooking = async () => {
        if (!slipImage) {
            alert("กรุณาแนบภาพสลิปการโอน");
            return;
        }
    
        const formData = new FormData();
        formData.append('slip', slipImage);
        formData.append('totalPrice', totalPrice); // แนบยอดเงินที่ต้องชำระไปด้วย
    
        try {
            // ส่งข้อมูลไปยังเซิร์ฟเวอร์เพื่อตรวจสอบสลิปและยอดเงิน
            const response = await fetch('YOUR_SERVER_ENDPOINT', {
                method: 'POST',
                body: formData,
            });
    
            const result = await response.json();
    
            if (result.success) {
                alert("การจองเสร็จสมบูรณ์!"); // หรือทำการแจ้งเตือนเมื่อจองเสร็จ
                setShowModal(false); // ปิด modal
                // สามารถทำการนำทางไปยังหน้าถัดไปหรือทำการปรับปรุงสถานะการจองที่นี่ได้
            } else {
                alert("ไม่สามารถยืนยันการจองได้: " + result.message);
            }
        } catch (error) {
            console.error("เกิดข้อผิดพลาดในการยืนยันการจอง:", error);
            alert("เกิดข้อผิดพลาดในการยืนยันการจอง กรุณาลองใหม่อีกครั้ง");
        }
    };
    

    return (
        <div className="booking-container">
            <h1>จองที่พัก</h1>
            <div className="booking-details">
                {images && images.length > 0 ? (
                    <img src={images[0]} alt={name} className="booking-image" />
                ) : (
                    <img src="path/to/default-image.jpg" alt="default" className="booking-image" />
                )}
                <h2 className="booking-name">{name}</h2>
                <h2 className="booking-price">฿{price}</h2>
                <p className="booking-location">สถานที่: {accommodationLocation}</p>
                <p className="booking-type">ประเภท: {type}</p>
            </div>

            <div className="booking-form">
                <label>
                    วันที่เข้าพัก:
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </label>
                <label>
                    วันที่ออก:
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </label>
                <label>
                    จำนวนผู้เข้าพัก:
                    <input type="number" min="1" value={guestCount} onChange={(e) => setGuestCount(e.target.value)} />
                </label>
                <label>
                    ชื่อผู้เข้าพัก:
                    <input
                        type="text"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                    />
                </label>
                <button className="submit-booking" onClick={calculateTotalPrice}>
                    ส่งการจอง
                </button>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <h2>รายละเอียดการจอง</h2>
                        <p>จำนวนคืน: {Math.max((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24), 0)} คืน</p>
                        <p>จำนวนผู้เข้าพัก: {guestCount} คน</p>
                        <h3>ราคารวม: ฿{totalPrice}</h3>

                        <label>
                            แนบภาพสลิปการโอน:
                            <input type="file" accept="image/*" onChange={(e) => setSlipImage(e.target.files[0])} />
                        </label>

                        <button className="confirm-button" onClick={handleConfirmBooking}>ยืนยันการจอง</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingPage;
