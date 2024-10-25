import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isScreenWide, setIsScreenWide] = useState(window.screen.width > 640);

    const handleResize = () => {
        setIsScreenWide(window.screen.width > 640);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
}, []);

    return (
        <div
            id="header"
            className="h-40 w-full relative flex flex-row items-center shadow-lg select-none smooth-change dark:text-white dark:shadow-none">
                <Link
                    className="w-full sm:w-fit sm:absolute sm:left-7 text-3xl lg:text-4xl 2xl:text-5xl text-center smooth-change"
                    to="/">
                    <h1>Dylan's Portfolio</h1>
                </Link>

                {isScreenWide ? ( // renders a navbar for devices wider that 640px and a burger menu for smaller devices
                    <nav className="absolute right-12 md:right-28 flex flex-row gap-5 smooth-change">
                    <Link
                        className="primary-link smooth-change"
                        to="/">
                        Home
                    </Link>
                    <Link
                        className="primary-link smooth-change"
                        to="/about">
                        About
                    </Link>
                    <Link
                        className="primary-link smooth-change"
                        to="/projects">
                        Projects
                    </Link>
                    <Link
                    
                    className="primary-link smooth-change"
                    to="/gallery">
                        Gallery
                    </Link>
                </nav> ) : (
                    <></> //TODO Add a burger menu that opens a nav menu
                )}
                

        </div>
    )
}