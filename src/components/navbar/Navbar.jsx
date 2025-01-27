import React from 'react';
import '../navbar/navbar.scss';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';

function Navbar() {
  return (
    <div className='navbar'>
      <Sidebar />
        <div className='wrapper'>
            <motion.span
             initial={{ opacity:0, scale: 0.5 }}
             animate={{ opacity:1, scale: 1 }}
             transition={{ duration: 0.6 }}
            ></motion.span>
            <div className='social'>
                <a href="https://www.facebook.com/profile.php?id=100006607698612">
                  <FaFacebookF className='sicons'></FaFacebookF>
                </a>
                <a href="https://x.com/arun32531768">
                  <FaTwitter className='sicons'></FaTwitter>
                </a>
                <a href="https://www.instagram.com/_arunps__/">
                  <FaInstagram className='sicons'></FaInstagram>
                </a>
                <a href="https://www.youtube.com/">
                  <FaYoutube className='sicons'></FaYoutube>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
