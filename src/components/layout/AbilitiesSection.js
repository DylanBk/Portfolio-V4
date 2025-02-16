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
            <div className="relative flex flex-row items-center ml-4 mt-72 sm:mt-52 mb-44 lg:mb-64">
                <section className="w-full md:w-5/12 xl:w-1/2 p-5 lg:mr-20 xl:mr-0">
                    <h2 className="text-2xl sm:text-4xl border-b-gradient">What can I do?</h2>
                    <p className="xl:w-5/6 mt-3 text-sm sm:text-base text-pretty">
                        As a web developer and designer, I design and build visually stunning websites with a good flow using a diverse range of technologies. I aim to create sites that are dynamic, responsive and eye-catching while maintaining their core functionality.
                        <br /><br />When designing websites, I use tools such as Figma and draw.io to sketch wireframes and make detailed page designs, to maintain consistency throughout the design I design modular components such as the buttons, links, headings, etc.
                        <br /><br />I specialise in both front-end and back-end development. In the front-end area, I can use HTML, CSS, TailwindCSS, JavaScript, JSX, and React. I prefer to use React in conjunction with Tailwind for rapid development as I can quickly create reusable components. My first programming language was Python so for the back-end I am most proficient with Flask combined with SQLite or SQLAlchemy, although I can also use Express.
                    </p>
                </section>
                <TechLogoSection />
            </div>
        ) : (
            <div className="flex flex-col">
                <section className="flex flex-col items-center px-8 mt-44 md:mt-52">
                    <h2 className="text-center text-2xl sm:text-3xl">What can I do?</h2>
                    <p className="mt-1 text-sm sm:text-base text-center text-pretty">
                    As a web developer and designer, I design and build visually stunning websites with a good flow using a diverse range of technologies. I aim to create sites that are dynamic, responsive and eye-catching while maintaining their core functionality.
                    <br /><br />When designing websites, I use tools such as Figma and draw.io to sketch wireframes and make detailed page designs, to maintain consistency throughout the design I design modular components such as the buttons, links, headings, etc.
                    <br /><br />As a software developer, I specialise in front-end and back-end development. In the front-end area, I can use HTML, CSS, TailwindCSS, JavaScript, JSX, and React. I prefer to use React in conjunction with Tailwind for rapid development as I can quickly create reusable components. My first programming language was Python so for the back-end I am most proficient with Flask combined with SQLite or SQLAlchemy, although I have used Express previously.
                    </p>
                </section>
                <TechLogoSection />
            </div>
        )}
        </div>
    );
};