import React, { useState } from 'react';
import { FaBriefcase, FaRegEdit, FaRegHeart, FaLaptopCode, FaCode } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import { ReactComponent as PaperIcon } from '../images/paper.svg';

const Experience = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const experiences = [
        {
            icon: <FaRegEdit />,
            title: 'Senior Frontend Developer',
            company: 'Globant Commerce Studio – Remote',
            period: '03/2022 to Current',
            responsibilities: 'Led the development of responsive layouts, boosting user engagement by 20% and conversion rates by 15%, resulting in significant revenue gains.'
        },
        {
            icon: <FaRegHeart />,
            title: 'Senior Frontend Developer',
            company: 'Osf Digital - Remote',
            period: '02/2021 to 03/2022',
            responsibilities: 'Delivered responsive layouts and optimized mobile accessibility for key website sections, contributing to a 25% increase in user satisfaction. Ensured cross-browser compatibility, enhancing usability and boosting user retention by 15%.'
        },
        {
            icon: <FaLaptopCode />,
            title: 'Senior Frontend Developer',
            company: 'Systems Ltd - Lahore',
            period: '12/2018 to 02/2021',
            responsibilities: 'Led a team to deliver high-quality projects using Bootstrap, jQuery, and JavaScript, and transformed designs from Zeplin/Figma to SFRA/Site Genesis'
        },
        {
            icon: <FaBriefcase />,
            title: 'Frontend Developer',
            company: 'Nestosh Ltd - Lahore',
            period: '12/2016 to 12/2018',
            responsibilities: 'Developed and maintained e-commerce applications using SFCC, enhancing site functionality by 30% and boosting user satisfaction. Conducted requirement analysis and estimations for projects, cutting planning time by 15%.'
        },
        // {
        //     icon: <FaCode />,
        //     title: 'Frontend Developer',
        //     company: 'Crizalpress Ltd - Lahore',
        //     period: '08/2015 to 12/2016',
        //     responsibilities: 'Developed Themeforest templates, converting PSD, Zeplin, and Figma designs into HTML, achieving a 90% customer satisfaction rate and increasing template sales by 20%.'
        // },
    ];
    
   {/* const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };*/}

    return (
        <>
            <div className="overflow-hidden">
                <PaperIcon className="w-full rotate-180 -mt-1"/>
            </div>

            <div className="container max-w-custom relative py-20 flex items-center justify-center">
                <h2 className="absolute top-6 left-4 md:-left-20 uppercase opacity-5 text-center md:text-left font-bold text-4xl md:text-9xl">Professional Experience</h2>
                
                <ul className="relative p-0 z-10 max-w-2xl space-y-10 md:ml-[150px] border-l border-solid border-current pt-[50px] experience-list">
                    {experiences.map((exp, index) => (
                        <li key={index} className="relative pl-8">

                            <div className="relative">
                                <span className="w-8 h-8 bg-purpleCustom rounded flex items-center justify-center text-lg absolute text-white">
                                    {exp.icon}
                                </span>
                                <div className="ml-12">
                                    <div className="cursor-pointer" >
                                        <h3  className="text-xl font-semibold">
                                            {exp.title} <span className="text-xs font-light">{exp.period}</span>
                                        </h3>
                                        <p className="mt-1 italic text-xs font-light">{exp.company}</p>
                                    </div>

                                    <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p className="mt-2 text-sm font-light">{exp.responsibilities}</p>
                                            </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Experience;