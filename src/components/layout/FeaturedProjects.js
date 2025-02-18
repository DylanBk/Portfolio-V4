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

    const projects = [
        {
            align: 'left',
            name: 'Bloom Academia',
            summary: 'Self Study Webapp',
            description: 'Bloom Academia is an innovative educational website where students can independently explore and acquire new skills through self-paced courses created by their peers. Developed as part of a collaborative project with some classmates, I took on the back-end developer role, working closely with the database developer to ensure smooth integration. I also helped complete the front end, assisting in delivering a polished and user-friendly platform.',
            url: 'https://github.com/DylanBk/bloom-academia',
            cover: bloomAcademia,
            coverAlt: 'A screenshot taken of a page from the website',
            techStack: ['SQLite', 'Flask', 'Jinja', 'HTML', 'CSS', 'TailwindCSS', 'JavaScript']
        },
        {
            align: 'right',
            name: 'Arcadia Library',
            summary: 'Digital Library',
            description: 'Arcadia Library is a web application similar to an e-commerce platform, users are able to search for books by name or ISBN and check their availability. It offers advanced features like filtering and sorting to simplify finding specific books. Administrators can manage user accounts and inventory, ensuring smooth operations and resource management.',
            url: 'https://github.com/dylanbk/arcadia-library',
            cover: arcadiaLibrary,
            coverAlt: 'Some books and a lamp on a wooden desk',
            techStack: ['SQLAlchemy', 'Flask', 'JavaScript', 'React', 'CSS', 'TailwindCSS']
        }
    ];

    const Projects = () => {
        return (
            projects.map((project) => {
                const order = project.align === 'left' ? 'flex-row' : 'flex-row-reverse'

                return (
                    <section key={project.name} className={`mb-16 project-container ${project.align}`}>
                        <div className={`flex ${order} gap-14`}>
                            <div className={`container-left project-text ${project.align}`}>
                                <div className={`project-title ${project.align}`}>
                                    <h2 className="-mb-3 text-3xl xl:text-4xl">{project.name}</h2>
                                    <h3 className="text-xl">{project.summary}</h3>
                                </div>
                                <p className={`text-sm xl:text-base project-description ${project.align}`}>
                                    {project.description}
                                </p>
                            </div>
                            <a
                                className={`container-right project-cover right`}
                                href={project.url}
                                rel="noreferrer"
                                target="_blank"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                                <img src={project.cover} alt={project.coverAlt} />
                                <div className="project-cover-overlay" />
                            </a>
                        </div>
                        <ul className="tech-stack">
                            {project.techStack.map(tech => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </section>
                )
            })
        );
    };

    const MobileProjects = () => {
        return (
            projects.map(project => (
                <section key={project.name} className="project-container-mobile">
                    <div className="!text-center project-title">
                        <h2 className="text-3xl">{project.name}</h2>
                        <h3 className="text-xl">{project.summary}</h3>
                    </div>
                    <a
                        href={project.url}
                        rel="noreferrer"
                        target="_blank">
                        <div className="relative">
                            <img
                                className="rounded-md project-cover-mobile"
                                src={project.cover}
                                alt={project.coverAlt}
                            />
                            <div className="project-cover-overlay-mobile"></div>
                        </div>
                    </a>
                    <p className="text-sm project-description-mobile">
                        {project.description}
                    </p>
                    <ul className="tech-stack-mobile">
                        {project.techStack.map(tech => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </section>
            ))
        );
    };

    return (
        <main className="h-max flex flex-col mt-16 text-black dark:text-white">

            <h1 className="w-fit pb-1 border-b-gradient mx-auto text-3xl sm:text-4xl">Featured Projects</h1>

            {dimensions > '768' ? (
                <div className="flex flex-col mt-20">
                    <Projects />
                </div>
            ) : (
                <div className="flex flex-col gap-10 mt-5" onScroll={handleFocusedProject}>
                    <MobileProjects />
                </div>
            )}
        </main>
    );
};