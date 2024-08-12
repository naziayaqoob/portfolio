import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Lamp from './Svg';
import close19 from '../images/A851688A-1813-44FD-8696-827E282F36B5.JPG';

const Banner = () => {
    const [init, setInit] = useState(false);

    const textRef = useRef(null);
    const paragraphRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(textRef.current, {
            duration: 2,
            text: "Meet me, I'm NAZIA...",
            ease: "none",
            repeat: -1,
            repeatDelay: 2,
        })
        .from(paragraphRef.current, {
            duration: 1.5,
            opacity: 0,
            y: 30,
            ease: "circ.inOut",
            delay: -1.5
        });
    }, []);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className="relative h-screen">
            { init &&
                <Particles
                    id="tsparticles"
                    className="absolute inset-x-0 inset-y-0 width-full height-full z-0"
                    particlesLoaded={particlesLoaded}
                    options={{
                        fullScreen: {
                            enable: false,
                            zIndex: -1,
                        },
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: ["#ffffff", "#ff0000", "#00ff00", "#4c3a69"],
                            },
                            links: {
                                color: "#fff",
                                distance: 120,
                                enable: true,
                                opacity: 0.7,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: true,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 350,
                            },
                            opacity: {
                                value: 0.2,
                            },
                            shape: {
                                type: ["circle", "triangle", "custom"],
                                options: {
                                    custom: [
                                        {
                                            shape: [
                                                "M 0 0 L 10 0 L 5 10 Z",
                                                "M 0 0 Q 5 10 10 0 T 20 0" 
                                            ],
                                            fill: true
                                        },
                                        {
                                            shape: "M 10 0 L 0 10 L 10 20 L 20 10 Z",
                                            fill: true
                                        }
                                    ]
                                }
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            }

            <Lamp />

            <div className="container max-w-custom text-center flex flex-col md:flex-row justify-between items-center">
                <div className="flex-1 pl-6 pr-14 flex items-center flex-col justify-center max-w-3xl relative h-screen" style={{ top: '50px' }}>
                    <div>
                        <h1 ref={textRef} className="text-xl md:text-5xl font-bold mb-6">.</h1>
                        <p ref={paragraphRef} className="mb-4 text-sm md:text-lg">
                            I'm a creative Senior Web Frontend Developer with over 8 years of experience in making pixel-perfect,
                            interactive websites. I love what I do and code with passion🔥, always crafting with purpose. <br /><br />
                            Besides coding, I enjoy traveling and diving into a good book. <br /><br />
                            Based in Lahore, I'm an interactive web developer who specializes in a wide range of skills.💪
                        </p>
                    </div>
                </div>
                <div className="flex-1 md:flex-none md:w-1/3 p-4 border-2 border-gray-400" style={{ borderWidth: '6px', padding: '15px' }}>
                    <img src={close19} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;
