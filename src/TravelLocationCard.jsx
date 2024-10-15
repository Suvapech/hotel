import React from 'react';

const TravelLocationCard = ({ name, image}) => {
    const handleViewOnMap = () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`, '_blank');
    };

    return (
        <div className="travel-location-card">
            <img src={image} alt={name} style={{ width: '100%', height: 'auto' }} />
            <h3>{name}</h3>
            <button onClick={handleViewOnMap}>ดูบนแผนที่</button>
        </div>
    );
};

export default TravelLocationCard;
