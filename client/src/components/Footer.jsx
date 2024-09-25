import React from "react";
import github from '../public/github2.png'
import email from '../public/email.png'
import call from '../public/call.png'

const Footer = () => {
    return (
        <footer id="contact" className="pt-10 bg-[#E9EAFF] grid pb-10">

            <div className="  border-[1px] border-white grid place-self-center grid-flow-col gap-20 px-10 py-10">

                <div className="flex gap-2 place-self-center place-items-center">
                    <img src={github} alt="" />
                    <a href="https://github.com/Nurdin-Ismail">https://github.com/Nurdin-Ismail</a>
                </div>
                <div className="flex gap-2 place-self-center place-items-center">
                    <img src={email} alt="" />
                    <h1>shiilnurdin@gmail.com</h1>
                </div>
                <div className="flex gap-2 place-self-center place-items-center">
                    <img src={call} alt="" />
                    <h1>+254-114-800-794</h1>
                </div>




            </div>

        </footer>
    );
};

export default Footer;
