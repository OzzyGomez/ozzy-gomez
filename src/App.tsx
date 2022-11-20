import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Music from "./Pages/Music";
import Videos from "./Pages/Videos";
import Photos from "./Pages/Photos";
import Bio from "./Pages/Bio";
import Contact from "./Pages/Contact";
import Recipes from "./Pages/Recipes";

const App = () => {
  return (
    <div>
      <Router basename="/">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recipes" element={<Recipes />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
