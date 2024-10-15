import React from 'react';
import TravelLocationCard from './TravelLocationCard';
import './styles.css'; // นำเข้าไฟล์ CSS ของคุณ

const TravelRecommendations = () => {
    const travelLocations = [
        {
            name: 'ถนนคนเดินท่าแพ',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/56zA2SX1-image23-1024x683.jpg?tr=dpr-2,w-675',
        },
        {
            name: 'อุทยานแห่งชาติดอยอินทนนท์',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/image28-1024x684.jpg?tr=dpr-2,w-675',
        },
        {
            name: 'ม่อนแจ่ม',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/image21-1024x684.jpg?tr=dpr-2,w-675',
        },
        {
            name: 'แกรนด์แคนยอน',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/gUVCZ9kB-image24-1024x683.jpg?tr=dpr-2,w-675',
        },
        {
            name: 'วัดพระธาตุดอยสุเทพ',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/image4-1024x599.jpg?tr=dpr-2,w-675',
        },
        {
            name: 'ดอยอ่างขาง',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/M7ACyMQU-image35-1024x683.jpg?tr=dpr-2,w-675',

        },
        {
            name: 'สวนสัตว์เชียงใหม่',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/ks4hK8uG-image11.png?tr=dpr-2,w-675',
        },
        {
            name: 'วันนิมมาน',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/wxXtAHBw-image19-1024x683.jpg?tr=dpr-2,w-675',
        },
        {
            name: 'แม่กำปอง',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/4WnlrLFw-image27-1024x683.jpg?tr=dpr-2,w-675',
        },
        {
            name: 'สวนพฤกษศาสตร์สมเด็จพระนางเจ้าสิริกิติ์',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/image17-1024x680.jpg?tr=dpr-2,w-675',
        },
        {
            name: 'คลองแม่ข่า',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/RQOqoYDs-image12.png?tr=dpr-2,w-675',
        },
        {
            name: 'วัดพระธาตุดอยคำ',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/wlIc9HYP-image6.png?tr=dpr-2,w-675',
        },
        {
            name: 'ป่าบงเปียง',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/sUw0WvJX-image15.png?tr=dpr-2,w-675',
        },
        {
            name: 'วัดเจดีย์หลวงวรวิหาร',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/H8nxzzZS-image16.png?tr=dpr-2,w-675',
        },
        {
            name: 'เส้นทางศึกษาธรรมชาติกิ่วแม่ปาน',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/aRQnbMY9-image5.png?tr=dpr-2,w-675',
        },
        {
            name: 'เส้นทางศึกษาธรรมชาติน้ำตกผาดอกเสี้ยว',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/sEQtpPw1-image25.png?tr=dpr-2,w-675',
        },
        {
            name: 'วัดสวนดอก',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/6FbBZ8r6-image13.png?tr=dpr-2,w-675',
        },
        {
            name: 'เก๊าไม้ล้านนารีสอร์ท',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/image7-1024x692.png?tr=dpr-2,w-675',
        },
        {
            name: 'ดอยหลวงเชียงดาว',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/Wsn9113I-image32.png?tr=dpr-2,w-675',
        },
        {
            name: 'วัดต้นแกว๋น',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/B4Bf1Vx8-image1.png?tr=dpr-2,w-675',
        },
        {
            name: 'วัดพระสิงห์วรมหาวิหาร',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/M62Cq0yo-image26.png?tr=dpr-2,w-675',
        },
        {
            name: 'วัดเจดีย์เจ็ดยอด',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/T6yKCaed-image18.png?tr=dpr-2,w-675',
        },
        {
            name: 'วัดอุโมงค์',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/k56yosq8-image33-1024x683.png?tr=dpr-2,w-675',
        },
        {
            name: 'ศูนย์วิจัยเกษตรหลวงเชียงใหม่ (ขุนวาง)',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/WlR5py3Z-image10.png?tr=dpr-2,w-675',
        },
        {
            name: 'ตลาดวโรรส',
            image: 'https://ik.imagekit.io/tvlk/blog/2024/04/025xgJAb-image3.png?tr=dpr-2,w-675',
        },
        {
            name: 'ดอยอินทนนท์',
            image: 'https://cms.dmpcdn.com/travel/2022/11/11/3a307b20-61a4-11ed-909d-855455af1869_webp_original.jpg',
        },
        {
            name: 'โครงการบ้านข้างวัด',
            image: 'https://cms.dmpcdn.com/travel/2022/11/11/17192860-61ab-11ed-b909-a177dde090ad_webp_original.jpg',
        },
        {
            name: 'ปางช้างแม่สา',
            image: 'https://cms.dmpcdn.com/travel/2022/11/11/cf29af20-61af-11ed-b66f-05023fcf70cc_webp_original.jpg',
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
                    />
                ))}
            </div>
        </div>
    );
};

export default TravelRecommendations;
