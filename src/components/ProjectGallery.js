// ProjectGallery.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/projects';

const ProjectGallery = ({ setScrollPosition }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Create an array to hold Image objects
    const imagePreloaders = [];

    // Loop through projects to preload images
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
      imagePreloaders.push(img); // Add Image object to array
    });

    // Clean up function (optional, but good practice)
    return () => {
      imagePreloaders.forEach((img) => img.src = ''); // Reset src to empty string to stop loading
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleProjectClick = (index) => {
    setScrollPosition(window.scrollY);
    navigate(`/project/${index}`);
  };

  return (
    <div className="container max-w-custom mx-auto p-8">
      <div className="flex flex-col md:flex-row mb-16 space-y-6 md:space-y-0 md:space-x-12">
        <h2 className="text-6xl md:text-8xl animate-text-color font-bold">
          My <br /> Work
        </h2>
        <p className="text-xl text-gray-700 flex items-center">
          Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.
          Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization.
        </p>
      </div>

      <ul className="gallery-container grid grid-cols-1 md:grid-cols-3 gap-5 p-4">
      {projects.map((project, i) => (
      <motion.li
        className="gallery-item relative cursor-pointer overflow-hidden rounded-xl"
        key={i} // Use a unique key here
        onClick={() => handleProjectClick(i)}
        layout
      >
        <motion.img
          src={project.image}
          alt={`Gallery Image ${i + 1}`}
          className="w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.li>
    ))}
      </ul>
    </div>
  );
};

export default ProjectGallery;
