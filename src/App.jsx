import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AccommodationCard from './AccommodationCard';
import TravelRecommendations from './TravelRecommendations'; // นำเข้าคอมโพเนนต์สำหรับแนะนำสถานที่ท่องเที่ยว
import BookingPage from './Booking';
import Contact from './Contact'; // นำเข้าคอมโพเนนต์ Contact
import CarRental from './CarRental';

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
            type:"รีสอร์ท",
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
            price: 22500 ,
            location: "  29 ถนนนิมมานเหมินทร์ ซอย 17 ต.สุเทพ อ.เมือง, 50200 เชียงใหม่",
            type: "วิลล่า",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/491574349.jpg?k=b41d8133d8b283074651ece812fe1a46875429b89e7a392144a1cf6af03b4bbc&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/376257393.jpg?k=fda65bac5cf481a92fccb8ed40f3584b3a1baa4e659ba63a7050c53091f9e6ad&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/542178143.jpg?k=7df024567ab5fff66b7d41bacaca9c64e119e4dc62874ab14cc6a64c6704368c&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/238698498.jpg?k=ed8e4984d113a87d9b971e72b51085c8c44cc802232ff50d4633006830ab848f&o=&hp=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "Tolani Nimman Villa Chiang Mai",
            price: 14841 ,
            location: "  36/6-7 Lane 11 Nimmanhaemin Rd. T.Suthep A.Muang , 50000 เชียงใหม่",
            type: "วิลล่า",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/51103444.jpg?k=5387009481ddb4a48005785f2d95122f8df23c56b0211a8adaf27cb35dcbcb2b&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/526846656.jpg?k=e672627845348b2bbaf52eda6af8c106338ab35959f592b7bfc56e8ebcf1978d&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/54273656.jpg?k=64df05c39bfbcb2961b7ea890b88433bf1e79197634bb320c0e9faad7b9645e2&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/55007721.jpg?k=420f11d8fd59661a2ca8a7261dfa6cb7631d3073bee387ab9319ecaa513a77e5&o=&hp=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "Tolani Northgate Villa Chiang Mai",
            price: 13770 ,
            location: " 1/10 Soi 2 Manee-Nopparat Road, Tambon Sripoom, Muang, Si Phum, 50000 เชียงใหม่",
            type: "วิลล่า",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/495063711.jpg?k=944d503b8f7cbb1c80f5e9e31658d1cbc51280d773c4b02ccb32777ea97a43b7&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/280175749.jpg?k=1364644bfee6f9369f296abb36fccda1174694df40face50663c620e76629881&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/503298213.jpg?k=7879dd1d5b84e7cb02465c592f39cc93804114e217f50fbb0b1fb348e37e558b&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/495062914.jpg?k=6e60285740773a91c2cb00b805cd08e3a8f0c2e78b743331d8a6e5e3a56783cf&o=&hp=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "Villa 89 Nimman Chiang Mai",
            price: 21185 ,
            location: " 20, Soi 9, Sirimongklajan Road, Suthep, Muang, 50200 เชียงใหม่",
            type: "วิลล่า",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/433526962.jpg?k=cc3f5090204867c4885f69522749cb084ed0e878bb5fc07b42a45f1f376766e5&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/122734330.jpg?k=ce192e3e9f871f2d4d0a81aa00e44d236dbeef632fdf80c2746397704f581f41&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/122734312.jpg?k=0c7d157951a5e48b5a422f84b80b24350624be38fd18e0f76ddf4266a6adfb82&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/433527286.jpg?k=649a9956048c027d50e958468b8755c6a83f286d7122e4a93683feb9deac9859&o=&hp=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "The Corner's unique house",
            price: 4500 ,
            location: "4/9 Mahidol road soi 1 Haiya district, หายยา, 50100 เชียงใหม่",
            type: "วิลล่า",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/84096028.jpg?k=96806155b76a0fd97ce1f16bde8694e7d239bc4f707a260c9145aa11dbf5f28e&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/166800083.jpg?k=1866010a1b55a6afc2f7530f845c47db3be06a03b80e6fe43cdd5750050cdb07&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/95810426.jpg?k=ce27a431ce2015015b25bc65ed5692a42996364369bf3bf5fbece1ca16855da1&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/166800092.jpg?k=dfc90a4a827bab444df1957188dc5d67a990111b685f147e4bc2be0978b7055e&o=&hp=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "Starry Night Villa by Zhang Bin",
            price: 7000 ,
            location: " 188/33 Moo 8, House and view 3, Tonpao, Sankamphaeng, 50130 เชียงใหม่",
            type: "วิลล่า",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/144287472.jpg?k=dfb4c220b083b619faba770670eaafc55c8d4dd1d8d32c048879d7a4088d349e&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/144471664.jpg?k=1d628a3fb512585fdda2ca34e4c5151405c196510aefe331e005e527bbab09a2&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/144470675.jpg?k=dbd1b7902bed8f060cd3e478f8b748b7c2393c4aaafe579229b37485e6fb3271&o=&hp=1",
                "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/144470631.jpg?k=84133f3fa5ed5091403e60bfaceb99cb8b306a8a9352a1de3d1be38c8af298ca&o=&hp=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "โรงแรมบีทู ริเวอรด์ ไซด์ โคโลเนียล",
            price: 495 ,
            location: " 9 ถนน เจริญราษฎร์ ตำบลวัดเกต อำเภอเมือง, ตำบลช้างม่อย, จังหวัดเชียงใหม่",
            type: "โรงแรม",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://ak-d.tripcdn.com/images/1mc1312000aszm01350E5_R_960_660_R5_D.jpg",
                "https://ak-d.tripcdn.com/images/1mc1l12000aszlxue9AAA_R_339_206_R5_D.jpg",
                "https://ak-d.tripcdn.com/images/1mc3r12000aszmm3wF876_R_339_206_R5_D.jpg",
                "https://ak-d.tripcdn.com/images/0223u12000alwednq2220_R_339_206_R5_D.jpg"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "โรงแรมแชงกรีลา เชียงใหม่",
            price: 4700,
            location: " 89/8 ถ. ช้างคลาน, เมืองเชียงใหม่ ",
            type: "โรงแรม",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a6/b5/cf/view-from-room.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a6/af/81/deluxe-pool-view-twin.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a6/b0/8b/presidential-suite.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a6/af/b7/deluxe-terrace-king.jpg?w=1200&h=-1&s=1"],
            roomDetails: {   // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "Away Chiang Mai Thapae Resort",
            price: 3596,
            location: " 9 Thapae Soi 5, Thapae Road, Chang Moi, เมืองเชียงใหม่ ",
            type: "รีสอร์ท",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/6c/4c/a5/caption.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/6c/4c/b5/caption.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/bb/2e/c2/caption.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/a8/92/48/away-chiang-mai-thapae.jpg?w=1200&h=-1&s=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "ณ นิรันดร์ โรแมนติก บูทีค รีสอร์ท",
            price: 3980,
            location: " 1/1 ซอย 9 ถนนเจริญประเทศ ตำบล ช้างคลาน, เมืองเชียงใหม่ ",
            type: "รีสอร์ท",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/7b/6e/53/getlstd-property-photo.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/6e/47/a2/harmonious-british-indian.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/6e/47/e2/pool-v18683912.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/6e/48/39/grounds-v18683997.jpg?w=1200&h=-1&s=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "โรงแรมแทมมารีน วิลเลจ",
            price: 5223,
            location: " 50/1 ถ. ราชดำเนิน ต. ศรีภูมิ, เมืองเชียงใหม่ ",
            type: "โรงแรม",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/dd/35/c6/tamarind-village-courtyard.jpg?w=1000&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/dd/35/d8/the-village-spa.jpg?w=600&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/ee/02/9c/spa--v3773945.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/ee/03/2e/lanna-deluxe-room--v3773952.jpg?w=1200&h=-1&s=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "Khum Phaya Resort & Spa",
            price: 3121,
            location: " 137 หมู่ 5 ถ. เชียงใหม่ - ลำปาง ตำบลหนองป่าครั่ง, เมืองเชียงใหม่ ",
            type: "รีสอร์ท",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/45/32/17/khum-phaya-resort-spa.jpg?w=1100&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/8d/f6/ec/lanna-villa.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/c6/6d/a8/khum-phaya-resort-spa.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/8e/11/9d/khum-phaya-resort-spa.jpg?w=1200&h=-1&s=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
                        {
            name: "โรงแรมอโมรา ท่าแพ",
            price: 1175,
            location: " 22 Chaiyapooum Road, เมืองเชียงใหม่ 50300 ไทย ",
            type: "รีสอร์ท",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/f7/da/09/amora-resort-tapae-chiangmai.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/8d/f6/ec/lanna-villa.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/f7/da/b2/amora-resort-tapae-chiangmai.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/7e/d7/12/caption.jpg?w=1200&h=-1&s=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },
        },
        {
            name: "รติลานนา ริเวอร์ไซด์ สปา รีสอร์ท",
            price: 6504,
            location: " 33 ถนนช้างคลาน, Chang Khlan, เมืองเชียงใหม่ ",
            type: "รีสอร์ท",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/48/bd/09/swimming-pool.jpg?w=800&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/04/7c/f9/ratilanna-riverside-spa.jpg?w=800&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/62/da/79/our-riverside-lawn-is.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/04/7c/a2/ratilanna-riverside-spa.jpg?w=800&h=-1&s=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },},
	      {
            name: "โอเรียนเต็ล สยาม รีสอร์ท",
            price: 2666,
            location: " 40/1 หมู่ที่ 2 ตำบลท่าศาลา อ.เมือง, เมืองเชียงใหม่ ",
            type: "รีสอร์ท",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/df/34/d6/lotus-classic-3-bedroom.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/df/31/b8/mini-family-deluxe-villa.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/df/31/e1/mini-family-deluxe-villa.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/df/2f/31/mini-family-deluxe-villa.jpg?w=1200&h=-1&s=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },},
            {
                name: "โรงแรมราชมรรคา",
                price: 7487,
                location: " 6 ซอย 9 ถนนราชมรรคา ต. พระสิงห์, เมืองเชียงใหม่ ",
                type: "โรงแรม",
                images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/73/4b/00/suite-bedroom.jpg?w=1200&h=-1&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/73/47/55/pool.jpg?w=600&h=-1&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/73/47/4b/gallery.jpg?w=600&h=-1&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/73/4a/e3/pool-views.jpg?w=1200&h=-1&s=1"],
                roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                    size: 30, // ขนาดห้อง
                    beds: 1, // จำนวนเตียง
                    amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
                },},
                                     {
                name: "ยันตรศรี รีสอร์ท",
                price: 1791,
                location: " 24/17 Nimmanhaemin Road Soi 6 Tambol Suthep, เมืองเชียงใหม่ ",
                type: "รีสอร์ท",
                images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/51/54/f2/yantarasri-resort.jpg?w=1200&h=-1&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/51/54/ea/yantarasri-resort.jpg?w=1200&h=-1&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/51/52/84/bedroom-superior-twin.jpg?w=1200&h=-1&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/51/52/71/bathroom-superior-twin.jpg?w=1200&h=-1&s=1"],
                roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                    size: 30, // ขนาดห้อง
                    beds: 1, // จำนวนเตียง
                    amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
                },},
                {
                    name: "โรงแรมฟลอร่า ครีค, เชียงใหม่",
                    price: 2738,
                    location: " 90 moo.4, Bangpong, เมืองเชียงใหม่ 50230 ไทย ",
                    type: "โรงแรม",
                    images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/0e/bc/b4/flora-creek.jpg?w=1200&h=-1&s=1",
                        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/0e/c6/2c/deluxe-plantation.jpg?w=1200&h=-1&s=1",
                        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/0e/c0/48/deluxe-plantation-balcony.jpg?w=1200&h=-1&s=1",
                        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/11/a8/fc/swimming-pool.jpg?w=1200&h=-1&s=1"],
                    roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                        size: 30, // ขนาดห้อง
                        beds: 1, // จำนวนเตียง
                        amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
                    },},
                    {
            name: "บ้านอยู่สบายบูทีคเฮาส์",
            price: 1003,
            location: " 213/7 Mahidol Rd T. Changklan, เมืองเชียงใหม่ ",
            type: "โรงแรม",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/e8/d3/65/baan-u-sabai-chiangmai.jpg?w=1200&h=-1&s=1 ",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/c0/4e/58/baan-u-sabai-boutique.jpg?w=600&h=-1&s=1 ",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/c0/4e/3c/baan-u-sabai-boutique.jpg?w=600&h=-1&s=1 ",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/c0/4e/63/baan-u-sabai-boutique.jpg?w=600&h=-1&s=1 "],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },},
            {
            name: "Hongkhao Village",
            price: 1927,
            location: " 18/9 ป่าพร้าวนอก ซอย 2 ถนนช้างคลาน, เมืองเชียงใหม่  ",
            type: "โรงแรม",
            images: [ // เปลี่ยนจาก image เป็น images และเก็บรูปหลายรูป
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/06/e9/40/getlstd-property-photo.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/59/6e/7d/hongkhao-village.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/59/6e/9c/hongkhao-village.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/3c/30/e9/caption.jpg?w=1200&h=-1&s=1"],
            roomDetails: { // ข้อมูลรายละเอียดห้องพัก
                size: 30, // ขนาดห้อง
                beds: 1, // จำนวนเตียง
                amenities: ["Wi-Fi ฟรี", "แอร์", "ทีวี", "ตู้เย็น", "น้ำร้อน"], // สิ่งอำนวยความสะดวก
            },},

        
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
                        <Link to="/" onClick={handleHotelButtonClick}>ที่พัก</Link>
                        <Link to="/travel">สถานที่ท่องเที่ยว <span className="new-tag">ใหม่</span></Link>
                        <Link to="/car-rental">รถเช่า</Link>
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
                    <Route path="/car-rental" element={<CarRental />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
