import React, { useState } from 'react';
import { ShoppingBag, Eye, Star, Check } from 'lucide-react';
import type { Product, ProductColor } from '../types';
import { useCart } from '../context/CartContext';
import { ColorSelector } from './ColorSelector';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setQuickViewProduct } = useCart();
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedColor, 1);
    setIsAddedFeedback(true);
    setTimeout(() => setIsAddedFeedback(false), 1500);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-leather-espresso rounded-3xl overflow-hidden border border-leather-brass/30 hover:border-leather-brass transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-black/70 shadow-leather">
      
      {/* Product Image Section */}
      <div
        className="relative h-64 sm:h-72 w-full overflow-hidden bg-leather-darkest cursor-pointer select-none"
        onClick={() => setQuickViewProduct(product)}
      >
        <img
          key={selectedColor.image}
          src={selectedColor.image}
          alt={`${product.name} - ${selectedColor.name}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 ease-out animate-fade-in"
          loading="lazy"
        />

        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-leather-darkest/80 via-transparent to-black/20 opacity-80 group-hover:opacity-50 transition-opacity pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end z-10">
          {product.badge && (
            <span className="bg-gradient-to-r from-leather-brass to-leather-brass-light text-leather-darkest text-xs font-black px-3 py-1 rounded-full shadow-md">
              {product.badge}
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-red-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-lg shadow">
              خصم {discountPercentage}%
            </span>
          )}
        </div>

        {/* Inspection Guarantee Tag */}
        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-[11px] text-leather-sand font-bold px-2.5 py-1 rounded-lg border border-leather-brass/30 z-10">
          معاينة وفحص قبل الاستلام
        </div>

        {/* Quick View Button on Image (Desktop & Tablet) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setQuickViewProduct(product);
          }}
          className="absolute bottom-3 left-3 bg-leather-darkest/90 hover:bg-leather-cognac text-leather-cream p-2.5 rounded-full border border-leather-brass/40 shadow-lg transition-transform active:scale-95 z-10"
          title="معاينة تفاصيل المنتج"
          aria-label="معاينة تفاصيل المنتج"
        >
          <Eye className="w-4 h-4 text-leather-brass-light" />
        </button>
      </div>

      {/* Product Content Section */}
      <div className="p-5 flex flex-col flex-grow justify-between text-right space-y-4">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between gap-2 mb-2 text-xs">
            <span className="text-leather-honey font-bold tracking-wider">
              {product.categoryName}
            </span>
            <div className="flex items-center gap-1 text-leather-brass">
              <Star className="w-3.5 h-3.5 fill-current text-leather-brass" />
              <span className="font-bold text-xs text-leather-cream">{product.rating}</span>
              <span className="text-leather-parchment/60 text-[11px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="text-base sm:text-lg font-bold text-leather-cream hover:text-leather-brass-light transition-colors cursor-pointer line-clamp-1 font-serif mb-1.5"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-leather-parchment/80 line-clamp-2 leading-relaxed mb-4">
            {product.shortDescription}
          </p>

          {/* Touch-Friendly Color Selector (Min 40px Tap Targets) */}
          <div className="pt-2 border-t border-leather-dark/60">
            <ColorSelector
              colors={product.colors}
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
              size="md"
            />
          </div>
        </div>

        {/* Pricing & Ergonomic Mobile CTA Footer */}
        <div className="pt-3 border-t border-leather-dark space-y-3">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-black text-leather-brass-light font-mono">
                {product.price.toLocaleString('ar-EG')}
              </span>
              <span className="text-xs text-leather-parchment/90 font-bold">جنيه مصري</span>
            </div>
            {product.originalPrice && (
              <span className="text-xs text-leather-parchment/50 line-through">
                {product.originalPrice.toLocaleString('ar-EG')} ج.م
              </span>
            )}
          </div>

          {/* Thumb-Friendly Buttons Row (Min Height 48px on Mobile) */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddToCart}
              className={`flex-1 min-h-[48px] h-12 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md active:scale-[0.98] ${
                isAddedFeedback
                  ? 'bg-emerald-700 text-white'
                  : 'bg-gradient-to-r from-leather-cognac-rich via-leather-cognac to-leather-tan text-white hover:shadow-leather-brass/30 border border-leather-brass/30'
              }`}
            >
              {isAddedFeedback ? (
                <>
                  <Check className="w-5 h-5 stroke-[3]" />
                  <span>تمت الإضافة للسلة!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>أضف إلى السلة</span>
                </>
              )}
            </button>

            {/* Direct Quick View button for mobile convenience */}
            <button
              onClick={() => setQuickViewProduct(product)}
              className="min-h-[48px] h-12 px-3.5 rounded-xl bg-leather-dark hover:bg-leather-espresso text-leather-sand hover:text-white border border-leather-brass/30 flex items-center justify-center transition-colors active:scale-95"
              title="تفاصيل سريعة"
              aria-label="عرض التفاصيل"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
