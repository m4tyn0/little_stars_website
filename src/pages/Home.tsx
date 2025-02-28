import React from 'react';
import { Utensils, Theater, Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from '../components/Logo';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BubbleText from '../components/BubbleText';
import Footer from '../components/Footer';
import '../fonts.css';


// Update the blob generation function to create smoother shapes
const generateBlobPath = (seed: number) => {
  const radius = 200; // Increased radius
  const points = 12; // More points for smoother shape
  const slice = (Math.PI * 2) / points;
  // Reduced randomness for smoother transitions
  const randomRange = (base: number) => base + (Math.random() - 0.5) * 30;

  const points_array = [];
  // Generate points
  for (let i = 0; i <= points; i++) {
    const angle = slice * i;
    const x = randomRange(Math.cos(angle) * radius);
    const y = randomRange(Math.sin(angle) * radius);
    points_array.push([x, y]);
  }

  // Create smooth path
  let path = `M ${points_array[0][0]},${points_array[0][1]} `;
  
  // Use cubic bezier curves for smoother transitions
  for (let i = 0; i < points_array.length - 1; i++) {
    const current = points_array[i];
    const next = points_array[i + 1];
    const midX = (current[0] + next[0]) / 2;
    const midY = (current[1] + next[1]) / 2;
    path += `Q ${current[0]},${current[1]} ${midX},${midY} `;
  }
  
  path += 'Z';
  return path;
};

function Home({ scrollPosition }: { scrollPosition: number }) {
  const { t } = useTranslation();
  
  const progress = Math.min(1, scrollPosition / 600);
  
  // Calculate sun position in an arc
  const sunX = 75 - (Math.sin(progress * Math.PI) * 50);
  const sunY = -30 + (progress * 120);

  // Interpolate colors based on scroll progress
  const topColor = `rgb(
    ${239 - (239-255) * progress}, 
    ${246 - (246-180) * progress}, 
    ${149 - (149-236) * progress}
  )`;

  return (
    <div className="relative">
      {/* Fixed background elements */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden">
        {/* Sky background */}
        <div 
          className="absolute inset-0 transition-[background] duration-300"
          style={{ 
            background: `linear-gradient(to bottom, 
              ${topColor} 0%,
              rgba(255, 180, 236, 0.8) 60%,
              rgb(106, 128, 185) 100%)`
          }}
        >
          {/* Sun */}
          <div 
            className="absolute w-24 h-24 rounded-full blur-md transition-opacity duration-300"
            style={{ 
              left: `${50 + sunX}%`,
              top: `${50 + sunY}%`,
              transform: 'translate(-50%, -50%)',
              opacity: 1 - progress,
              backgroundColor: 'rgb(255, 180, 236)',
              boxShadow: '0 0 60px rgba(255, 180, 236, 0.5)'
            }}
          />
        </div>

        {/* Mountain Container - Add max-w-full */}
        <div className="absolute inset-0 overflow-hidden max-w-full">
          {/* Mountains - Furthest Back Layer */}
          <div className="absolute bottom-0 w-[150%] h-[45%] transform left-[-25%]"
               style={{ transform: `translate(${scrollPosition * 0.02}px, ${scrollPosition * 0.05}px)` }}>
            <div className="absolute bottom-0 w-full h-full opacity-70"
                 style={{ 
                   backgroundColor: '#2D5A27',
                   borderRadius: '65% 35% 0 0 / 100% 100% 0 0',
                   transform: 'translateX(-10%)'
                 }}/>
          </div>

          {/* Mountains - Back Layer */}
          <div className="absolute bottom-0 w-[140%] h-[40%] transform left-[-20%]"
               style={{ transform: `translate(${scrollPosition * -0.03}px, ${scrollPosition * 0.1}px)` }}>
            <div className="absolute bottom-0 w-full h-full opacity-80"
                 style={{ 
                   backgroundColor: '#3A7A33',
                   borderRadius: '45% 55% 0 0 / 100% 100% 0 0',
                   transform: 'translateX(15%)'
                 }}/>
          </div>

          {/* Mountains - Middle Back Layer */}
          <div className="absolute bottom-0 w-[160%] h-[35%] transform left-[-30%]"
               style={{ transform: `translate(${scrollPosition * 0.04}px, ${scrollPosition * 0.15}px)` }}>
            <div className="absolute bottom-0 w-full h-full opacity-85"
                 style={{ 
                   backgroundColor: 'rgb(255, 180, 236)',
                   borderRadius: '25% 75% 0 0 / 100% 100% 0 0',
                   transform: 'translateX(-20%)'
                 }}/>
          </div>

          {/* Mountains - Middle Layer */}
          <div className="absolute bottom-0 w-[130%] h-[30%] transform left-[-15%]"
               style={{ transform: `translate(${scrollPosition * -0.05}px, ${scrollPosition * 0.2}px)` }}>
            <div className="absolute bottom-0 w-full h-full opacity-90"
                 style={{ 
                   backgroundColor: '#4B9A43',
                   borderRadius: '70% 30% 0 0 / 100% 100% 0 0',
                   transform: 'translateX(10%)'
                 }}/>
          </div>

          {/* Mountains - Front Layer */}
          <div className="absolute bottom-0 w-[140%] h-[25%] transform left-[-20%]"
               style={{ transform: `translate(${scrollPosition * 0.03}px, ${scrollPosition * 0.3}px)` }}>
            <div className="absolute bottom-0 w-full h-full"
                 style={{ 
                   backgroundColor: 'rgb(255, 180, 236)',
                   borderRadius: '35% 65% 0 0 / 100% 100% 0 0',
                   transform: 'translateX(5%)'
                 }}/>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="relative">
        {/* Hero Section */}
        <div className="h-[70vh] flex flex-col items-center justify-center text-white">
          <Logo className="w-40 h-40" />
          <h1 className="text-6xl font-bold mb-4 text-center hero-title text-black">{t('hero.title')}</h1>
          <p className="text-xl mb-8 text-center">{t('hero.subtitle')}</p>
        </div>

        {/* Content Sections */}
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Wine Section */}
          <section id="wine" className="min-h-[60vh] flex items-center">
            <div className="w-full max-w-[45%]">
              <BubbleText
                title={t('sections.wine.title')}
                icon={<Logo />}
                color="#FFB4EC"
              >
                {t('sections.wine.description')}
              </BubbleText>
            </div>
          </section>

          {/* Food Section */}
          <section id="food" className="min-h-[60vh] flex items-center justify-end -mt-32">
            <div className="w-full max-w-[45%]">
              <BubbleText
                title={t('sections.food.title')}
                icon={<Utensils className="text-[#EFF695]" />}
                color="#EFF695"
              >
                {t('sections.food.description')}
              </BubbleText>
            </div>
          </section>

          {/* Culture Section */}
          <section id="culture" className="min-h-[60vh] flex items-center -mt-32">
            <div className="w-full max-w-[45%] ml-[10%]">
              <BubbleText
                title={t('sections.culture.title')}
                icon={<Theater className="text-[#FFB4EC]" />}
                color="#4B9A43"
              >
                {t('sections.culture.description')}
              </BubbleText>
            </div>
          </section>
        </div>

        {/* Footer - Replace footer div with Footer component */}
        <Footer />
      </div>
    </div>
  );
}

export default Home; 