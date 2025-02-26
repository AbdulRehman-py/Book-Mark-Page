import './nav.css';
import { useState } from 'react';

const NavBar = () => {
    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = () => {
        setIsToggle(!isToggle);
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/images/logo-bookmark.svg" alt="Logo" />
            </div>
            <ul className={`nav ${isToggle ? "open" : ""}`}>
                <li><a href="/">Features</a></li>
                <li><a href="/about">Pricing</a></li>
                <li><a href="/contact">Contact</a></li>
                <button className='login'>Login</button>
            </ul>
            <div className={`hamburger-menu ${isToggle ? "open" : ""}`} onClick={handleToggle}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </nav>
    );
}

export default NavBar;