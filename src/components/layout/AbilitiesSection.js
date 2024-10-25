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
                    <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            <TechLogoSection />
        </div> ) : (
            <div className="flex flex-col">
                <div className="flex flex-col items-center px-8 mt-72 md:mt-52">
                    <h2 className="text-center text-2xl sm:text-3xl">What can I do?</h2>
                    <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <TechLogoSection />
            </div>
        )}
        </div>
    )
};