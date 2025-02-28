import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Shop from './pages/Shop';
import Winemakers from './pages/Winemakers';
import Home from './pages/Home';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home scrollPosition={scrollPosition} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/winemakers" element={<Winemakers />} />
      </Routes>
    </div>
  );
}

export default App;
