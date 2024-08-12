import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Skills Icons
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaSass, FaGithub,
    FaGitAlt, FaCogs, FaWordpress, FaMagento, FaSalesforce, FaFigma, FaNpm
} from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiJquery } from 'react-icons/si';
import { DiW3C, DiResponsive } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';

const SkillIcon = ({ name, icon }) => (
    <div className="group text-md">
        <span className="flex items-center justify-center px-4 py-2 bg-white text-dark border border-gray-300 rounded-full 
            hover:bg-transparent hover:text-white transition-transform transform hover:scale-110 
            hover:shadow-lg">
            {icon}&nbsp;{name}
        </span>
    </div>
);

const Skills = () => {
    const skills = [
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'jQuery', icon: <SiJquery /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Bootstrap', icon: <FaBootstrap /> },
        { name: 'Sass', icon: <FaSass /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'WordPress', icon: <FaWordpress /> },
        { name: 'Magento', icon: <FaMagento /> },
        { name: 'SFCC', icon: <FaSalesforce /> },
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'RESTful APIs', icon: <FaCogs /> },
        { name: 'Web Accessibility', icon: <DiW3C /> },
        { name: 'Responsive Websites', icon: <DiResponsive /> },
        { name: 'NPM', icon: <FaNpm /> },
        { name: 'VS Code', icon: <VscVscode /> },
    ];

    const main = useRef();

    useGSAP(
      () => {
        const boxes = gsap.utils.toArray('.group');
        boxes.forEach((box) => {
          gsap.to(box, {
            x: 100,
            rotation: 5,
            scrollTrigger: {
              trigger: box,
              start: 'bottom center',
              end: 'bottom 10%',
              scrub: 0.5,
            },
          });
        });
      },
      { scope: main }
    );

    return (
        <div className="skills-section mx-auto h-screen">
            <div className="container max-w-custom flex flex-col justify-center items-center h-full">
                <div className='skills-head text-white max-w-2xl mb-6 md:mb-12 mr-auto'>
                    <h1 className="text-2xl md:text-5xl font-bold uppercase mb-4">Things I Can Do</h1>
                    <p className="text-base md:text-lg">Choose from a variety of beautifully designed micro interactions, including animations, buttons, link effects, and more.</p>
                </div>
                
                <div className="flex flex-wrap justify-end items-center" ref={main}>
                    {skills.map((skill, index) => (
                        <div key={index} className="mt-4 mr-4">
                        <SkillIcon name={skill.name} icon={skill.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;