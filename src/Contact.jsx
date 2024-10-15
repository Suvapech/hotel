import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
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
            {isSubmitted && <p className="success-message">ส่งสำเร็จ</p>}
            <div>
                <h3>ข้อมูลติดต่อ</h3>
                <p>เบอร์โทร: 083-294-6789</p>
                <p>อีเมล: Aloha@gmail.com</p>
            </div>
        </div>
    );
};

export default Contact;
