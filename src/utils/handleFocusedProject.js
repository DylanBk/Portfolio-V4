export default function handleFocusedProject() {
    const viewportHeight = window.innerHeight;
    const projects = Array.from(document.querySelectorAll('.project-container-mobile'));
    const bounds = [30, 80];

    projects.forEach(p => {
        const {top, bottom} = p.getBoundingClientRect();
        const mid = ((top + bottom) / 2) / viewportHeight * 100; // the first part gets the midpoint in px, the second part converts the value to a percentage which works better across different devices
        const isFocused = mid > bounds[0] && mid < bounds[1]; // set isFocused if the midpoint is between the upper/lower bounds
        const overlay = p.querySelector('.project-cover-overlay-mobile');

        if (isFocused) {
            overlay.style.opacity = 0;
        } else {
            overlay.style.opacity = 0.3;
        };
    });
};