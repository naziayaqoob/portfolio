import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import close19 from '../images/me.JPG';

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
        <div className="relative xl:h-screen">
            {init && (
                <Particles
                    id="tsparticles"
                    className="absolute inset-0 w-full h-full z-0"
                    particlesLoaded={particlesLoaded}
                    options={{
                        autoPlay: true,
                        fullScreen: {
                            enable: false,
                            zIndex: -1,
                        },
                        detectRetina: true,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                resize: {
                                    enable: true,
                                },
                            },
                            modes: {
                                push: {
                                    quantity: 10,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#fff",
                            },
                            move: {
                                direction: "top",
                                enable: true,
                                outModes: {
                                    default: "out",
                                },
                                speed: 0.5,
                                straight: true,
                            },
                            number: {
                                value: 500,
                            },
                            opacity: {
                                value: { min: 0.1, max: 1 },
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 2.5 },
                            },
                        },
                    }}
                />
            )}


            <div className="container max-w-custom text-center flex flex-col xl:flex-row justify-center items-center h-full space-y-8 xl:space-x-8">
                <div className="lg:w-1/2">
                    <img className="banner-img" src={close19} alt="" />
                </div>
                <div className="flex relative items-center justify-center max-w-3xl">
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
            </div>
        </div>
    );
};

export default Banner;
