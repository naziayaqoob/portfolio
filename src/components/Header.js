import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { ReactComponent as LightIcon } from '../images/light.svg';
import { ReactComponent as DarkIcon } from '../images/dark.svg';
import { ReactComponent as DownloadIcon } from '../images/download.svg';

const Header = () => {
    const [isOn, setIsOn] = useState(false);
    const [time, setTime] = useState(new Date());
    const [weather, setWeather] = useState(null);

    const toggleSwitch = () => setIsOn(!isOn);

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
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error('Error fetching weather data:', error.response ? error.response.data : error.message);
            }
        };

        fetchWeather();
    }, []);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isOn);
        document.body.classList.toggle('light-mode', !isOn);

        return () => {
            document.body.classList.remove('dark-mode');
            document.body.classList.remove('light-mode');
        };
    }, [isOn]);

    const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).format(time);

    return (
        <header className="flex flex-col md:flex-row items-center justify-between text-center absolute left-0 right-0 top-0 py-6 px-4 md:px-8 z-10">
            <div className="mb-4 md:mb-0">
                👋 Hi, There
            </div>
            <NavBar />
            <div className="flex items-center mt-4 md:mt-0">
                <div className="flex items-center">
                    {weather && (
                        <div className="flex items-center mr-4">
                            <img
                                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                                alt="Weather Icon"
                                className="w-8 h-8"
                            />
                            <span className="ml-2">{Math.round(weather.main.temp)}°C</span>
                            <span className="ml-2">{weather.name}</span>
                        </div>
                    )}
                    <div className="mr-4">
                        {formattedTime}
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
                        <div className="handle flex items-center justify-center relative">
                            <span className={`absolute ${isOn ? 'toggle-light' : 'toggle-dark'}`}>
                                {isOn ? (
                                    <LightIcon />
                                ) : (
                                    <DarkIcon />
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
