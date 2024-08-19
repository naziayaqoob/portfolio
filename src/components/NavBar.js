import React from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollToPlugin);

const NavBar = ({ isMenuOpen }) => {
    const navItems = [
        { id: 'header', label: 'Start' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' },
    ];

    const handleScrollTo = (id) => {
        gsap.to(window, { duration: 1, scrollTo: `#${id}` });
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 lg:!h-full z-50 overflow-hidden lg:relative lg:block lg:overflow-visible bg-black/75 lg:bg-transparent`}
            initial={{ height: 0 }}
            animate={{ height: isMenuOpen ? '100vh' : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <ul className="flex flex-col items-center justify-center h-full space-y-6 text-white lg:flex-row lg:space-y-0 lg:space-x-6 lg:bg-transparent lg:text-black lg:h-auto lg:items-start lg:static lg:overflow-visible">
                {navItems.map((item) => (
                    <li key={item.id} className="text-base">
                        <a
                            onClick={() => handleScrollTo(item.id)}
                            className="cursor-pointer p-2"
                        >
                            {item.label} <span className="opacity-20">{'/>'}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default NavBar;
