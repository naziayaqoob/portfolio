// ProjectDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/projects';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects[projectId];
  
  const handleBackClick = () => {
    navigate('/#projects', { replace: true });
  };
  
  if (!project) {
    return <div>Project not found</div>;
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="single-image-container">
        <motion.img
          src={project.detailImage}
          alt={project.name}
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100vw', opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full object-cover"
        />
      </div>
      <motion.div 
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100vw', opacity: 0 }}
        transition={{ duration: 1 }}
        className="sidebar p-4"
      >
        <button
          onClick={handleBackClick}
          className="inline-flex items-center mb-8 text-lg font-semibold text-white hover:text-gray-300 transition-colors duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Projects
        </button>
        <h3 className="text-2xl font-bold mb-6">{project.name}</h3>
        <p className="text-lg text-gray-400 mb-6">{project.description}</p>
        <div className="mb-4">
          {project.tags && project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-800 text-white px-2 py-1 rounded-full text-sm font-semibold mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black text-center px-4 py-4 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-colors duration-600"
        >
          View Project
        </a>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
