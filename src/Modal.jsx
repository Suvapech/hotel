import React, { useState } from 'react';
import './Modal.css'; // สไตล์ของ Modal

const Modal = ({ isOpen, onClose, name, price, location, type, images, contact, roomDetails }) => { // เปลี่ยน image เป็น images
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // เก็บสถานะของภาพปัจจุบัน

    if (!isOpen) return null; // ถ้า modal ไม่เปิดไม่ต้อง render

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <div className="image-slider">
                    <button className="prev-button" onClick={previousImage}>&lt;</button>
                    <img src={images[currentImageIndex]} alt={`${name} ${currentImageIndex + 1}`} className="modal-image" />
                    <button className="next-button" onClick={nextImage}>&gt;</button>
                </div>
                <h2 className="modal-title">{name}</h2>
                <p className="modal-price">ราคา : {price}บาท/วัน</p>
                <p className="modal-location">ที่ตั้ง : {location}</p>
                <p className="modal-type">ประเภท : {type}</p>
                <p>รายละเอียดห้องพัก</p>
                <p>ขนาดห้อง: {roomDetails.size} ตารางเมตร</p> {/* ขนาดห้อง */}
                <p>จำนวนเตียง: {roomDetails.beds}</p> {/* จำนวนเตียง */}
                <p>สิ่งอำนวยความสะดวก: {roomDetails.amenities.join(', ')}</p> {/* สิ่งอำนวยความสะดวก */}
            </div>
        </div>
    );
};

export default Modal;
