import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate(-50%, -50%) translate(${clientX}px, ${clientY}px)`;
    };

    const handleMouseEnter = (e) => {
      const target = e.currentTarget;
      cursor.style.opacity = '0.9';
      cursor.style.width = '100px';
      cursor.style.height = '100px';
      
      const cursorContent = target.getAttribute('data-cursor');
      if (cursorContent) {
        if (cursorContent.trim().startsWith('<svg')) {
          cursor.innerHTML = cursorContent;
        } else {
          cursor.textContent = cursorContent;
        }
      }
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0.5';
      cursor.style.width = '40px';
      cursor.style.height = '40px';
      cursor.textContent = '';
      cursor.style.display = 'flex';
    };

    document.addEventListener('mousemove', moveCursor);

    const hoverTargets = document.querySelectorAll('a, button, .hover-target');
    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', handleMouseEnter);
      target.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      hoverTargets.forEach(target => {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor bg-gray-800 fixed flex items-center justify-center text-white text-4xl pointer-events-none z-50 rounded-full" />;
};

export default CustomCursor;
