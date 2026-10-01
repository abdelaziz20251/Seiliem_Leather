import React from 'react';
import { Check } from 'lucide-react';
import type { ProductColor } from '../types';

interface ColorSelectorProps {
  colors: ProductColor[];
  selectedColor: ProductColor;
  onSelectColor: (color: ProductColor) => void;
  size?: 'md' | 'lg';
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  selectedColor,
  onSelectColor,
  size = 'md'
}) => {
  const swatchSizeClass = size === 'lg' ? 'w-11 h-11 min-w-[44px] min-h-[44px]' : 'w-10 h-10 min-w-[40px] min-h-[40px]';

  return (
    <div className="space-y-2.5">
      {/* Selected Color Text Badge */}
      <div className="flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="text-leather-parchment/80 font-medium">اللون المختار:</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-leather-dark border border-leather-brass/40 text-leather-sand font-bold">
            <span
              className="w-2.5 h-2.5 rounded-full border border-white/30"
              style={{ backgroundColor: selectedColor.code }}
            />
            <span>{selectedColor.name}</span>
          </span>
        </div>
        <span className="text-[11px] text-leather-parchment/60 font-mono">
          ({colors.length} ألوان متوفرة)
        </span>
      </div>

      {/* Touch-Friendly Swatches (Min 40px x 40px) */}
      <div className="flex items-center gap-3 flex-wrap">
        {colors.map((color, idx) => {
          const isSelected = selectedColor.name === color.name;
          return (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectColor(color);
              }}
              className={`relative ${swatchSizeClass} rounded-full transition-all duration-200 border-2 flex items-center justify-center cursor-pointer touch-manipulation focus:outline-none ${
                isSelected
                  ? 'border-white ring-2 ring-offset-2 ring-offset-leather-darkest ring-amber-500 scale-110 shadow-lg shadow-black/60'
                  : 'border-leather-dark/90 hover:border-leather-brass/60 hover:scale-105 opacity-85 hover:opacity-100'
              }`}
              style={{ backgroundColor: color.code }}
              title={color.name}
              aria-label={`اختيار اللون ${color.name}`}
            >
              {isSelected && (
                <span className="flex items-center justify-center text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] animate-fade-in">
                  <Check className="w-5 h-5 stroke-[3]" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
