import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import newstimesPreview from '../images/contact-bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = () => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1, // Adjust for smoothness
            smooth: true,
        });

        lenis.on('scroll', (e) => {
            ScrollTrigger.update();
        });

        const animateScroll = (time) => {
            lenis.raf(time);
            requestAnimationFrame(animateScroll);
        };
        requestAnimationFrame(animateScroll);

        gsap.to('.parallax-background', {
            yPercent: 50,
            ease: 'none',
            scrollTrigger: {
                trigger: '.parallax-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                invalidateOnRefresh: true,
            },
        });

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="parallax-section" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <div
                className="parallax-background"
                style={{
                   backgroundImage: `url(${newstimesPreview})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '150%',
                    width: '100%',
                    position: 'absolute',
                    top: '-25%',
                }}
            ></div>
        </div>
    );
};

export default ParallaxSection;
