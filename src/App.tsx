import React from 'react';
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

export const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-leather-cream text-leather-espresso flex flex-col font-cairo selection:bg-leather-brass selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />

          {/* Trust Badges */}
          <TrustBadges />

          {/* Product Grid & Categories */}
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
      </div>
    </CartProvider>
  );
};

export default App;
