import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin, TextPlugin } from 'gsap/all';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import { motion, useScroll } from "framer-motion";

import Header from './components/Header';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import ImageGallery from './components/ImageGallery';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

const ScrollToTop = ({ scrollPosition }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo(0, scrollPosition);
    } else {
      gsap.to(window, { duration: 1, scrollTo: 0 });
    }
  }, [pathname, scrollPosition]);
  return null;
};

const App = () => {
    const { scrollYProgress } = useScroll();

  const [scrollPosition, setScrollPosition] = useState(0);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      window.scrollTo({
        top: contactRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Router>
        <CustomCursor />

    <motion.div
        className="progress-bar fixed inset-x-0 inset-y-0 h-2.5 bg-purpleCustom origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    
      <ScrollToTop scrollPosition={scrollPosition} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="relative z-10 bg-customBg">
                <section id="header">
                  <Header scrollToContact={scrollToContact} />
                </section>
                <section id="banner">
                  <Banner />
                </section>
                <section id="skills">
                  <Skills />
                </section>
                <section id="projects">
                  <ImageGallery setScrollPosition={setScrollPosition} />
                </section>
                <section id="experience" className="bg-gray-800">
                  <Experience />
                </section>
              </main>
              <section id="contact" ref={contactRef} className="sticky bottom-0 w-full">
                <Contact setScrollPosition={setScrollPosition} />
              </section>
            </>
          }
        />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
