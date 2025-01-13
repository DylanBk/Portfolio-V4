import React from "react";
import { Link } from "react-router-dom";

import openBugForm from '../../utils/openReportForm';
import openFeedbackForm from '../../utils/openFeedbackForm';

import email_icon_light from '../../assets/email-light.svg';
import email_icon_dark from '../../assets/email-dark.svg';
import github_icon_light from '../../assets/github-light.svg';
import github_icon_dark from '../../assets/github-dark.svg';
import linkedin_icon_light from '../../assets/linkedin-light.svg';
import linkedin_icon_dark from '../../assets/linkedin-dark.svg';

export default function Footer() {
    return (
        <div
            id="footer"
            className="h-44 w-full relative flex flex-row justify-around px-2 mt-28 dark:bg-onyxBlack dark:text-white">
                <ul className="flex flex-col gap-1">
                    <h4 className="mb-1 text-lg">Pages</h4>
                    <Link
                        className="w-fit secondary-link"
                        to="/">
                        Home Page
                    </Link><Link
                        className="w-fit secondary-link"
                        to="/about">
                        About Me
                    </Link><Link
                        className="w-fit secondary-link"
                        to="/projects">
                        My Projects
                    </Link><Link
                        className="w-fit secondary-link"
                        to="/">
                        My Gallery
                    </Link>
                </ul>
                <ul className="flex flex-col gap-1">
                    <h4 className="mb-1 text-lg">Resources</h4>
                    <a
                        className="w-fit secondary-link"
                        href="/media/pdfs/CV-Dylan-Bullock.pdf"
                        target="_bank"
                        download={true}>
                        Download my CV
                    </a>
                    <a
                        className="w-fit secondary-link"
                        href="mailto:dev@dylanbullock.co.uk">
                        Send me an e-mail
                    </a>
                    <button
                        className="w-fit text-left secondary-link"
                        onClick={openBugForm}>
                        Report a bug    
                    </button>
                    <button
                        className="w-fit text-left secondary-link"
                        onClick={openFeedbackForm}>
                            Submit feedback
                    </button>
                </ul>
                <ul className="relative flex flex-col gap-1">
                    <h4 className="mb-1 text-lg text-center">Contact Me</h4>
                    <div className="flex flex-row sm:gap-2 items-center">
                        <a
                            className="flex items-center justify-center p-2 rounded-full hover:bg-gray-300 dark:hover:bg-deepBlue hover:scale-105 focus:bg-gray-300 dark:focus:bg-deepBlue focus:scale-105 transition-all duration-300"
                            href="mailto:dev@dylanbullock.co.uk"
                            rel="noreferrer"
                            target="_blank">
                            <div className="w-6 sm:w-10">
                                <picture>
                                    <source srcSet={email_icon_light} media="(prefers-color-scheme: light)" alt="Email Icon"></source>
                                    <source srcSet={email_icon_dark} media="(prefers-color-scheme: dark)" alt="Email Icon"></source>
                                    <img srcSet={email_icon_light} alt="Email Icon" />
                                </picture>
                            </div>
                        </a>
                        <a
                            className="flex items-center justify-center p-2 rounded-full hover:bg-gray-300 dark:hover:bg-deepBlue hover:scale-105 focus:bg-gray-300 dark:focus:bg-deepBlue focus:scale-105 transition-all duration-300"
                            href="https://github.com/DylanBk"
                            rel="noreferrer"
                            target="_blank">
                            <div className="w-6 sm:w-10">
                                <picture>
                                    <source srcSet={github_icon_light} media="(prefers-color-scheme: light)" alt="Github Icon"></source>
                                    <source srcSet={github_icon_dark} media="(prefers-color-scheme: dark)" alt="Github Icon"></source>
                                    <img srcSet={github_icon_light} alt="Github Icon" />
                                </picture>
                            </div>
                        </a>
                        <a
                            className="flex items-center justify-center p-2 rounded-full hover:bg-gray-300 dark:hover:bg-deepBlue hover:scale-105 focus:bg-gray-300 dark:focus:bg-deepBlue focus:scale-105 transition-all duration-300"
                            href="https://www.linkedin.com/in/DyIanBk/"
                            rel="noreferrer"
                            target="_blank">
                            <div className="w-5 sm:w-9 m-1">
                                <picture>
                                    <source srcSet={linkedin_icon_light} media="(prefers-color-scheme: light)" alt="Linkedin Icon"></source>
                                    <source srcSet={linkedin_icon_dark} media="(prefers-color-scheme: dark)" alt="Linkedin Icon"></source>
                                    <img srcSet={linkedin_icon_light} alt="Linkedin Icon" />
                                </picture>
                            </div>
                        </a>
                        {/* <a
                            className="flex items-center justify-center p-2 rounded-full hover:bg-gray-300 dark:hover:bg-deepBlue hover:scale-105 secondary-link transition-all duration-300"
                            href="https://github.com/DylanBk">
                            <div className="w-10 secondary-link">
                                <picture>
                                    <source media="(prefers-color-scheme: light)" srcSet={github_icon_light}></source>
                                    <source media="(prefers-color-scheme: dark)" srcSet={github_icon_dark}></source>
                                    <img srcSet={github_icon_light} alt="Github Icon" />
                                </picture>
                            </div>
                        </a> */}
                    </div>
                </ul>
                <small className="absolute bottom-2 dark:text-gray-300">&copy; Copyright 2025, Dylan Bullock</small>
        </div>
    );
};