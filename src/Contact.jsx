import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // ส่งข้อมูลที่ติดต่อไปยังเซิร์ฟเวอร์ หรือทำการประมวลผลข้อมูลที่ติดต่อ
        console.log({ name, email, message });
        // รีเซ็ตฟอร์ม
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact">
            <h2>ติดต่อเรา</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ชื่อ:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>อีเมล:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>ข้อความ:</label>
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">ส่ง</button>
            </form>
            <div>
                <h3>ข้อมูลติดต่อ</h3>
                <p>เบอร์โทร: 012-345-6789</p>
                <p>อีเมล: contact@aloha.com</p>
            </div>
        </div>
    );
};

export default Contact;
