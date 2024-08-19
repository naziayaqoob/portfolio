import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Function to check if the device is desktop
    const isDesktop = () => window.innerWidth >= 1024;

    // Move cursor function
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate(-50%, -50%) translate(${clientX}px, ${clientY}px)`;
    };

    // Mouse enter handler
    const handleMouseEnter = (e) => {
      const target = e.currentTarget;
      cursor.style.opacity = '0.3';
      cursor.style.width = '80px';
      cursor.style.height = '80px';

      const cursorContent = target.getAttribute('data-cursor');
      if (cursorContent) {
        if (cursorContent.trim().startsWith('<svg')) {
          cursor.innerHTML = cursorContent;
        } else {
          cursor.textContent = cursorContent;
        }
      }
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      cursor.style.opacity = '0.7';
      cursor.style.width = '30px';
      cursor.style.height = '30px';
      cursor.textContent = '';
      cursor.style.display = 'flex';
    };

    if (isDesktop()) {
      document.addEventListener('mousemove', moveCursor);

      const hoverTargets = document.querySelectorAll('a, button, .hover-target, .cursor-pointer');
      hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', handleMouseEnter);
        target.addEventListener('mouseleave', handleMouseLeave);
      });
    }

    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      if (isDesktop()) {
        const hoverTargets = document.querySelectorAll('a, button, .hover-target');
        hoverTargets.forEach(target => {
          target.removeEventListener('mouseenter', handleMouseEnter);
          target.removeEventListener('mouseleave', handleMouseLeave);
        });
      }
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor bg-gray-800 fixed flex items-center justify-center text-white text-4xl pointer-events-none z-50 rounded-full hidden lg:block" />;
};

export default CustomCursor;
