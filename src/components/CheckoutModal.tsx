import React, { useState } from 'react';
import { X, MessageCircle, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { CheckoutFormData } from '../types';
import { STORE_WHATSAPP_NUMBER } from '../data/products';

export const CheckoutModal: React.FC = () => {
  const { cart, isCheckoutOpen, setIsCheckoutOpen, totalAmount, clearCart } = useCart();

  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    phone: '',
    alternativePhone: '',
    governorate: 'القاهرة',
    address: '',
    notes: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [orderSent, setOrderSent] = useState(false);
  const [encodedUrl, setEncodedUrl] = useState('');

  if (!isCheckoutOpen) return null;

  const EGYPT_GOVERNORATES = [
    'القاهرة',
    'الجيزة',
    'الإسكندرية',
    'القليوبية',
    'الدقهلية',
    'الشرقية',
    'الغربية',
    'المنوفية',
    'البحيرة',
    'كفر الشيخ',
    'دمياط',
    'بورسعيد',
    'الإسماعيلية',
    'السويس',
    'الفيوم',
    'بني سويف',
    'المنيا',
    'أسيوط',
    'سوهاج',
    'قنا',
    'الأقصر',
    'أسوان',
    'البحر الأحمر',
    'مطروح',
    'محافظة أخرى'
  ];

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'يرجى كتابة الاسم بالكامل لتسجيل البوليصة';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'رقم الهاتف مطلوب لتواصل مندوب الشحن';
    } else if (!/^(\+?20|0)?1[0125][0-9]{8}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errors.phone = 'يرجى إدخال رقم هاتف مصري صحيح (مثال: 01012345678)';
    }
    if (!formData.address.trim()) {
      errors.address = 'يرجى إدخال العنوان بالتفصيل (اسم الشارع، رقم العمارة، الشقة)';
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

    // Formulate products list string according to exact user prompt template
    const productsFormatted = cart
      .map(
        (item) =>
          `- ${item.name} | اللون: ${item.selectedColor.name} | الكمية: ${item.quantity} | السعر: ${(item.price * item.quantity).toLocaleString('ar-EG')} EGP`
      )
      .join('\n');

    const fullAddress = `${formData.governorate} - ${formData.address.trim()}`;
    const altPhoneText = formData.alternativePhone.trim() ? ` (هاتف بديل: ${formData.alternativePhone.trim()})` : '';

    // Formulate exact template required by prompt
    const messageTemplate =
      `🛍️ طلب جديد من Selim Leather\n` +
      `--------------------------------\n` +
      `👤 اسم العميل: ${formData.fullName.trim()}\n` +
      `📞 الهاتف: ${formData.phone.trim()}${altPhoneText}\n` +
      `📍 العنوان: ${fullAddress}\n` +
      `--------------------------------\n` +
      `📦 المنتجات المطلوبة:\n` +
      `${productsFormatted}\n` +
      `--------------------------------\n` +
      `💰 الإجمالي: ${totalAmount.toLocaleString('ar-EG')} جنيه مصري\n` +
      `📝 ملاحظات: ${formData.notes.trim() || 'لا توجد ملاحظات إضافية'}`;

    const encoded = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(messageTemplate)}`;
    setEncodedUrl(encoded);
    setOrderSent(true);

    // Open WhatsApp in new tab
    window.open(encoded, '_blank');
  };

  const handleClose = () => {
    if (orderSent) {
      clearCart();
    }
    setOrderSent(false);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-leather-darkest border border-leather-brass/40 rounded-3xl overflow-hidden shadow-2xl text-leather-cream text-right my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-leather-espresso border-b border-leather-dark flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-leather-dark text-leather-brass-light border border-leather-brass/30">
              <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-leather-cream font-serif">
                إتمام الطلب وتأكيد الشحن
              </h3>
              <p className="text-xs text-leather-honey">
                طلب مباشر عبر واتساب • الدفع عند الاستلام بعد المعاينة
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-lg bg-leather-dark hover:bg-leather-espresso text-leather-cream border border-leather-dark transition-colors"
            aria-label="إغلاق نافذة الدفع"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderSent ? (
          /* Confirmation State */
          <div className="p-8 sm:p-10 text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-emerald-950/80 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-950">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-black text-leather-cream font-serif">
                تم تجهيز وإرسال تفاصيل طلبك بنجاح!
              </h4>
              <p className="text-sm text-leather-parchment/80 max-w-md mx-auto leading-relaxed">
                تم فتح تطبيق واتساب لإرسال بيانات الطلب إلى خدمة عملاء سليم للجلود. سيتم مراجعة الطلب وتأكيد موعد الشحن فوراً.
              </p>
            </div>

            {/* Direct Link button in case popup was blocked */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={encodedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>إعادة فتح محادثة واتساب</span>
              </a>

              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-leather-dark hover:bg-leather-espresso text-leather-parchment font-semibold text-sm border border-leather-brass/30 transition-colors"
              >
                العودة للمتجر وإنهاء
              </button>
            </div>

            {/* Order Recap */}
            <div className="p-4 bg-leather-espresso/70 rounded-2xl border border-leather-dark text-right text-xs space-y-2 max-w-md mx-auto">
              <div className="font-bold text-leather-sand">ملخص ما تم إرساله:</div>
              <div className="text-leather-parchment/80">العميل: {formData.fullName} ({formData.phone})</div>
              <div className="text-leather-parchment/80">العنوان: {formData.governorate} - {formData.address}</div>
              <div className="text-leather-brass-light font-bold font-mono">
                الإجمالي: {totalAmount.toLocaleString('ar-EG')} ج.م (شامل المعاينة)
              </div>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Trust Banner */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-leather-espresso/60 border border-leather-brass/25 text-xs text-leather-sand">
              <ShieldCheck className="w-5 h-5 text-leather-brass flex-shrink-0" />
              <span>
                <strong>معاينة وفحص 100%:</strong> لا تدفع أي مبالغ الآن، الدفع نقداً عند استلام الطرد وفحصه مع المندوب.
              </span>
            </div>

            {/* Order Items Preview */}
            <div className="p-4 rounded-xl bg-leather-dark/60 border border-leather-dark/80 space-y-2">
              <div className="text-xs font-bold text-leather-sand mb-1">
                المنتجات في الطلب ({cart.length}):
              </div>
              <div className="max-h-32 overflow-y-auto space-y-1.5 pr-1">
                {cart.map((item) => (
                  <div key={item.uniqueKey} className="flex justify-between items-center text-xs">
                    <span className="text-leather-cream truncate max-w-[220px] sm:max-w-xs">
                      • {item.name} ({item.selectedColor.name}) × {item.quantity}
                    </span>
                    <span className="font-mono text-leather-brass-light font-bold">
                      {(item.price * item.quantity).toLocaleString('ar-EG')} ج.م
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-leather-dark flex justify-between items-center text-xs font-bold">
                <span className="text-leather-cream">الإجمالي المطلوب:</span>
                <span className="text-sm font-black text-leather-brass-light font-mono">
                  {totalAmount.toLocaleString('ar-EG')} جنيه مصري
                </span>
              </div>
            </div>

            {/* Fields Grid */}
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-leather-parchment/90 mb-1.5">
                  الاسم بالكامل <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="مثال: أحمد عبد الله السليم"
                  className={`w-full px-4 py-3 rounded-xl bg-leather-espresso border text-sm text-leather-cream placeholder-leather-parchment/30 focus:outline-none focus:ring-2 focus:ring-leather-brass transition-colors ${
                    formErrors.fullName ? 'border-red-500' : 'border-leather-dark'
                  }`}
                />
                {formErrors.fullName && (
                  <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone Numbers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-leather-parchment/90 mb-1.5">
                    رقم الهاتف المحمول (واتساب) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    dir="ltr"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="01012345678"
                    className={`w-full px-4 py-3 rounded-xl bg-leather-espresso border text-sm text-leather-cream text-right placeholder-leather-parchment/30 focus:outline-none focus:ring-2 focus:ring-leather-brass transition-colors ${
                      formErrors.phone ? 'border-red-500' : 'border-leather-dark'
                    }`}
                  />
                  {formErrors.phone && (
                    <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Alternative Phone */}
                <div>
                  <label className="block text-xs font-semibold text-leather-parchment/90 mb-1.5">
                    رقم هاتف بديل (اختياري)
                  </label>
                  <input
                    type="tel"
                    dir="ltr"
                    name="alternativePhone"
                    value={formData.alternativePhone}
                    onChange={handleInputChange}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-leather-espresso border border-leather-dark text-sm text-leather-cream text-right placeholder-leather-parchment/30 focus:outline-none focus:ring-2 focus:ring-leather-brass transition-colors"
                  />
                </div>
              </div>

              {/* Governorate Selection */}
              <div>
                <label className="block text-xs font-semibold text-leather-parchment/90 mb-1.5">
                  المحافظة <span className="text-red-400">*</span>
                </label>
                <select
                  name="governorate"
                  value={formData.governorate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-leather-espresso border border-leather-dark text-sm text-leather-cream focus:outline-none focus:ring-2 focus:ring-leather-brass transition-colors"
                >
                  {EGYPT_GOVERNORATES.map((gov) => (
                    <option key={gov} value={gov}>
                      {gov}
                    </option>
                  ))}
                </select>
              </div>

              {/* Detailed Address */}
              <div>
                <label className="block text-xs font-semibold text-leather-parchment/90 mb-1.5">
                  العنوان التفصيلي للشحن <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="المنطقة، اسم الشارع، رقم العمارة، رقم الشقة، علامة مميزة"
                  className={`w-full px-4 py-3 rounded-xl bg-leather-espresso border text-sm text-leather-cream placeholder-leather-parchment/30 focus:outline-none focus:ring-2 focus:ring-leather-brass transition-colors ${
                    formErrors.address ? 'border-red-500' : 'border-leather-dark'
                  }`}
                />
                {formErrors.address && (
                  <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.address}</span>
                  </p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-leather-parchment/90 mb-1.5">
                  ملاحظات خاصة بالتسليم أو مواعيد مفضلة (اختياري)
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="مثال: يرجى التوصيل بعد الساعة 4 عصراً، أو الاتصال قبل الحضور بساعة..."
                  className="w-full px-4 py-2.5 rounded-xl bg-leather-espresso border border-leather-dark text-sm text-leather-cream placeholder-leather-parchment/30 focus:outline-none focus:ring-2 focus:ring-leather-brass transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                id="submit-whatsapp-order-btn"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-950/50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>إرسال وتأكيد الطلب عبر واتساب الآن</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-leather-parchment/60 mt-2">
                بالضغط على الزر، سيتم فتح محادثة رسمية مع فريق المبيعات لتأكيد شحنتك فوراً.
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
