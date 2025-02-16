import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};