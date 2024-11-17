import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="flex flex-col md:flex-row text-white">
                {/* Logo and About Section */}
                <div className='bg-slate-500 w-full md:w-1/3 py-10 px-10 flex flex-col items-center'>
                    <img 
                        src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg" 
                        className='w-20 mb-4' 
                        alt="Logo"
                    />
                    <p className='text-[19px] font-semibold font-serif text-center'>
                        Parkinson Disease Detection
                    </p>
                    <p className="text-center mt-3 text-sm">
                        Empowering early detection and monitoring of Parkinson’s disease through advanced AI technology.
                    </p>
                </div>

                {/* Contact Section */}
                <div className='bg-slate-600 w-full md:w-1/3 py-10 px-10'>
                    <h6 className="footer-title text-white text-lg font-bold mb-4">Contact Us</h6>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <FaPhone className="text-xl" /> 
                            <span>+1 234 567 890</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-xl" />
                            <span>support@parkinsondetect.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-xl" />
                            <span>Mirpur-10, Dhaka, Bangladesh</span>
                        </li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className='bg-slate-700 w-full md:w-1/3 py-10 px-10 flex flex-col items-center'>
                    <h6 className="footer-title text-white text-lg font-bold mb-4">Follow Us</h6>
                    <div className="flex gap-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className='text-3xl hover:text-blue-400 transition-colors' />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='text-3xl hover:text-pink-400 transition-colors' />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='text-3xl hover:text-blue-700 transition-colors' />
                        </a>
                    </div>
                    <p className="text-sm mt-4">
                        Stay updated with the latest advancements in Parkinson's detection technology.
                    </p>
                </div>
            </footer>
            
            {/* Footer Bottom Section */}
            <div className='w-full py-2 bg-slate-400 text-black font-semibold flex justify-center'>
                Copyright © 2024 - Parkinson Disease Detection | All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
