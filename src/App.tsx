import React, { useEffect, useState } from 'react';
import { Utensils, Theater, Instagram, Facebook, Twitter, Menu } from 'lucide-react';
import Logo from './components/Logo';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity and transform values based on scroll position
  const dayOpacity = Math.max(0, 1 - scrollPosition / 800);
  const nightOpacity = Math.min(1, (scrollPosition - 400) / 800);
  
  // Calculate sun position in an arc
  const sunProgress = Math.min(1, scrollPosition / 800);
  const sunX = Math.sin(sunProgress * Math.PI) * 50;
  const sunY = -Math.sin(sunProgress * Math.PI) * 30;

  return (
    <div className="relative w-full">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#482248]/30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Logo className="w-8 h-8" />
              <span className="ml-2 text-white font-bold text-xl">Little Stars</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#wine" className="text-white hover:text-[#FFB4EC] transition-colors">Wine</a>
              <a href="#food" className="text-white hover:text-[#FFB4EC] transition-colors">Food</a>
              <a href="#culture" className="text-white hover:text-[#FFB4EC] transition-colors">Culture</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#FFB4EC] transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#wine" className="block text-white hover:text-[#FFB4EC] transition-colors py-2">Wine</a>
                <a href="#food" className="block text-white hover:text-[#FFB4EC] transition-colors py-2">Food</a>
                <a href="#culture" className="block text-white hover:text-[#FFB4EC] transition-colors py-2">Culture</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main container that creates scrollable space */}
      <div className="relative">
        {/* Fixed background elements */}
        <div className="fixed inset-0 w-full h-screen overflow-hidden">
          {/* Day sky */}
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{ 
              opacity: dayOpacity,
              background: `linear-gradient(to bottom, 
                rgb(239, 246, 149) 0%,
                rgba(255, 180, 236, 0.6) 60%,
                rgba(72, 34, 72, 0.8) 100%)`
            }}
          >
            {/* Sun */}
            <div 
              className="absolute w-24 h-24 rounded-full blur-md"
              style={{ 
                left: `${50 + sunX}%`,
                top: `${50 + sunY}%`,
                transform: 'translate(-50%, -50%)',
                opacity: dayOpacity,
                backgroundColor: 'rgb(255, 180, 236)',
                boxShadow: '0 0 60px rgba(255, 180, 236, 0.5)'
              }}
            />
          </div>
          
          {/* Night sky */}
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{ 
              opacity: nightOpacity,
              background: `linear-gradient(to bottom,
                rgb(72, 34, 72) 0%,
                rgba(255, 180, 236, 0.3) 70%,
                rgba(72, 34, 72, 0.9) 100%)`
            }}
          />

          {/* Mountains - Furthest Back Layer */}
          <div className="absolute bottom-0 w-full h-[45%] transform"
               style={{ transform: `translateY(${scrollPosition * 0.05}px)` }}>
            <div className="absolute bottom-0 w-full h-full opacity-70"
                 style={{ 
                   backgroundColor: '#2D5A27',
                   borderRadius: '50% 50% 0 0',
                   transform: 'scaleX(2) translateY(50%)'
                 }}/>
          </div>

          {/* Mountains - Back Layer */}
          <div className="absolute bottom-0 w-full h-[40%] transform"
               style={{ transform: `translateY(${scrollPosition * 0.1}px)` }}>
            <div className="absolute bottom-0 w-full h-full opacity-80"
                 style={{ 
                   backgroundColor: '#3A7A33',
                   borderRadius: '60% 40% 0 0 / 100% 100% 0 0'
                 }}/>
          </div>

          {/* Mountains - Middle Back Layer */}
          <div className="absolute bottom-0 w-full h-[35%] transform"
               style={{ transform: `translateY(${scrollPosition * 0.15}px)` }}>
            <div className="absolute bottom-0 w-full h-full opacity-85"
                 style={{ 
                   backgroundColor: 'rgb(255, 180, 236)',
                   borderRadius: '30% 70% 0 0 / 100% 100% 0 0'
                 }}/>
          </div>

          {/* Mountains - Middle Layer */}
          <div className="absolute bottom-0 w-full h-[30%] transform"
               style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}>
            <div className="absolute bottom-0 w-full h-full opacity-90"
                 style={{ 
                   backgroundColor: '#4B9A43',
                   borderRadius: '70% 30% 0 0 / 100% 100% 0 0'
                 }}/>
          </div>

          {/* Mountains - Front Layer */}
          <div className="absolute bottom-0 w-full h-[25%] transform"
               style={{ transform: `translateY(${scrollPosition * 0.3}px)` }}>
            <div className="absolute bottom-0 w-full h-full"
                 style={{ 
                   backgroundColor: 'rgb(255, 180, 236)',
                   borderRadius: '40% 60% 0 0 / 100% 100% 0 0'
                 }}/>
          </div>

          {/* Foreground */}
          <div className="absolute bottom-0 w-full h-[15%]" style={{ backgroundColor: 'rgb(72, 34, 72)' }}/>
        </div>

        {/* Scrollable Content */}
        <div className="relative">
          {/* Hero Section */}
          <div className="h-screen flex flex-col items-center justify-center text-white">
            <Logo className="w-32 h-32 mb-4" />
            <h1 className="text-6xl font-bold mb-4 text-center">Little Stars</h1>
            <p className="text-xl mb-8 text-center">Scroll to experience day & night</p>
          </div>

          {/* Content Sections */}
          <div className="relative">
            {/* Wine Section */}
            <section id="wine" className="min-h-screen flex items-center justify-center relative">
              <div className="max-w-4xl mx-auto p-8 rounded-lg backdrop-blur-sm transform transition-all duration-500"
                   style={{ 
                     transform: `translateX(${Math.min(0, -800 + scrollPosition)}px)`,
                     opacity: Math.min(1, Math.max(0, (scrollPosition - 800) / 400)),
                     backgroundColor: 'rgba(239, 246, 149, 0.1)'
                   }}>
                <div className="flex items-center gap-4 mb-6">
                  <Logo className="w-12 h-12" />
                  <h2 className="text-4xl font-bold text-white">Wine Experience</h2>
                </div>
                <p className="text-xl text-white/90 leading-relaxed">
                  Discover the finest mountain-grown wines, carefully curated from local vineyards. 
                  Our sommeliers offer guided tastings of rare vintages and emerging labels, 
                  creating an unforgettable journey through the world of alpine wines.
                </p>
              </div>
            </section>

            {/* Food Section */}
            <section id="food" className="min-h-screen flex items-center justify-center relative">
              <div className="max-w-4xl mx-auto p-8 rounded-lg backdrop-blur-sm transform transition-all duration-500"
                   style={{ 
                     transform: `translateX(${Math.max(0, 1600 - scrollPosition)}px)`,
                     opacity: Math.min(1, Math.max(0, (scrollPosition - 1200) / 400)),
                     backgroundColor: 'rgba(239, 246, 149, 0.1)'
                   }}>
                <div className="flex items-center gap-4 mb-6">
                  <Utensils className="w-12 h-12 text-[#EFF695]" />
                  <h2 className="text-4xl font-bold text-white">Culinary Delights</h2>
                </div>
                <p className="text-xl text-white/90 leading-relaxed">
                  Experience gourmet pairings crafted by renowned mountain chefs. 
                  Each dish celebrates local ingredients and traditional recipes, 
                  elevated with modern culinary techniques and artistic presentation.
                </p>
              </div>
            </section>

            {/* Culture Section */}
            <section id="culture" className="min-h-screen flex items-center justify-center relative">
              <div className="max-w-4xl mx-auto p-8 rounded-lg backdrop-blur-sm transform transition-all duration-500"
                   style={{ 
                     transform: `translateX(${Math.min(0, -2400 + scrollPosition)}px)`,
                     opacity: Math.min(1, Math.max(0, (scrollPosition - 1600) / 400)),
                     backgroundColor: 'rgba(239, 246, 149, 0.1)'
                   }}>
                <div className="flex items-center gap-4 mb-6">
                  <Theater className="w-12 h-12 text-[#FFB4EC]" />
                  <h2 className="text-4xl font-bold text-white">Cultural Heritage</h2>
                </div>
                <p className="text-xl text-white/90 leading-relaxed">
                  Immerse yourself in mountain culture through music, art, and storytelling. 
                  Local artisans and performers share their craft, while traditional 
                  ceremonies and modern celebrations create a vibrant festival atmosphere.
                </p>
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="relative z-10">
            <div className="bg-[#482248] py-16">
              <div className="max-w-4xl w-full mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Little Stars</h3>
                    <p className="text-white/80">
                      A magical mountain wine festival under the stars.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
                    <p className="text-white/80">
                      Email: info@littlestars.com<br />
                      Phone: (555) 123-4567<br />
                      Address: Mountain Peak Valley
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      <a href="#" className="text-white hover:text-[#FFB4EC] transition-colors">
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a href="#" className="text-white hover:text-[#FFB4EC] transition-colors">
                        <Facebook className="w-6 h-6" />
                      </a>
                      <a href="#" className="text-white hover:text-[#FFB4EC] transition-colors">
                        <Twitter className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
                  © 2025 Little Stars Festival. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;