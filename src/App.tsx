import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Music from './Pages/Music';
import Videos from './Pages/Videos';
import Photos from './Pages/Photos';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Recipes from './Pages/Recipes';
import Recipe from './Pages/Recipe';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Projects from './Pages/Projects';
import ChicagoRankings from './Pages/ChicagoRankings';

library.add(fab, fas, far);

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

const App = () => {
  return (
    <HashRouter basename="/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/music" element={<Music />} />
        <Route path="/projects/videos" element={<Videos />} />
        <Route path="/projects/photos" element={<Photos />} />
        <Route path="/projects/recipes" element={<Recipes />} />
        <Route path="/projects/recipe/:id" element={<Recipe />} />
        <Route
          path="/projects/chicago-rankings"
          element={<ChicagoRankings />}
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
