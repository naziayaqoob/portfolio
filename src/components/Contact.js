import React from 'react';

import SocialLinks from './SocialLinks';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="relative overflow-hidden">

{/*
        <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 p-8 text-center md:text-left">
                <p className="text-lg mt-4">How to get in touch with me.</p>
                <p className="text-lg mt-2">Email: <a href="mailto:nazzia.ch@gmail.com" className="text-blue-500">nazzia.ch@gmail.com</a></p>
            </div>
        </div>
     */ }

        <SocialLinks />

        <div class="copyright p-6 bg-gray-800 text-white">
            <small>© 2024 Nazia Yaqoob</small>
        </div>
    </div>
  );
};

export default Contact;
