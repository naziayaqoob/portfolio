// HamburgerIcon.js
import React from 'react';

const HamburgerIcon = ({ isOpen, toggleMenu }) => {
    return (
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <div className={`w-6 h-1 bg-black mb-1 transition-transform ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-1 bg-black mb-1 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-1 bg-black transition-transform ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </div>
    );
};

export default HamburgerIcon;
