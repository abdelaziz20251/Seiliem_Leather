import React, { useState } from 'react';
import { ShoppingBag, Eye, Star, Check } from 'lucide-react';
import type { Product, ProductColor } from '../types';
import { useCart } from '../context/CartContext';

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
    <div className="group relative bg-leather-espresso rounded-2xl overflow-hidden border border-leather-brass/25 hover:border-leather-brass transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-black/60">
      
      {/* Product Image Section */}
      <div
        className="relative h-72 w-full overflow-hidden bg-leather-darkest cursor-pointer"
        onClick={() => setQuickViewProduct(product)}
      >
        <img
          src={selectedColor.image}
          alt={`${product.name} - ${selectedColor.name}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-leather-darkest/70 via-transparent to-black/10 opacity-70 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
          {product.badge && (
            <span className="bg-leather-brass text-leather-darkest text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md">
              {product.badge}
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-red-800/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow">
              خصم {discountPercentage}%
            </span>
          )}
        </div>

        {/* Quick View Button (Desktop Hover) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setQuickViewProduct(product);
          }}
          className="absolute bottom-3 left-3 bg-leather-darkest/90 hover:bg-leather-cognac text-leather-cream p-2.5 rounded-full border border-leather-brass/40 shadow-lg transform transition-all duration-200 hover:scale-110"
          title="معاينة سريعة للمنتج"
          aria-label="معاينة سريعة"
        >
          <Eye className="w-4 h-4 text-leather-brass-light" />
        </button>

        {/* Inspection Before Delivery Indicator */}
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-[10px] text-leather-sand px-2 py-0.5 rounded border border-white/10">
          معاينة قبل الدفع
        </div>
      </div>

      {/* Product Content Section */}
      <div className="p-5 flex flex-col flex-grow justify-between text-right">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between gap-2 mb-2 text-xs">
            <span className="text-leather-honey font-semibold tracking-wider">
              {product.categoryName}
            </span>
            <div className="flex items-center gap-1 text-leather-brass">
              <Star className="w-3.5 h-3.5 fill-current text-leather-brass" />
              <span className="font-bold text-xs text-leather-cream">{product.rating}</span>
              <span className="text-leather-parchment/50 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="text-base font-bold text-leather-cream hover:text-leather-brass-light transition-colors cursor-pointer line-clamp-1 font-serif mb-2"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-leather-parchment/70 line-clamp-2 leading-relaxed mb-4">
            {product.shortDescription}
          </p>

          {/* Interactive Color Swatch Selector */}
          <div className="mb-4 pt-1 border-t border-leather-dark/60">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-leather-parchment/80">
                اللون المختار: <strong className="text-leather-brass-light">{selectedColor.name}</strong>
              </span>
              <span className="text-[10px] text-leather-parchment/50">({product.colors.length} ألوان)</span>
            </div>

            <div className="flex items-center gap-2">
              {product.colors.map((color, idx) => {
                const isSelected = selectedColor.name === color.name;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedColor(color);
                    }}
                    className={`relative w-7 h-7 rounded-full transition-all duration-200 border-2 ${
                      isSelected
                        ? 'border-leather-brass ring-2 ring-leather-brass/40 scale-110'
                        : 'border-leather-dark/80 hover:scale-105 opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                    aria-label={`اختيار لون ${color.name}`}
                  >
                    {isSelected && (
                      <span className="absolute inset-0 flex items-center justify-center text-white drop-shadow">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pricing & Add to Cart Footer */}
        <div className="pt-3 border-t border-leather-dark flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-black text-leather-brass-light">
                {product.price.toLocaleString('ar-EG')}
              </span>
              <span className="text-xs text-leather-parchment/70 font-bold">ج.م</span>
            </div>
            {product.originalPrice && (
              <span className="text-[11px] text-leather-parchment/50 line-through block -mt-1">
                {product.originalPrice.toLocaleString('ar-EG')} ج.م
              </span>
            )}
          </div>

          {/* Add to Cart CTA */}
          <button
            onClick={handleAddToCart}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 shadow-md ${
              isAddedFeedback
                ? 'bg-emerald-700 text-white'
                : 'bg-gradient-to-r from-leather-cognac-rich to-leather-cognac hover:from-leather-cognac hover:to-leather-tan text-white hover:shadow-leather-brass/20'
            }`}
          >
            {isAddedFeedback ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>تمت الإضافة!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>أضف للسلة</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
