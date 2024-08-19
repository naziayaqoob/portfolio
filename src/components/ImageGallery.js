import React, { useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import imagesLoaded from 'imagesloaded';
import { useNavigate } from 'react-router-dom';
import projects from '../data/projects';

import { FaXTwitter } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const ImageGallery = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    const handleAnimations = useCallback(() => {
        const columns = document.querySelectorAll('.column');
        columns.forEach((column, pos) => {
            gsap.to(column, {
                ease: 'none',
                yPercent: -pos * 10,
                scrollTrigger: {
                    trigger: '.columns',
                    start: 'clamp(top bottom)',
                    end: 'clamp(bottom top)',
                    scrub: true,
                },
            });
        });

        const items = document.querySelectorAll('.column__item');
        items.forEach((item) => {
            if (item) {
                gsap.fromTo(
                    item,
                    { y: 20 },
                    {
                        y: -20,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: item,
                            start: 'clamp(top bottom)',
                            end: 'clamp(bottom top)',
                            scrub: true,
                        },
                    }
                );
            }
        });
    }, []);

    useEffect(() => {
        let lenisInstance;

        const initSmoothScrolling = () => {
            lenisInstance = new Lenis({ lerp: 0.15, smoothWheel: true });
            lenisInstance.on('scroll', ScrollTrigger.update);
            const scrollFn = (time) => {
                lenisInstance.raf(time);
                requestAnimationFrame(scrollFn);
            };
            requestAnimationFrame(scrollFn);
        };

        const preloadImages = () => {
            const imgLoad = imagesLoaded('.columns');
            imgLoad.on('done', () => setIsLoaded(true));
        };

        initSmoothScrolling();
        preloadImages();

        const savedScrollPosition = localStorage.getItem('scrollPosition');
        if (savedScrollPosition) {
            window.scrollTo(0, parseInt(savedScrollPosition, 10));
            localStorage.removeItem('scrollPosition');
        }

        return () => {
            if (lenisInstance) lenisInstance.destroy();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    useEffect(() => {
        if (isLoaded) {
            const timer = setTimeout(handleAnimations, 100);
            return () => clearTimeout(timer);
        }
    }, [isLoaded, handleAnimations]);

    const handleProjectClick = (index) => {
        localStorage.setItem('scrollPosition', window.scrollY);
        navigate(`/project/${index}`);
    };

    const renderColumn = (columnProjects, colIndex) => (
        <div 
            className="hover-target column relative w-full flex flex-wrap flex-col will-change-transform" 
            key={colIndex}
        >
            {columnProjects.map((project, index) => (
                <>
                    <figure
                        className="relative column__item group relative z-1 m-0 lg:min-h-[414px]"
                        key={index}
                        onClick={() => handleProjectClick(project.id)}
                    >
                        <div className="relative overflow-hidden w-full h-full">
                            <img className="lg:absolute lg:top-0 lg:left-0 lg:transition-all lg:duration-500" src={project.image} alt={project.title} />
                            <img className="lg:absolute lg:top-0 lg:left-0 lg:transition-all lg:duration-500 hidden lg:block" src={project.image} alt={project.title} />
                        </div>

                        <div className="column__text">
                            <h2 className="text-2xl bold bg-white p-2 text-black">{project.name}</h2>
                        </div>
                    </figure>
                </>
            ))}
        </div>
    );

    const columnProjects = [
        projects.slice(0, 5),
        projects.slice(5, 10),
    ];
    return (
        <div className={`projects-gallery container max-w-custom ${isLoaded ? '' : 'loading'}`}>
            <div className="flex flex-col md:flex-row mb-16 space-y-6 md:space-y-0 md:space-x-12">
                <h2 className="text-6xl md:text-8xl animate-text-color font-bold">
                    My <br /> Work
                </h2>
                <p className="text-base md:text-xl text-gray-700 flex items-center">
                    Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.
                    Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization.
                </p>
            </div>
            <div className="columns space-x-4">
                {columnProjects.map((columnProjects, index) =>
                    renderColumn(columnProjects, index)
                )}
            </div>
        </div>
    );
};

export default ImageGallery;
