import React from 'react';
import SocialLinks from './SocialLinks';
import { ReactComponent as DarkIcon } from '../images/matey-girl-in-pajamas-is-sitting-with-a-laptop-on-her-lap.svg';

const Contact = () => {
    return (
        <div className="container mx-auto max-w-custom relative flex flex-col md:flex-row items-center justify-center min-h-[600px] mt-8 px-4 md:px-8">
            <div className="text-center md:text-left w-full md:w-1/2 space-y-6 mb-8 md:mb-0">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    Have an exciting project you need help with? I’m always up for a chat.
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Drop me an email at{' '}
                    <a href="mailto:nazzia.ch@gmail.com" className="text-blue-500 underline">
                        nazzia.ch@gmail.com
                    </a>
                </p>
                <SocialLinks />
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <DarkIcon className="w-64 h-64 md:w-80 md:h-80" />
            </div>
        </div>
    );
};

export default Contact;
