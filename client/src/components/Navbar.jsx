import React, { useState } from 'react';

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='navbar'>
            <nav>
                <div className="logo">
                    <h1>Nurdin Ismail</h1>
                </div>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className='contact-button'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div className={`hamburger ${isActive ? 'hamburger-active' : ''}`} onClick={toggleNav}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </nav>
            <div className={`menubar ${isActive ? 'active' : ''}`}>
                <ul>
                    <li>
                        <a href="#about" onClick={toggleNav}>About</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={toggleNav}>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={toggleNav}>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
