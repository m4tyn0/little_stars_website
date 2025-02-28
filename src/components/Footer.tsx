import { Instagram, Facebook, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 overflow-hidden">
      <div className="bg-[#eff695] w-screen">
        <div className="max-w-4xl mx-auto px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">{t('hero.title')}</h3>
              <p className="text-black/80">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-4">{t('footer.contact.title')}</h3>
              <p className="text-black/80">
                {t('footer.contact.email')}<br />
                {t('footer.contact.phone')}<br />
                {t('footer.contact.address')}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-4">{t('footer.social.title')}</h3>
              <div className="flex gap-4">
                <a href="#" className="text-black hover:text-[#FFB4EC] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-black hover:text-[#FFB4EC] transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-black hover:text-[#FFB4EC] transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-black/10 text-center text-black/60">
            {t('footer.copyright')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer; 