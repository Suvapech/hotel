import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AccommodationCard.css';
import Modal from './Modal';

const AccommodationCard = ({ name, price, location, type, image, contact, roomDetails }) => { // เพิ่ม roomDetails ที่นี่
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const openMap = () => {
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        window.open(mapUrl, '_blank');
    };

    const handleBooking = (e) => {
        e.stopPropagation(); // หยุดการแพร่กระจายเหตุการณ์
        navigate('/booking', { state: { name, price, location, type, image } });
    };    

    return (
        <div>
            <button className="accommodation-button" onClick={toggleModal}>
                <img src={image} alt={name} className="accommodation-image" />
                <h2 className="accommodation-name">{name}</h2>
                <h2 className="accommodation-price">฿{price}</h2>
                <button className="book-button" onClick={handleBooking}>จอง</button>
                <br />
                <button className="map-button" onClick={openMap}>พิกัดที่พัก</button>
            </button>
            <Modal 
                isOpen={isModalOpen} 
                onClose={toggleModal} 
                name={name} 
                price={price} 
                location={location} 
                type={type} 
                image={image} 
                contact={contact} // ส่งข้อมูลช่องทางการติดต่อไปยัง Modal
                roomDetails={roomDetails} // ส่ง roomDetails ไปยัง Modal
            />
        </div>
    );
};

export default AccommodationCard;