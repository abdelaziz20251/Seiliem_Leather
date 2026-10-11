import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { ProductGrid } from './components/ProductGrid';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductQuickView } from './components/ProductQuickView';
import { NotificationToast } from './components/NotificationToast';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FloatingSocialDock } from './components/FloatingSocialDock';
import { SocialPopup } from './components/SocialPopup';
import { StickyMobileCartBar } from './components/StickyMobileCartBar';

const AppContent: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <div
      className={`min-h-screen bg-leather-cream text-leather-espresso flex flex-col ${
        isRTL ? 'font-cairo' : 'font-sans'
      } selection:bg-leather-brass selection:text-white overflow-x-hidden w-full relative`}
    >
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Trust Badges */}
        <TrustBadges />

        {/* Master Product Showcase & Color Studio */}
        <ProductGrid />

        {/* Handcraft & Quality Story */}
        <CraftsmanshipSection />

        {/* Customer Reviews */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Drawers, Modals & Floating CTA */}
      <CartDrawer />
      <CheckoutModal />
      <ProductQuickView />
      <NotificationToast />
      <FloatingWhatsApp />
      <FloatingSocialDock />
      <SocialPopup />
      <StickyMobileCartBar />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </LanguageProvider>
  );
};

export default App;
