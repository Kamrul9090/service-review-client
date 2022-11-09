import React from 'react';
import { FaEnvelope, FaFacebook, FaGithub, FaHome, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import img1 from '../../assets/footer/bibimbap.png'
import img2 from '../../assets/footer/diet.png'
import img3 from '../../assets/footer/menu.png'
const Footer = () => {
    return (

        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                <p>Hot Foodies<br />Providing reliable fast food since 2018</p>
                <h5 className='font-bold text-3xl'>About Us</h5>
                <div className='flex items-center hover:text-purple-500 font-bold text-xl'>
                    <FaHome className='w-8 h-6 mr-3'></FaHome>
                    <div>
                        <small>Shonaiful Bazar, Ramgarh, Khagrachory</small>
                    </div>
                </div>
                <div className='flex items-center hover:text-purple-500 font-bold text-xl'>
                    <FaPhoneAlt className='w-8 h-6 mr-3'></FaPhoneAlt>
                    <div>
                        <p>+088 01829424165</p>
                        <p>+088 01829427768</p>
                    </div>
                </div>
                <div className='flex items-center hover:text-purple-500 font-bold text-xl'>
                    <FaEnvelope className='w-8 h-6 mr-3'></FaEnvelope>
                    <div>
                        <p>foodies@gmail.com</p>
                    </div>
                </div>

            </div>
            <div>
                <div className='font-bold mb-5'>
                    <span className="footer-title">Opening Time</span>
                    <p>Everyday 9.00am to 10pm</p>
                    <p>6 days the week</p>
                </div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook className='w-12 h-12'></FaFacebook></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter className='w-12 h-12'></FaTwitter></a>
                    <a href="#" target="_blank" rel="noopener noreferrer">   <FaInstagram className='w-12 h-12'></FaInstagram></a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='w-12 h-12'></FaGithub>
                    </a>
                </div>
                <div className='flex pt-2'>
                    <img className='w-20 mr-2' src={img1} alt="" srcset="" />
                    <img className='w-20 mr-2' src={img2} alt="" srcset="" />
                    <img className='w-20' src={img3} alt="" srcset="" />
                </div>
            </div>
        </footer>

    );
};

export default Footer;