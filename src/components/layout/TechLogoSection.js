import React, { useEffect, useState, useCallback } from "react";

export default function TechLogoSection() {
    // SCREEN SIZE LOGIC
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

// LOGO TYPE LOGIC
    const [logos, setLogos] = useState([]);

    const updateLogos = useCallback((isDark) => { //useCallback stops function from rendering unecessarily by caching it
        const baseLogos = [
            "/media/images/html5.svg",
            "/media/images/css3.svg",
            "/media/images/tailwindcss.svg",
            "/media/images/react.svg",
            "/media/images/javascript.svg",
            "/media/images/nodedotjs.svg",
            "/media/images/jinja.svg",
            "/media/images/python.svg",
            "/media/images/sqlite.svg",
        ];

        const themeLogos = isDark
            ? ["/media/images/express-dark.svg", "/media/images/flask-dark.svg"]
            : ["/media/images/express-light.svg", "/media/images/flask-light.svg"];

        setLogos([...baseLogos, ...themeLogos]);
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        updateLogos(mediaQuery.matches);

        const handleChange = (e) => updateLogos(e.matches);

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [updateLogos]);

    return (
        <div className="bg-almostWhite dark:bg-onyxBlack select-none">
            {!isScreenWide ? (
                <div className="flex flex-col items-center mt-10">
                    <div className="flex">
                        <img src={logos[0]} alt="HTML5" className="h-16 w-16 tech-logo-mobile" />
                    </div>
                    <div className="flex">
                        <img src={logos[1]} alt="CSS3" className="h-16 w-16 tech-logo-mobile" />
                        <img src={logos[2]} alt="Tailwind CSS" className="h-16 w-16 tech-logo-mobile" />
                    </div>
                    <div className="flex">
                        <img src={logos[3]} alt="React" className="h-16 w-16 tech-logo-mobile" />
                        <img src={logos[4]} alt="JavaScript" className="h-16 w-16 tech-logo-mobile" />
                        <img src={logos[5]} alt="Node.js" className="h-16 w-16 tech-logo-mobile" />
                    </div>
                    <div className="flex">
                        <img src={logos[6]} alt="Jinja" className="h-16 w-16 tech-logo-mobile" />
                        <img src={logos[7]} alt="Python" className="h-16 w-16 tech-logo-mobile" />
                        <img src={logos[8]} alt="SQLite" className="h-16 w-16 tech-logo-mobile" />
                    </div>
                    <div className="flex">
                        <img src={logos[9]} alt="Express" className="h-16 w-16 tech-logo-mobile" />
                        <img src={logos[10]} alt="Flask" className="h-16 w-16 tech-logo-mobile" />
                    </div>
                </div>
            ) : (
                <div className="w-1/2 flex flex-row items-center">
                    <div className="flex flex-col">
                        <div className="gradient-border">
                            <img src={logos[0]} alt="HTML5" className="h-16 w-16 tech-logo m-auto" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="gradient-border">
                            <img src={logos[1]} alt="CSS3" className="h-16 w-16 tech-logo" />
                        </div>
                        <div className="gradient-border">
                            <img src={logos[2]} alt="Tailwind CSS" className="h-16 w-16 tech-logo" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="gradient-border">
                            <img src={logos[3]} alt="React" className="h-16 w-16 tech-logo" />
                        </div>
                        <div className="gradient-border">
                            <img src={logos[4]} alt="JavaScript" className="h-16 w-16 tech-logo" />
                        </div>
                        <div className="gradient-border">
                            <img src={logos[5]} alt="Node.js" className="h-16 w-16 tech-logo" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="gradient-border">
                            <img src={logos[6]} alt="Jinja" className="h-16 w-16 tech-logo" />
                        </div>
                        <div className="gradient-border">
                            <img src={logos[7]} alt="Python" className="h-16 w-16 tech-logo" />
                        </div>
                        <div className="gradient-border">
                            <img src={logos[8]} alt="SQLite" className="h-16 w-16 tech-logo" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="gradient-border">
                            <img src={logos[9]} alt="Express" className="h-16 w-16 tech-logo" />
                        </div>
                        <div className="gradient-border">
                            <img src={logos[10]} alt="Flask" className="h-16 w-16 tech-logo" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
