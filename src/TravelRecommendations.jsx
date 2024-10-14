import React from 'react';
import TravelLocationCard from './TravelLocationCard';
import './styles.css'; // นำเข้าไฟล์ CSS ของคุณ

const TravelRecommendations = () => {
    const travelLocations = [
        {
            name: 'ถนนคนเดินท่าแพ',
            image: 'https://example.com/image-a.jpg',
            coordinates: { lat: 18.7884, lng: 98.9853 } // แทนที่ด้วยพิกัดจริง
        },
        {
            name: 'สถานที่ท่องเที่ยว B',
            image: 'https://example.com/image-b.jpg',
            coordinates: { lat: 18.7833, lng: 98.9869 } // แทนที่ด้วยพิกัดจริง
        },
        {
            name: 'สถานที่ท่องเที่ยว C',
            image: 'https://example.com/image-c.jpg',
            coordinates: { lat: 18.7834, lng: 98.9934 } // แทนที่ด้วยพิกัดจริง
        },
        {
            name: 'ถนนคนเดินท่าแพ',
            image: 'https://example.com/image-a.jpg',
            coordinates: { lat: 18.7884, lng: 98.9853 } // แทนที่ด้วยพิกัดจริง
        },
        {
            name: 'สถานที่ท่องเที่ยว B',
            image: 'https://example.com/image-b.jpg',
            coordinates: { lat: 18.7833, lng: 98.9869 } // แทนที่ด้วยพิกัดจริง
        },
        {
            name: 'สถานที่ท่องเที่ยว C',
            image: 'https://example.com/image-c.jpg',
            coordinates: { lat: 18.7834, lng: 98.9934 } // แทนที่ด้วยพิกัดจริง
        },
        {
            name: 'ถนนคนเดินท่าแพ',
            image: 'https://example.com/image-a.jpg',
            coordinates: { lat: 18.7884, lng: 98.9853 } // แทนที่ด้วยพิกัดจริง
        },
        {
            name: 'สถานที่ท่องเที่ยว B',
            image: 'https://example.com/image-b.jpg',
            coordinates: { lat: 18.7833, lng: 98.9869 } // แทนที่ด้วยพิกัดจริง
        },
        {
            name: 'สถานที่ท่องเที่ยว C',
            image: 'https://example.com/image-c.jpg',
            coordinates: { lat: 18.7834, lng: 98.9934 } // แทนที่ด้วยพิกัดจริง
        },
    ];

    return (
        <div>
            <h4>แนะนำสถานที่ท่องเที่ยว</h4>
            <div className="travel-location-list">
                {travelLocations.map((location, index) => (
                    <TravelLocationCard
                        key={index}
                        name={location.name}
                        image={location.image}
                        coordinates={location.coordinates} // ส่งพิกัดไปยัง TravelLocationCard
                    />
                ))}
            </div>
        </div>
    );
};

export default TravelRecommendations;
