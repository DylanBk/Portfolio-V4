import React, { useEffect, useState } from "react";

import TechLogoSection from "./TechLogoSection";

export default function AbilitiesSection() {
    const [isScreenWide, setIsScreenWide] = useState(window.screen.width > 768);

    const handleResize = () => {
        setIsScreenWide(window.screen.width > 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
}, []);

    return (
        <div className="bg-almostWhite dark:bg-onyxBlack text-black dark:text-white">
        {isScreenWide ? (
            <div className="relative flex flex-row items-center px-4 mt-72 sm:mt-52 mb-44 lg:mb-64">
                <div className="w-full md:w-2/5 xl:w-1/2 p-5 sm::ml-10">
                    <h2 className="text-2xl sm:text-3xl">What can I do?</h2>
                    <p className="mt-3 text-sm sm:text-base text-pretty">
                        I design and build dynamic, visually stunning, functional, and accessible websites using a diverse range of technologies. I specialise in both front-end and back-end development, utilising tools such as Figma for wireframing and detailed design. While I started with pure HTML and CSS, I now prefer React and vanilla JavaScript with Tailwind CSS for rapid development. For back-end work, I favour Flask for its seamless integration with SQLite or SQLAlchemy, although I also have experience with Express.
                    </p>
                </div>
            <TechLogoSection />
        </div> ) : (
            <div className="flex flex-col">
                <div className="flex flex-col items-center px-8 mt-44 md:mt-52">
                    <h2 className="text-center text-2xl sm:text-3xl">What can I do?</h2>
                    <p className="mt-1 text-sm sm:text-base text-center text-pretty">
                        I design and build dynamic, visually stunning, functional, and accessible websites using a diverse range of technologies. I specialise in both front-end and back-end development, utilising tools such as Figma for wireframing and detailed design. While I started with pure HTML and CSS, I now prefer React and vanilla JavaScript with Tailwind CSS for rapid development. For back-end work, I favour Flask for its seamless integration with SQLite or SQLAlchemy, although I also have experience with Express.
                    </p>
                </div>
                <TechLogoSection />
            </div>
        )}
        </div>
    )
};