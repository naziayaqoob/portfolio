// ProjectGallery.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/projects';

const ProjectTile = ({ project }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
        <img
            src={project.image}
            alt={project.name}
            className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-600">
            <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
            <p className="text-sm text-gray-200 mb-4">{project.description}</p>
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-colors duration-600"
            >
                View Project
            </a>
        </div>
    </div>
);

const Projects = ({ setScrollPosition }) => {
    const navigate = useNavigate();

    useEffect(() => {
      const imagePreloaders = [];
  
      projects.forEach((project) => {
        const img = new Image();
        img.src = project.image;
        imagePreloaders.push(img);
      });
  
      return () => {
        imagePreloaders.forEach((img) => img.src = '');
      };
    }, []); 
  
    const handleProjectClick = (index) => {
      setScrollPosition(window.scrollY);
      navigate(`/project/${index}`);
    };

    return (
        <div className="container max-w-7xl mx-auto p-8">
            <div className="flex flex-col md:flex-row mb-16 space-y-6 md:space-y-0 md:space-x-12">
                <h2 className="text-6xl md:text-8xl animate-text-color font-bold">
                    My <br /> Work
                </h2>
                <p className="text-xl text-gray-700 flex items-center">
                    Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.
                    Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectTile key={index} project={project} onClick={() => handleProjectClick(index)} />
                ))}
            </div>
        </div>
    );
};

export default Projects;