import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isScreenWide, setIsScreenWide] = useState(window.screen.width > 640);


    const handleResize = () => {
        setIsScreenWide(window.screen.width > 640);
    };

    useEffect(() => {
        document.body.style.overflowY = 'visible'; // when switching pages using burgermenu, the scroll doesn't get reset so this fixes that
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const [isBurgermenuVisible, setIsBurgermenuVisible] = useState(false);

    const handleBurgermenu = () => {
        const line1 = document.getElementById('line1');
        const line2 = document.getElementById('line2');
        const line3 = document.getElementById('line3');

        if (isBurgermenuVisible) {
            document.body.style.overflow = 'visible'; // resume scrolling

            line1.style.transform = 'translateY(0) rotate(0)';
            line3.style.transform = 'translateY(0) rotate(0)';
            line2.style.scale = 1;

            setIsBurgermenuVisible(false);
            document.getElementById('burgermenu').style.display = 'none';
        } else {
            document.body.style.overflow = 'hidden'; // stops user from scrolling

            line1.style.transform = 'translateY(0.75rem) rotate(45deg)';
            line3.style.transform = 'translateY(-0.75rem) rotate(-45deg)';
            line2.style.scale = 0;

            setIsBurgermenuVisible(true);
            document.getElementById('burgermenu').style.display = 'flex';
        };
    };

    return (
        <div
            id="header"
            className="h-40 w-full relative flex flex-row items-center shadow-lg select-none smooth-change dark:text-white dark:shadow-none">
                <Link
                    className="w-full sm:w-fit sm:absolute sm:left-7 mt-10 sm:mt-0 text-3xl lg:text-4xl 2xl:text-5xl text-center smooth-change"
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
                    </nav>
                ) : (
                    <div>
                        <div className="absolute top-5 right-5 group flex flex-col gap-2 items-center z-20" onClick={handleBurgermenu}>
                            <div id="line1" className="h-1 w-8 rounded-full bg-white z-20 transition-all duration-300"></div>
                            <div id="line2" className="h-1 w-8 rounded-full bg-white z-20 transition-all duration-300"></div>
                            <div id="line3" className="h-1 w-8 rounded-full bg-white z-20 transition-all duration-300"></div>
                        </div>
                        <div
                            id="burgermenu"
                            className="h-screen w-5/6 absolute top-0 right-0 hidden flex-col gap-10 pl-10 pt-28 bg-deepBlue z-10">
                            <Link
                                className="w-fit primary-link smooth-change"
                                to="/">
                                Home
                            </Link>
                            <Link
                                className="w-fit primary-link smooth-change"
                                to="/about">
                                About
                            </Link>
                            <Link
                                className="w-fit primary-link smooth-change"
                                to="/projects">
                                Projects
                            </Link>
                            <Link
                            className="w-fit primary-link smooth-change"
                            to="/gallery">
                                Gallery
                            </Link>
                        </div>
                    </div>
                )}
                

        </div>
    );
};