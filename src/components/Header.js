import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import HamburgerIcon from './HamburgerIcon';
import { ReactComponent as DownloadIcon } from '../images/download.svg';

import resumePDF from '../data/Nazia_Yaqoob_Resume.pdf';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [time, setTime] = useState(new Date());
    const [weather, setWeather] = useState(null);

    const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=6e93b3d15872f914c6929fed9ea71e9a');
                if (!response.ok) throw new Error('Failed to fetch weather data');
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error('Error fetching weather data:', error.message);
            }
        };

        fetchWeather();
    }, []);

    const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).format(time);

    const handleDownloadClick = () => {
        window.open(resumePDF, '_blank');
    };

    return (
        <header className="flex flex-col lg:flex-row items-center justify-between text-center xl:absolute left-0 right-0 top-0 py-6 px-4 md:px-8 z-10">
            <div className="flex items-center justify-between w-full lg:w-auto">
                <div>👋 Hi, There</div>
                <HamburgerIcon isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>
            <NavBar isMenuOpen={isMenuOpen} />
            <div className="flex items-center mt-4 lg:mt-0">
                <div className="flex items-center mr-4">
                    {weather && (
                        <>
                            <img
                                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                                alt="Weather Icon"
                                className="w-8 h-8"
                            />
                            <span className="ml-2">{Math.round(weather.main.temp)}°C</span>
                            <span className="ml-2">{weather.name}</span>
                        </>
                    )}
                    <div className="ml-4">
                        {formattedTime}
                    </div>
                </div>
                <div className="flex items-center">
                    <button 
                        className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
                        onClick={handleDownloadClick}
                    >
                        <DownloadIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
