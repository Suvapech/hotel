import React from 'react';
import './Modal.css'; // สไตล์ของ Modal

const Modal = ({ isOpen, onClose, name, price, location, type, image, contact, roomDetails }) => { // เพิ่ม roomDetails ที่นี่
    if (!isOpen) return null; // ถ้า modal ไม่เปิดไม่ต้อง render

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <img src={image} alt={name} className="modal-image" />
                <h2 className="modal-title">{name}</h2>
                <p className="modal-price">ราคา : {price} บาท</p>
                <p className="modal-location">ที่ตั้ง : {location}</p>
                <p className="modal-type">ประเภท : {type}</p>
                <p className="modal-contact">ช่องทางการติดต่อ: {contact}</p> {/* แสดงช่องทางการติดต่อ */}
                <p>รายละเอียดห้องพัก:</p>
                <p>ขนาดห้อง: {roomDetails.size} ตารางเมตร</p> {/* ขนาดห้อง */}
                <p>จำนวนเตียง: {roomDetails.beds}</p> {/* จำนวนเตียง */}
                <p>สิ่งอำนวยความสะดวก: {roomDetails.amenities.join(', ')}</p> {/* สิ่งอำนวยความสะดวก */}
            </div>
        </div>
    );
};

export default Modal;
