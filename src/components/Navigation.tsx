import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleSectionClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'cs' ? 'en' : 'cs';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#EFF695] backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <Logo className="w-20 h-20 mt-6" />
            </Link>
            <Link 
              to="/"
              className="ml-2 text-[#0D1633] hover:text-[#FFB4EC] transition-colors font-bold text-xl cursor-pointer hero-title"
            >
              Little Stars
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#wine" onClick={handleSectionClick('wine')} className="text-[#0D1633] hover:text-[#FFB4EC] transition-colors">{t('navigation.wine')}</a>
            <a href="#food" onClick={handleSectionClick('food')} className="text-[#0D1633] hover:text-[#FFB4EC] transition-colors">{t('navigation.food')}</a>
            <a href="#culture" onClick={handleSectionClick('culture')} className="text-[#0D1633] hover:text-[#FFB4EC] transition-colors">{t('navigation.culture')}</a>
            <Link to="/shop" className="text-[#0D1633] hover:text-[#FFB4EC] transition-colors">{t('navigation.shop')}</Link>
            <Link to="/winemakers" className="text-[#0D1633] hover:text-[#FFB4EC] transition-colors">{t('navigation.winemakers')}</Link>
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[#0D1633] hover:text-[#FFB4EC] transition-colors font-medium"
            >
              {i18n.language === 'cs' ? (
                <>
                  <ReactCountryFlag countryCode="GB" svg />
                  <span>EN</span>
                </>
              ) : (
                <>
                  <ReactCountryFlag countryCode="CZ" svg />
                  <span>CZ</span>
                </>
              )}
            </button>
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
              <a href="#wine" onClick={handleSectionClick('wine')} className="block text-[#0D1633] hover:text-[#FFB4EC] transition-colors py-2">{t('navigation.wine')}</a>
              <a href="#food" onClick={handleSectionClick('food')} className="block text-[#0D1633] hover:text-[#FFB4EC] transition-colors py-2">{t('navigation.food')}</a>
              <a href="#culture" onClick={handleSectionClick('culture')} className="block text-[#0D1633] hover:text-[#FFB4EC] transition-colors py-2">{t('navigation.culture')}</a>
              <Link to="/shop" className="block text-[#0D1633] hover:text-[#FFB4EC] transition-colors py-2">{t('navigation.shop')}</Link>
              <Link to="/winemakers" className="block text-[#0D1633] hover:text-[#FFB4EC] transition-colors py-2">{t('navigation.winemakers')}</Link>
              
              {/* Language Switcher in Mobile Menu */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 w-full text-left text-[#0D1633] hover:text-[#FFB4EC] transition-colors py-2"
              >
                {i18n.language === 'cs' ? (
                  <>
                    <ReactCountryFlag countryCode="GB" svg />
                    <span>English</span>
                  </>
                ) : (
                  <>
                    <ReactCountryFlag countryCode="CZ" svg />
                    <span>Čeština</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation; 