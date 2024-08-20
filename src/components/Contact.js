import React from 'react';
import SocialLinks from './SocialLinks';
import { ReactComponent as FooterIcon } from '../images/matey-girl.svg';

const Contact = () => {
    return (
        <div className="container mx-auto max-w-custom relative flex flex-col md:flex-row items-center justify-center min-h-[600px] mt-8 px-4 md:px-8">
            <div className="text-center w-full md:w-1/2 space-y-6">
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
            <div className="flex justify-center md:justify-end">
                <FooterIcon />
            </div>
        </div>
    );
};

export default Contact;
