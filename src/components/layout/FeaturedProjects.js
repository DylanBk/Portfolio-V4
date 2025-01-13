import React, { useEffect, useState } from "react";

import handleFocusedProject from '../../utils/handleFocusedProject';

import bloomAcademia from '../../assets/bloom_academia_cover.svg';
import arcadiaLibrary from '../../assets/arcadiaLibrary.png';

export default function FeaturedProjects() {
    const [dimensions, setDimensions] = useState(window.screen.width);

    useEffect(() => {
        const handleResize = () => {
            setDimensions(window.screen.width);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseEnter = (e) => {
        const overlay = e.currentTarget.querySelector('.project-cover-overlay');

        overlay.style.opacity = 0;
    };

    const handleMouseLeave = (e) => {
        const overlay = e.currentTarget.querySelector('.project-cover-overlay');

        if (overlay) { // check prevents error where overlay is undefined
            overlay.style.opacity = 0.15;
        };
    };

    return (
        <div className="h-max flex flex-col mt-16 text-black dark:text-white">
            <div className="w-full">
                <h1 className="w-fit pb-1 border-b-4 [border-image:linear-gradient(to_right,#000_75%,transparent_25%)1] dark:[border-image:linear-gradient(to_right,#fff_75%,transparent_25%)1] mx-auto text-3xl sm:text-4xl">Featured Projects</h1>
            </div>
            {dimensions > '768' ? (
                <div className="flex flex-col mt-20">

                    {/* Left-aligned Project */}
                    <div className="mb-16 project-container left">
                        <div className="flex flex-row gap-14">
                            <div className="container-left">
                                <div className="project-title">
                                    <h2>Bloom Academia</h2>
                                    <h3>Self Study Webapp</h3>
                                </div>
                                <p className="text-sm xl:text-base project-description left">
                                    Bloom Academia is an innovative educational website where students can independently explore and acquire new skills through self-paced courses created by their peers. Developed as part of a collaborative project with some classmates, I took on the back-end developer role, working closely with the database developer to ensure smooth integration. I also helped complete the front end, assisting in delivering a polished and user-friendly platform.
                                </p>
                            </div>
                            <a
                                className="container-right project-cover"
                                href="https://github.com/dylanbk/bloom-academia"
                                rel="noreferrer"
                                target="_blank"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                                    <img
                                    src={bloomAcademia}
                                    alt="Project Cover"
                                    />
                                    <div className="project-cover-overlay"></div>
                            </a>
                        </div>
                        <div className="tech-stack">
                            <p>SQLite</p>
                            <p>Flask</p>
                            <p>Jinja</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Tailwind</p>
                        </div>
                    </div>
            
                    {/* Right-aligned Project */}
                    <div className="project-container right">
                        <div className="flex flex-row-reverse gap-14">
                            <div className="container-left">
                                <div className="project-title right">
                                    <h2>Arcadia Library</h2>
                                    <h3>Digital Library</h3>
                                </div>
                                <p className="text-sm xl:text-base project-description right">
                                    Arcadia Library is a web application similar to an e-commerce platform, users are able to search for books by name or ISBN and check their availability. It offers advanced features like filtering and sorting to simplify finding specific books. Administrators can manage user accounts and inventory, ensuring smooth operations and resource management.
                                </p>
                            </div>
                            <a
                                className="container-right project-cover"
                                href="https://github.com/dylanbk/arcadia-library"
                                rel="noreferrer"
                                target="_blank"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                                <img
                                src={arcadiaLibrary}
                                alt="Project Cover"
                                />
                                <div className="project-cover-overlay"></div>
                            </a>
                        </div>
                        <div className="tech-stack">
                            <p>SQLAlchemy</p>
                            <p>Flask</p>
                            <p>React</p>
                            <p>JavaScript</p>
                            <p>CSS</p>
                            <p>Tailwind</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-10 mt-12">
                    {window.addEventListener('scroll', handleFocusedProject)}
                    <div className="project-container">
                        <div className="!text-center project-title">
                            <h2>Bloom Academia</h2>
                            <h3>Self Study Webapp</h3>
                        </div>
                        <a
                            href="https://github.com/dylanbk/bloom-academia"
                            rel="noreferrer"
                            target="_blank">
                            <div className="relative">
                                <img
                                    className="project-cover-mobile"
                                    src={bloomAcademia}
                                    alt="A cover for my Bloom Academia project" />
                                <div className="project-cover-overlay-mobile"></div>
                            </div>    
                        </a>
                        <p className="text-sm project-description-mobile">
                        Bloom Academia is an innovative educational website where students can independently explore and acquire new skills through self-paced courses created by their peers. Developed as part of a collaborative project with some classmates, I took on the back-end developer role, working closely with the database developer to ensure smooth integration. I also helped complete the front end, assisting in delivering a polished and user-friendly platform.
                        </p>
                        <div className="tech-stack-mobile">
                            <p>SQLite</p>
                            <p>Flask</p>
                            <p>Jinja</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Tailwind</p>
                        </div>
                    </div>

                    <div className="project-container">
                        <div className="!text-center project-title">
                            <h2>Arcadia Library</h2>
                            <h3>Digital Library</h3>
                        </div>
                        <a
                            href="https://github.com/dylanbk/bloom-academia"
                            rel="noreferrer"
                            target="_blank">
                            <div className="relative">
                                <img
                                    className="project-cover-mobile"
                                    src={arcadiaLibrary}
                                    alt="A cover for my Bloom Academia project" />
                                <div className="project-cover-overlay-mobile"></div>
                            </div>    
                        </a>
                        <p className="text-sm project-description-mobile">
                        Arcadia Library is a web application similar to an e-commerce platform, users are able to search for books by name or ISBN and check their availability. It offers advanced features like filtering and sorting to simplify finding specific books. Administrators can manage user accounts and inventory, ensuring smooth operations and resource management.
                        </p>
                        <div className="tech-stack-mobile">
                            <p>SQLAlchemy</p>
                            <p>Flask</p>
                            <p>React</p>
                            <p>JavaScript</p>
                            <p>CSS</p>
                            <p>Tailwind</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};