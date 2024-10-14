import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AccommodationCard from './AccommodationCard';
import TravelRecommendations from './TravelRecommendations'; // นำเข้าคอมโพเนนต์สำหรับแนะนำสถานที่ท่องเที่ยว
import BookingPage from './Booking';
import Contact from './Contact'; // นำเข้าคอมโพเนนต์ Contact

const App = () => {
    const [isTypeMenuOpen, setIsTypeMenuOpen] = useState(false);
    const [selectedType, setSelectedType] = useState(null);
    const [isAddAccommodationOpen, setIsAddAccommodationOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [newAccommodation, setNewAccommodation] = useState({
        name: '',
        price: '',
        location: '',
        type: '',
        image: null,
    });

    const [accommodations, setAccommodations] = useState([
        {
            name: "Chang Phueak Gate Premier Hotel",
            price: 506 ,
            location: "234/18ถ.มณีนพรัตน์, เมืองเชียงใหม่ 50200 ",
            type: "โรงแรม",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/00/43/9f/b2-chang-phueak-gate.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/00/43/9c/deluxe-premier-room.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/00/43/9b/b2-chang-phueak-gate.jpg?w=1200&h=-1&s=1",],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "เมอเวนพิค สุริวงศ์ โฮเต็ล เชียงใหม่",
            price: 1355 ,
            location: "110 ถ.ช้างคลาน, อ.เมือง, ตำบลช้างคลาน, จังหวัดเชียงใหม่, 50100",
            type: "โรงแรม",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://ak-d.tripcdn.com/images/1mc3c12000bdot1j4A20B_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F",
                "https://ak-d.tripcdn.com/images/0201t120008496199DE3C_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F",
                "https://ak-d.tripcdn.com/images/220h10000000oxsno2317_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F",
                "https://ak-d.tripcdn.com/images/220w0u000000jdck7946B_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "อันยิ่น ล้านนา รีสอร์ต เชียงใหม่",
            price: 2029 ,
            location: "117/18 ม.2 ต.ช้างเผือก, อ.เมือง, ตำบลช้างเผือก, จังหวัดเชียงใหม่, 50300",
            type: "รีสอร์ท",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://ak-d.tripcdn.com/images/1mc1312000bitvksoA721_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F",
                "https://ak-d.tripcdn.com/images/1mc4j12000bjdhy4k16A9_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F",
                "https://ak-d.tripcdn.com/images/1mc6w12000big360t44A1_R_600_400_R5.webp",
                "https://ak-d.tripcdn.com/images/1mc4612000big2pgw51B5_R_600_400_R5.webp",
                "https://ak-d.tripcdn.com/images/1mc2j12000big38g651BA_R_600_400_R5.webp",
                "https://ak-d.tripcdn.com/images/1mc1w12000big404m1C26_R_600_400_R5.webp"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "ปรานต์ แอท คูเมืองบูติคเฮาส์",
            price: 1423 ,
            location: "7 ถนน มรกต ตำบลช้างเผือก อำเภอเมือง, ตำบลช้างเผือก, จังหวัดเชียงใหม่, 50300",
            type: "โฮสเทล",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://ak-d.tripcdn.com/images/0202712000abtwisq6C10_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F",
                "https://ak-d.tripcdn.com/images/1mc4312000ena7zau8A64_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F",
                "https://ak-d.tripcdn.com/images/1mc0612000ena85q6D336_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F",
                "https://ak-d.tripcdn.com/images/1mc3m12000ena2xneA3D5_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "เลอวิลล์ ล้านนา เชียงใหม่เกท โอลด์ทาวน์ โฮเต็ล",
            price: 3146 ,
            location: "8/1 ซ.1 ก. ถ.ราชเชียงแสน, ตำบลหายยา, จังหวัดเชียงใหม่, 50100",
            type: "โฮสเทล",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://ak-d.tripcdn.com/images/1mc3j12000dh5o1ii4EDE_R_600_400_R5.webp",
                "https://ak-d.tripcdn.com/images/1mc0412000bd91iq35C8A_R_600_400_R5.webp",
                "https://ak-d.tripcdn.com/images/1mc3j12000bdo4d9z68FB_R_600_400_R5.webp",
                "https://ak-d.tripcdn.com/images/1mc7312000dh5rphr06C1_R_600_400_R5.webp"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "โรงแรมบีทู รีสอร์ท บูติค แอนด์ บัดเจท",
            price: 459 ,
            location: "142 หมู่ 5 ถนน วงแหวนรอบ2 ตำบลสันผีเสื้อ อำเภอเมือง, ตำบล สันผีเสื้อ, จังหวัดเชียงใหม่, 50300",
            type: "โรงแรม",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://ak-d.tripcdn.com/images/0225712000fkkctewDC58_R_600_400_R5.webp",
                "https://ak-d.tripcdn.com/images/1mc4s12000asz90zpD98B_R_600_400_R5.webp",
                "https://ak-d.tripcdn.com/images/1mc3s12000asz987c0266_R_600_400_R5.webp",
                "https://ak-d.tripcdn.com/images/1mc2m12000asz9cne12A4_R_600_400_R5.webp"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 2, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "โรงแรมเทรเวลลอดจ์ นิมมาน",
            price: 1164 ,
            location: "89 ถ.ชลประทาน ต.สเทพ 4ุเทพเื เทพ, ตำบลสุเทพ, จังหวัดเชียงใหม่, 50200",
            type: "โรงแรม",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://ak-d.tripcdn.com/images/1mc3u12000bf6afea5925_R_600_400_R5.webp",
                "https://ak-d.tripcdn.com/images/1mc4612000bf662595F2E_R_600_400_R5.webp",
                "https://ak-d.tripcdn.com/images/0221r12000bsczpb85457_R_600_400_R5.webp",
                "https://ak-d.tripcdn.com/images/0582l12000d2h13nnF3F5_R_600_400_R5.webp"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "บีทู พรีเมียร์ โฮเทล แอนด์ รีสอร์ท",
            price: 495 ,
            location: "163 ถ.เลียบคลองชลประทาน ต.สุเทพ, ตำบลสุเทพ, จังหวัดเชียงใหม่, 50200",
            type: "โรงแรม",type:"รีสอร์ท",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://ak-d.tripcdn.com/images/1mc0612000f5lpl20A709_R_600_400_R5.webp",
                "https://ak-d.tripcdn.com/images/1mc1012000f5loy6l5C3E_R_600_400_R5.webp",
                "https://ak-d.tripcdn.com/images/1mc3712000f5lqpr1F00C_R_600_400_R5.webp",
                "https://ak-d.tripcdn.com/images/1mc7012000f5lqbt740C8_R_600_400_R5.webp"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "BaanBooLoo Village- SHA Plus",
            price: 16200 ,
            location: " Soi 3Kor, Intawaroroj 3 Road, Sriphum, Muang, Si Phum, 50200 เชียงใหม่, ไทย",
            type: "วิลล่า",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/333506770.jpg?k=3f8f079108443405ad9b478b426dd61e775afe409a22c505b3556d9a9ac098fc&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/228825009.jpg?k=b27e71b61f9bd46e4e4f512ab05f13e91acad80d4ec6c422bb951b2f55313a5b&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/571326308.jpg?k=489494be4e3e947da54bb009b4365a51630c5a9b1160ff765bdc31294f0c4fc1&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/200329087.jpg?k=bd2614b21b40dfdbfd8adf9bbfddec10c4e45f23d8fa80d1f65cff59451d086e&o=&hp=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "Nimman Villa 17 Chiangmai - SHA PLUS",
            price: 16200 ,
            location: "  29 ถนนนิมมานเหมินทร์ ซอย 17 ต.สุเทพ อ.เมือง, 50200 เชียงใหม่",
            type: "โรงแรม",type:"รีสอร์ท",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/333506770.jpg?k=3f8f079108443405ad9b478b426dd61e775afe409a22c505b3556d9a9ac098fc&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/228825009.jpg?k=b27e71b61f9bd46e4e4f512ab05f13e91acad80d4ec6c422bb951b2f55313a5b&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/571326308.jpg?k=489494be4e3e947da54bb009b4365a51630c5a9b1160ff765bdc31294f0c4fc1&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/200329087.jpg?k=bd2614b21b40dfdbfd8adf9bbfddec10c4e45f23d8fa80d1f65cff59451d086e&o=&hp=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
    ]);

    const handleTypeButtonClick = () => {
        setIsTypeMenuOpen(!isTypeMenuOpen);
    };

    const handleTypeSelect = (type) => {
        setSelectedType(type === 'ทั้งหมด' ? null : type);
    };

    const handleAddAccommodationClick = () => {
        setIsAddAccommodationOpen(!isAddAccommodationOpen);
    };

    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleHotelButtonClick = () => {
        handleTypeSelect('ทั้งหมด');
    };

    return (
        <Router>
            <div className="App">
                <div className="navbar">
                    <div className="logo">Aloha.com</div>
                    <div className="menu">
                        <Link to="/" onClick={handleHotelButtonClick}>โรงแรม</Link>
                        <Link to="/travel">สถานที่ท่องเที่ยว <span className="new-tag">ใหม่</span></Link>
                        <Link to="#">รถเช่า</Link>
                        <Link to="/contact">ติดต่อเรา</Link> {/* เพิ่มลิงก์ไปยังหน้าติดต่อ */}
                        <div className="type-menu-container">
                            <button className="accommodation-type-button" onClick={handleTypeButtonClick}>
                                ประเภทที่พัก
                            </button>
                            {isTypeMenuOpen && (
                                <div className="type-menu">
                                    <button onClick={() => handleTypeSelect('ทั้งหมด')}>ทั้งหมด</button>
                                    <button onClick={() => handleTypeSelect('โรงแรม')}>โรงแรม</button>
                                    <button onClick={() => handleTypeSelect('รีสอร์ท')}>รีสอร์ท</button>
                                    <button onClick={() => handleTypeSelect('บ้านพัก')}>บ้านพัก</button>
                                    <button onClick={() => handleTypeSelect('วิลล่า')}>วิลล่า</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="right-menu">
                        <button onClick={handleSearchToggle}>
                            ค้นหาที่พัก
                        </button>
                        {isSearchOpen && (
                            <input
                                type="text"
                                placeholder="ค้นหาชื่อที่พัก"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="search-input"
                            />
                        )}
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={
                        <div>
                            <div className="welcome-message">
                                ยินดีต้อนรับสู่ Aloha
                            </div>
                            <div className="accommodation-list">
                                {accommodations
                                    .filter(accommodation => !selectedType || accommodation.type === selectedType)
                                    .filter(accommodation => accommodation.name.toLowerCase().includes(searchQuery.toLowerCase()))
                                    .map((accommodation, index) => (
                                        <AccommodationCard
                                            key={index}
                                            name={accommodation.name}
                                            price={accommodation.price}
                                            location={accommodation.location}
                                            type={accommodation.type}
                                            images={accommodation.images}
                                            roomDetails={accommodation.roomDetails} // ส่ง roomDetails
                                        />
                                    ))}
                            </div>
                        </div>
                    } />
                    <Route path="/travel" element={<TravelRecommendations />} />
                    <Route path="/booking" element={<BookingPage />} />
                    <Route path="/contact" element={<Contact />} /> {/* ปรับเส้นทางไปยังหน้าติดต่อ */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
