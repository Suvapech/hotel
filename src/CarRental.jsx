import React from 'react';
import TravelLocationCard from './TravelLocationCard';
import './styles.css'; // นำเข้าไฟล์ CSS 

const TravelRecommendations = () => {
    const travelLocations = [
        {
            name: 'บริษัท เฮียหมาคาร์เร้นท์',
            image: 'https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/449392179_1017582550372690_1198970276584673956_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=xEZSAUWlOgoQ7kNvgH9hQqc&_nc_ht=scontent.fcnx4-1.fna&_nc_gid=AI0v99_g5UAsk9RYcPBKnuN&oh=00_AYDAWCkUPiZb1FYmf2hIJomzFzrYVRonsJtc9AtvBb3MSw&oe=6713D9DB',
        },
        {
            name: 'Nan789carrent',
            image: 'https://impro.usercontent.one/appid/oneComWsb/domain/nan789carrent.com/media/nan789carrent.com/onewebmedia/S__6627834___serialized1.jpg?etag=%2297ea6-6429a06e%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1264%2B712&quality=85',
        },
        {
            name: 'Sbuy Carrent',
            image: 'https://www.sbuycarrent.com/wp-content/uploads/2020/11/logo.jpg',
        },
        {
            name: 'Double Clean & Car Rent',
            image: 'https://img.wongnai.com/p/800x0/2024/05/03/295098a0975c460291193672ddcf7f01.jpg',
        },
        {
            name: 'Anny Carrent Chiangmai',
            image: 'https://img.wongnai.com/p/800x0/2024/05/09/2fbf90f5074f49cb88f42d4ff7730c35.jpg',
        },
        {
            name: 'aomcarrent',
            image: 'https://img.wongnai.com/p/800x0/2024/05/03/983f90f4eeee492ba8cfbe00edbb9ad6.jpg',

        },
        {
            name: 'BT Carrent',
            image: 'https://img.wongnai.com/p/800x0/2024/05/03/5b28cd2c4a534ff3809fd71d51b080ca.jpg',
        },
        {
            name: 'Cargo',
            image: 'https://img.wongnai.com/p/800x0/2024/05/03/93dc44b30d61489fa0faecc3f49e7938.jpg',
        },
    ];

    return (
        <div>
            <h4>แนะนำสถานที่เช่ารถ</h4>
            <div className="travel-location-list">
                {travelLocations.map((location, index) => (
                    <TravelLocationCard
                        key={index}
                        name={location.name}
                        image={location.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default TravelRecommendations;
