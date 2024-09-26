import React from "react";
import github from '../public/github2.png';
import email from '../public/email.png';
import call from '../public/call.png';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-container">
                <div className="footer-item xl:place-self-end">
                    <img src={github} alt="GitHub" className="icon" />
                    <a href="https://github.com/Nurdin-Ismail">https://github.com/Nurdin-Ismail</a>
                </div>
                <div className="footer-item xl:place-self-end md:xl:place-self-end">
                    <img src={email} alt="Email" className="icon" />
                    <h1>shiilnurdin@gmail.com</h1>
                </div>
                <div className="footer-item">
                    <img src={call} alt="Phone" className="icon" />
                    <h1>+254-114-800-794</h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
