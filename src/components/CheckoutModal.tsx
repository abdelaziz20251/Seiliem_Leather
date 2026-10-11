import React, { useState } from 'react';
import { X, MessageCircle, ShieldCheck, CheckCircle2, AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { STORE_WHATSAPP_NUMBER } from '../data/products';
import { EGYPT_GOVERNORATES_BILINGUAL } from '../data/translations';
import type { CheckoutFormData } from '../types';

export const CheckoutModal: React.FC = () => {
  const { cart, totalAmount, isCheckoutOpen, setIsCheckoutOpen, clearCart } = useCart();
  const { t, language, isRTL, formatPrice } = useLanguage();

  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    phone: '',
    alternativePhone: '',
    governorate: language === 'en' ? 'Cairo' : 'القاهرة',
    address: '',
    notes: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [orderSent, setOrderSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [encodedUrl, setEncodedUrl] = useState('');

  if (!isCheckoutOpen) return null;

  const currentGovernorates = EGYPT_GOVERNORATES_BILINGUAL.map((g) =>
    language === 'en' ? g.en : g.ar
  );

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = t.checkoutModal.errors.nameRequired;
    }
    if (!formData.phone.trim()) {
      errors.phone = t.checkoutModal.errors.phoneRequired;
    } else if (!/^(\+?20|0)?1[0125][0-9]{8}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errors.phone = t.checkoutModal.errors.phoneInvalid;
    }
    if (!formData.address.trim()) {
      errors.address = t.checkoutModal.errors.addressRequired;
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const productsFormatted = cart
      .map((item) => {
        const itemName = language === 'en' ? (item.nameEn || item.name) : item.name;
        const col = language === 'en' ? (item.selectedColor.nameEn || item.selectedColor.name) : item.selectedColor.name;
        return `- ${itemName} | ${t.checkoutModal.waColor} ${col} | ${t.checkoutModal.waQty} ${item.quantity} | ${t.checkoutModal.waPrice} ${formatPrice(item.price * item.quantity)}`;
      })
      .join('\n');

    const fullAddress = `${formData.governorate} - ${formData.address.trim()}`;
    const altPhoneText = formData.alternativePhone.trim()
      ? `${t.checkoutModal.waAltPhone}${formData.alternativePhone.trim()})`
      : '';

    const messageTemplate =
      `${t.checkoutModal.waHeader}\n` +
      `--------------------------------\n` +
      `${t.checkoutModal.waClient} ${formData.fullName.trim()}\n` +
      `${t.checkoutModal.waPhone} ${formData.phone.trim()}${altPhoneText}\n` +
      `${t.checkoutModal.waAddress} ${fullAddress}\n` +
      `--------------------------------\n` +
      `${t.checkoutModal.waProducts}\n` +
      `${productsFormatted}\n` +
      `--------------------------------\n` +
      `${t.checkoutModal.waTotal} ${formatPrice(totalAmount)}\n` +
      `${t.checkoutModal.waNotes} ${formData.notes.trim() || t.checkoutModal.waNoNotes}`;

    const encoded = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(messageTemplate)}`;
    setEncodedUrl(encoded);

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderSent(true);
      window.open(encoded, '_blank');
    }, 450);
  };

  const handleClose = () => {
    if (orderSent) {
      clearCart();
    }
    setOrderSent(false);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-leather-darkest border-2 border-leather-brass/40 rounded-3xl overflow-hidden shadow-2xl text-leather-cream text-left rtl:text-right my-auto max-h-[94vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-leather-espresso border-b border-leather-dark flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-leather-dark text-leather-brass-light border border-leather-brass/30 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-leather-cream font-serif">
                {t.checkoutModal.title}
              </h3>
              <p className="text-xs text-leather-honey font-medium">
                {t.checkoutModal.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-xl bg-leather-dark hover:bg-leather-espresso text-leather-cream border border-leather-dark flex items-center justify-center transition-colors active:scale-90"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderSent ? (
          /* Confirmation State */
          <div className="p-6 sm:p-10 text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-emerald-950/80 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-950">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl sm:text-2xl font-black text-leather-cream font-serif">
                {t.checkoutModal.successTitle}
              </h4>
              <p className="text-xs sm:text-sm text-leather-parchment/80 max-w-md mx-auto leading-relaxed">
                {t.checkoutModal.successSub}
              </p>
            </div>

            {/* Direct Link button in case popup was blocked */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={encodedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[50px] h-13 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{t.checkoutModal.openWhatsAppBtn}</span>
              </a>

              <button
                onClick={handleClose}
                className="w-full sm:w-auto min-h-[50px] h-13 px-6 py-3.5 rounded-xl bg-leather-dark hover:bg-leather-espresso text-leather-parchment font-semibold text-sm border border-leather-brass/30 transition-colors"
              >
                {language === 'en' ? 'Return to Store' : 'العودة للمتجر وإنهاء'}
              </button>
            </div>

            {/* Order Recap */}
            <div className="p-4 bg-leather-espresso/70 rounded-2xl border border-leather-dark text-left rtl:text-right text-xs space-y-2 max-w-md mx-auto">
              <div className="font-bold text-leather-sand">
                {language === 'en' ? 'Order Summary Dispatched:' : 'ملخص ما تم إرساله:'}
              </div>
              <div className="text-leather-parchment/80">
                {formData.fullName} ({formData.phone})
              </div>
              <div className="text-leather-parchment/80">
                {formData.governorate} - {formData.address}
              </div>
              <div className="text-leather-brass-light font-bold font-mono">
                {t.checkoutModal.waTotal} {formatPrice(totalAmount)}
              </div>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-5">
            
            {/* Trust Banner */}
            <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-leather-espresso/80 border border-leather-brass/30 text-xs text-leather-sand">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="leading-relaxed">
                {t.checkoutModal.freeInspectionBadge}
              </span>
            </div>

            {/* Order Items Preview */}
            <div className="p-4 rounded-2xl bg-leather-dark/70 border border-leather-dark/90 space-y-2.5">
              <div className="text-xs font-bold text-leather-sand mb-1 flex items-center justify-between">
                <span>
                  {language === 'en' ? `Items in Order (${cart.length}):` : `المنتجات في الطلب (${cart.length}):`}
                </span>
                <span className="text-[11px] text-leather-parchment/60 font-mono">
                  {formatPrice(totalAmount)}
                </span>
              </div>
              <div className="max-h-36 overflow-y-auto space-y-2 pr-1">
                {cart.map((item) => (
                  <div key={item.uniqueKey} className="flex justify-between items-center text-xs gap-2">
                    <span className="text-leather-cream truncate max-w-[220px] sm:max-w-sm flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-leather-brass/40 inline-block flex-shrink-0"
                        style={{ backgroundColor: item.selectedColor.code }}
                      />
                      <span>{language === 'en' ? (item.nameEn || item.name) : item.name}</span>
                      <span className="text-leather-honey">
                        ({language === 'en' ? (item.selectedColor.nameEn || item.selectedColor.name) : item.selectedColor.name})
                      </span>
                      <span className="font-bold text-leather-sand">× {item.quantity}</span>
                    </span>
                    <span className="font-mono text-leather-brass-light font-bold flex-shrink-0">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2.5 border-t border-leather-dark flex justify-between items-center text-xs font-bold">
                <span className="text-leather-cream font-serif">
                  {language === 'en' ? 'Total Payable upon Delivery:' : 'الإجمالي المطلوب للدفع:'}
                </span>
                <span className="text-base sm:text-lg font-black text-leather-brass-light font-mono">
                  {formatPrice(totalAmount)}
                </span>
              </div>
            </div>

            {/* Form Inputs */}
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-leather-parchment/90 mb-1.5">
                  {t.checkoutModal.fullNameLabel}
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder={t.checkoutModal.fullNamePlaceholder}
                  className={`w-full min-h-[48px] h-12 px-4 rounded-xl bg-leather-espresso border text-base sm:text-sm text-leather-cream placeholder-leather-parchment/40 focus:outline-none focus:ring-2 focus:ring-leather-brass transition-colors ${
                    formErrors.fullName ? 'border-red-500' : 'border-leather-dark'
                  }`}
                />
                {formErrors.fullName && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{formErrors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone Numbers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-leather-parchment/90 mb-1.5">
                    {t.checkoutModal.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t.checkoutModal.phonePlaceholder}
                    className={`w-full min-h-[48px] h-12 px-4 rounded-xl bg-leather-espresso border text-base sm:text-sm text-leather-cream placeholder-leather-parchment/40 focus:outline-none focus:ring-2 focus:ring-leather-brass transition-colors ${
                      formErrors.phone ? 'border-red-500' : 'border-leather-dark'
                    }`}
                  />
                  {formErrors.phone && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{formErrors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Alternative Phone */}
                <div>
                  <label className="block text-xs font-bold text-leather-parchment/90 mb-1.5">
                    {t.checkoutModal.altPhoneLabel}
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    name="alternativePhone"
                    value={formData.alternativePhone}
                    onChange={handleInputChange}
                    placeholder={t.checkoutModal.altPhonePlaceholder}
                    className="w-full min-h-[48px] h-12 px-4 rounded-xl bg-leather-espresso border border-leather-dark text-base sm:text-sm text-leather-cream placeholder-leather-parchment/40 focus:outline-none focus:ring-2 focus:ring-leather-brass transition-colors"
                  />
                </div>
              </div>

              {/* Governorate Selector */}
              <div>
                <label className="block text-xs font-bold text-leather-parchment/90 mb-1.5">
                  {t.checkoutModal.govLabel}
                </label>
                <div className="relative">
                  <select
                    name="governorate"
                    value={formData.governorate}
                    onChange={handleInputChange}
                    className="w-full min-h-[48px] h-12 px-4 rounded-xl bg-leather-espresso border border-leather-dark text-base sm:text-sm text-leather-cream focus:outline-none focus:ring-2 focus:ring-leather-brass transition-colors cursor-pointer appearance-none"
                  >
                    {currentGovernorates.map((gov) => (
                      <option key={gov} value={gov} className="bg-leather-espresso text-leather-cream">
                        {gov}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-bold text-leather-parchment/90 mb-1.5">
                  {t.checkoutModal.addressLabel}
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder={t.checkoutModal.addressPlaceholder}
                  className={`w-full min-h-[48px] h-12 px-4 rounded-xl bg-leather-espresso border text-base sm:text-sm text-leather-cream placeholder-leather-parchment/40 focus:outline-none focus:ring-2 focus:ring-leather-brass transition-colors ${
                    formErrors.address ? 'border-red-500' : 'border-leather-dark'
                  }`}
                />
                {formErrors.address && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{formErrors.address}</span>
                  </p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-leather-parchment/90 mb-1.5">
                  {t.checkoutModal.notesLabel}
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder={t.checkoutModal.notesPlaceholder}
                  className="w-full p-3.5 rounded-xl bg-leather-espresso border border-leather-dark text-base sm:text-sm text-leather-cream placeholder-leather-parchment/40 focus:outline-none focus:ring-2 focus:ring-leather-brass transition-colors resize-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[50px] h-13 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm shadow-xl shadow-emerald-950/60 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 border border-emerald-400/40 disabled:opacity-50"
              >
                <MessageCircle className="w-5 h-5 fill-white flex-shrink-0" />
                <span>
                  {isSubmitting ? t.checkoutModal.sendingBtn : t.checkoutModal.submitBtn}
                </span>
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>

              <p className="text-[11px] text-center text-leather-sand/70">
                {t.common.inspectNotice}
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
