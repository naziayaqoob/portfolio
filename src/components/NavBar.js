import React from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

const NavBar = () => {
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
    <nav className="z-10">
      <ul className="flex flex-col md:flex-row justify-around md:space-x-6">
        {navItems.map((item) => (
          <li key={item.id} className="mb-2 md:mb-0">
            <a
              onClick={() => handleScrollTo(item.id)}
              className="cursor-pointer"
            >
              {item.label} <span className="opacity-20">{'/>'}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
