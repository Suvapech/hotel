import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    const goToLogin = () => {
        history.push('/login');
    };

    return (
        <div className="home-page">
            <nav className="navbar">
                <div className="logo">Aloha</div>
                <div className="right-menu">
                    <button className="login" onClick={goToLogin}>
                        เข้าสู่ระบบ
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Home;
