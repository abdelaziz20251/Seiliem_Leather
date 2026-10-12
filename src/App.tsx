import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { ProductCarousel } from './components/ProductCarousel';
import { ProductDetailPage } from './components/ProductDetailPage';
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
  const [currentView, setCurrentView] = useState<'landing' | 'product'>('landing');
  const [selectedProductColorIndex, setSelectedProductColorIndex] = useState<number>(0);

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#product') || hash.startsWith('#/product')) {
        setCurrentView('product');
      } else {
        setCurrentView('landing');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToView = (view: 'landing' | 'product') => {
    setCurrentView(view);
    if (view === 'product') {
      window.location.hash = '#product';
    } else {
      window.location.hash = '#hero';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductFromCarousel = (colorIndex?: number) => {
    setSelectedProductColorIndex(colorIndex ?? 0);
    setCurrentView('product');
    window.location.hash = '#product';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen bg-leather-cream text-leather-espresso flex flex-col ${
        isRTL ? 'font-cairo' : 'font-sans'
      } selection:bg-leather-brass selection:text-white overflow-x-hidden w-full relative`}
    >
      {/* Navigation Bar */}
      <Navbar currentView={currentView} onNavigate={navigateToView} />

      {/* Main Content */}
      <main className="flex-grow">
        {currentView === 'landing' ? (
          <>
            {/* Hero Section */}
            <Hero onNavigate={navigateToView} />

            {/* Trust Badges */}
            <TrustBadges />

            {/* Master Product Showcase & Marketing Carousel (Mobile No-Scroll Fit) */}
            <ProductCarousel onSelectProduct={handleSelectProductFromCarousel} />

            {/* Handcraft & Quality Story */}
            <CraftsmanshipSection />

            {/* Customer Reviews */}
            <Testimonials />

            {/* Frequently Asked Questions */}
            <FAQSection />
          </>
        ) : (
          /* Dedicated Product Page */
          <ProductDetailPage
            initialColorIndex={selectedProductColorIndex}
            onBackToHome={() => navigateToView('landing')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Drawers, Modals & Floating Tools */}
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
