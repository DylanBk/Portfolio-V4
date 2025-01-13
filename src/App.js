import React, {useEffect, useRef, useState} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './index.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';

export default function App() {
  // const [isScreenWide, setIsScreenWide] = useState(window.innerWidth > 640);
  // const location = useLocation();
  // const prevPath = useRef(location.pathname);
  // const [direction, setDirection] = useState(null); // default is left because home page is default page & first in array


  // useEffect(() => {
  //   window.addEventListener('resize', () => { setIsScreenWide(window.innerWidth > 640) });

  //   if (isScreenWide && location.pathname !== prevPath.current) {
  //     const pages = ['/', '/index', '/about', '/projects', '/gallery'];
  //     const currPath = location.pathname;

  //     if (prevPath.current && prevPath.current !== currPath) {
  //       const prevIndex = pages.indexOf(prevPath.current);
  //       const currIndex = pages.indexOf(currPath);
  //       let dir;

  //       if (prevPath.current < 2) { // first 2 path are / and /index so set both to left
  //         dir = 'left';
  //         setDirection('left');
  //       } else if (prevPath.current === pages.length - 1) { // set direction to right on last page
  //         dir = 'right';
  //         setDirection('right');
  //       } else {
  //         dir = currIndex > prevIndex ? 'left' : 'right';
  //         setDirection(dir);
  //       };

  //       console.log(`dir: ${dir}, curr: ${currPath} ${currIndex}, prev: ${prevPath.current} ${prevIndex}`)
  //     };

  //     prevPath.current = currPath;
  // }
  //   return () => window.removeEventListener('resize', () => setIsScreenWide(window.innerWidth > 640)); // unmount event listener to prevent memory leaks
  // }, [location.pathname]); // runs when path updates

  // const Page = ({ children, direction }) => { // allows pages to slide horizontally when changing
  //   const perc1 = direction === 'left' ? '100%' : '-100%';
  //   const perc2 = direction === 'left' ? '-100%' : '100%';
  //   console.log(`direction: ${direction}, perc1: ${perc1}, perc2: ${perc2}`)

  //   return (
  //     isScreenWide ? ( // only work on larger screens that have no burgermenu
  //       <motion.div
  //         initial={{ x: perc1 }} //
  //         animate={{ x: 0 }} // Slide to the center
  //         exit={{ x: perc2 }}
  //         transition={{ duration: 0.3 }}
  //         style={{ position: "absolute", width: "100%" }} // Ensures full-screen slides
  //       >
  //         {children}
  //       </motion.div>
  //     ) : (
  //       <div>{children}</div> // render non-animated pages instead
  //     )
  //   );
  // };

  // return (
  //   <AnimatePresence mode='wait'>
  //     <Routes location={location} key={location.pathname}>
  //       <Route path='' element={<Page direction={direction}><Home /></Page>} />
  //       <Route path='/index' element={<Page direction={direction}><Home /></Page>} />
  //       <Route path='/about' element={<Page direction={direction}><About /></Page>} />
  //       <Route path='/projects' element={<Page direction={direction}><Projects /></Page>} />
  //     </Routes>
  //   </AnimatePresence>
  // );

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/index' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
};