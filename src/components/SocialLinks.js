import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import ReactDOMServer from 'react-dom/server';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nazia-yaqoob/',
    bgColor: 'bg-blue-700',
    borderColor: 'border-blue-700',
    textColor: 'hover:text-blue-700',
    icon: <FaLinkedin />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/naziayaqoob',
    bgColor: 'bg-gray-800',
    borderColor: 'border-gray-800',
    textColor: 'hover:text-gray-800',
    icon: <FaGithub />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/naziach/',
    bgColor: 'bg-pink-500',
    borderColor: 'border-pink-500',
    textColor: 'hover:text-pink-500',
    icon: <FaInstagram />,
  },
  {
    name: 'X',
    url: 'https://x.com/i/flow/login?redirect_after_login=%2FYaqooobNazzia',
    bgColor: 'bg-blue-500',
    borderColor: 'border-blue-500',
    textColor: 'hover:text-blue-500',
    icon: <FaXTwitter />,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center items-center text-white">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            h-12 w-12 flex justify-center items-center bg-purpleCustom m-1 text-3xl
            text-center capitalize
          `}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;