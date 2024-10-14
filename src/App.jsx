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
            name: "มหาวิทยาลัยแม่โจ้",
            price: 1500,
            location: "มหาวิทยาลัยแม่โจ้",
            type: "โรงแรม",
            image: "https://www.ktc.co.th/pub/media/Travel-Story/Thailand/best-hotels-in-pattaya/best-hotels-in-pattaya-1.webp",
            contact: "012-345-6789",
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "มหาวิทยาลัยแม่โจ้",
            price: 1500,
            location: "มหาวิทยาลัยแม่โจ้",
            type: "โรงแรม",
            image: "https://www.ktc.co.th/pub/media/Travel-Story/Thailand/best-hotels-in-pattaya/best-hotels-in-pattaya-1.webp",
            contact: "012-345-6789",
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "มหาวิทยาลัยแม่โจ้",
            price: 1500,
            location: "มหาวิทยาลัยแม่โจ้",
            type: "โรงแรม",
            image: "https://www.ktc.co.th/pub/media/Travel-Story/Thailand/best-hotels-in-pattaya/best-hotels-in-pattaya-1.webp",
            contact: "012-345-6789",
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "มหาวิทยาลัยแม่โจ้",
            price: 1500,
            location: "มหาวิทยาลัยแม่โจ้",
            type: "โรงแรม",
            image: "https://www.ktc.co.th/pub/media/Travel-Story/Thailand/best-hotels-in-pattaya/best-hotels-in-pattaya-1.webp",
            contact: "012-345-6789",
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "มหาวิทยาลัยแม่โจ้",
            price: 1500,
            location: "มหาวิทยาลัยแม่โจ้",
            type: "โรงแรม",
            image: "https://www.ktc.co.th/pub/media/Travel-Story/Thailand/best-hotels-in-pattaya/best-hotels-in-pattaya-1.webp",
            contact: "012-345-6789",
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "มหาวิทยาลัยแม่โจ้",
            price: 1500,
            location: "มหาวิทยาลัยแม่โจ้",
            type: "โรงแรม",
            image: "https://www.ktc.co.th/pub/media/Travel-Story/Thailand/best-hotels-in-pattaya/best-hotels-in-pattaya-1.webp",
            contact: "012-345-6789",
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "มหาวิทยาลัยแม่โจ้",
            price: 1500,
            location: "มหาวิทยาลัยแม่โจ้",
            type: "โรงแรม",
            image: "https://www.ktc.co.th/pub/media/Travel-Story/Thailand/best-hotels-in-pattaya/best-hotels-in-pattaya-1.webp",
            contact: "012-345-6789",
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "มหาวิทยาลัยแม่โจ้",
            price: 1500,
            location: "มหาวิทยาลัยแม่โจ้",
            type: "โรงแรม",
            image: "https://www.ktc.co.th/pub/media/Travel-Story/Thailand/best-hotels-in-pattaya/best-hotels-in-pattaya-1.webp",
            contact: "012-345-6789",
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "มหาวิทยาลัยแม่โจ้",
            price: 1500,
            location: "มหาวิทยาลัยแม่โจ้",
            type: "โรงแรม",
            image: "https://www.ktc.co.th/pub/media/Travel-Story/Thailand/best-hotels-in-pattaya/best-hotels-in-pattaya-1.webp",
            contact: "012-345-6789",
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "มหาวิทยาลัยแม่โจ้",
            price: 1500,
            location: "มหาวิทยาลัยแม่โจ้",
            type: "โรงแรม",
            image: "https://www.ktc.co.th/pub/media/Travel-Story/Thailand/best-hotels-in-pattaya/best-hotels-in-pattaya-1.webp",
            contact: "012-345-6789",
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
                                    <button onClick={() => handleTypeSelect('โฮสเทล')}>โฮสเทล</button>
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
                                            image={accommodation.image}
                                            contact={accommodation.contact}
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
