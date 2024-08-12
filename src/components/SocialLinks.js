import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import ReactDOMServer from 'react-dom/server';

const socialLinks = [
  {
    name: 'my LinkedIn',
    url: 'https://www.linkedin.com/in/nazia-yaqoob/',
    bgColor: 'hover:bg-blue-700',
    borderColor: 'border-blue-700',
    textColor: 'hover:text-blue-700',
    icon: <FaLinkedin />,
  },
  {
    name: 'my GitHub',
    url: 'https://github.com/naziayaqoob',
    bgColor: 'hover:bg-gray-800',
    borderColor: 'border-gray-800',
    textColor: 'hover:text-gray-800',
    icon: <FaGithub />,
  },
  {
    name: 'my Instagram',
    url: 'https://www.instagram.com/naziach/',
    bgColor: 'hover:bg-pink-500',
    borderColor: 'border-pink-500',
    textColor: 'hover:text-pink-500',
    icon: <FaInstagram />,
  },
  {
    name: 'my X',
    url: 'https://x.com/i/flow/login?redirect_after_login=%2FYaqooobNazzia',
    bgColor: 'hover:bg-blue-500',
    borderColor: 'border-blue-500',
    textColor: 'hover:text-blue-500',
    icon: <FaXTwitter />,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          data-cursor={ReactDOMServer.renderToString(link.icon)}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex-1 h-80 flex justify-center items-center 
            text-center text-xl capitalize font-semibold text-gray-800
            border-r-2 border-b-2 border-gray-800 
            ${link.textColor}
            transition duration-300
          `}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;