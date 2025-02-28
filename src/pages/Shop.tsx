import React from 'react';
import Logo from '../components/Logo';
import { useTranslation } from 'react-i18next';

function Shop() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EFF695] via-[#FFB4EC] to-[#96C9F4]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex items-center gap-4 mb-8">
          <Logo className="w-12 h-12" />
          <h1 className="text-4xl font-bold text-[#0D1633]">{t('pages.shop.title')}</h1>
        </div>
        
        {/* Placeholder for Printify Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <p className="text-[#0D1633]">{t('pages.shop.comingSoon')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
