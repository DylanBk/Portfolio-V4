import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Gallery from './components/pages/Gallery';

function App() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/index' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/gallery' element={<Gallery />} />
    </Routes>
  );
}

export default App;