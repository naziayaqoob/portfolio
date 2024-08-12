import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative overflow-hidden">
            <div className="wave"></div>

            <div className="footer">
                <div className="container max-w-custom flex text-white">
                    <p className="mb-4 flex">
                        © Made with {'</>'} by me.
                    </p>

                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com/naziayaqoob" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/nazia-yaqoob/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://x.com/i/flow/login?redirect_after_login=%2FYaqooobNazzia" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
