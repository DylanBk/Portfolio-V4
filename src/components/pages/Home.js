import React, { useEffect, useRef } from "react";

import Header from "../layout/Header";
import AbilitiesSection from "../layout/AbilitiesSection";
import ReportBugForm from "../layout/ReportBugForm";
import Footer from "../layout/Footer";

import typingEffect from "../../utils/slowType";

export default function Home() {
    const effectRan = useRef(false);

    useEffect(() => {
        if (!effectRan.current) {
            typingEffect();
            effectRan.current = true;
        }
    }, []);

    return (
        <div
            id="home"
            className="bg-almostWhite dark:bg-onyxBlack">
                <Header />

                <div
                    id="slow-type-container"
                    className="h-full w-fit ml-7 mt-4 sm:mt-8 md:mt-20 xl:mt-40 text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white select-none smooth-change">
                    <p>Hey there, my name's <span className="text-midBlue">Dylan.</span></p>
                    <p>I'm a <span
                        id="slow-type-section"
                        className="bg-gradient-to-r from-midBlue to-midPurple bg-clip-text text-transparent"></span>
                    </p>
                    <p>based in the <span className="text-darkBlue">United Kingdom</span></p>
                </div>

                {/* <div
                    id="download-cv-btn-container"
                    className="absolute left-1/2 md:left-3/4 top-96 md:top-1/2 flex items-center justify-center -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 select-none smooth-change">
                    <div className="h-full w-full absolute left-1/2 top-1/2 -inset-2 rounded-full bg-gradient-to-br from-midBlue to-midPurple blur -translate-x-1/2 -translate-y-1/2 smooth-change"></div>
                    <a
                        id="download-cv-btn"
                        className="w-max relative p-4 rounded-full bg-gradient-to-br from-midBlue to-midPurple text-sm sm:text-lg text-onyxBlack font-bold font-fira-code hover:scale-105 smooth-change"
                        href="/media/pdfs/CV-Dylan-Bullock.pdf"
                        target="_blank"
                        download={true}>Download CV</a>
                </div> */}

                <AbilitiesSection />
                <ReportBugForm />
                <Footer />
        </div>
    )
};