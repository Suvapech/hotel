import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AccommodationCard.css';
import Modal from './Modal';

const AccommodationCard = ({ name, price, location, type, images, roomDetails }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const openMap = () => {
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;
        window.open(mapUrl, '_blank');
    };

    const handleBooking = (e) => {
        e.stopPropagation();
        navigate('/booking', { state: { name, price, location, type, images } });
    };

    return (
        <div>
            <div className="accommodation-button" onClick={toggleModal}>
                {/* ตรวจสอบว่า images มีค่าและมีอย่างน้อย 1 ภาพ */}
                {images && images.length > 0 ? (
                    <img src={images[0]} alt={name} className="accommodation-image" />
                ) : (
                    <img src="path/to/default-image.jpg" alt="default" className="accommodation-image" /> // ใช้ภาพเริ่มต้นถ้าไม่มีภาพ
                )}
                <h2 className="accommodation-name">{name}</h2>
                <h2 className="accommodation-price">{price}บาท/วัน</h2>
                <div className="button-container">
                    <button className="book-button" onClick={handleBooking}>จอง</button>
                </div>
                <div className="button-container">
                    <button className="map-button" onClick={openMap}>พิกัดที่พัก</button>
                </div>
            </div>
            <Modal 
                isOpen={isModalOpen} 
                onClose={toggleModal} 
                name={name} 
                price={price} 
                location={location} 
                type={type} 
                images={images} 
                roomDetails={roomDetails} 
            />
        </div>
    );
};

export default AccommodationCard;
