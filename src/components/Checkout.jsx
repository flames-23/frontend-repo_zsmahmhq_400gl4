import React, { useMemo, useState } from 'react';

const ALGERIA_WILAYAS = [
  'أدرار','الشلف','الأغواط','أم البواقي','باتنة','بجاية','بسكرة','بشار','البليدة','البويرة','تمنراست','تبسة','تلمسان','تيارت','تيزي وزو','الجزائر','الجلفة','جيجل','سطيف','سعيدة','سكيكدة','سيدي بلعباس','عنابة','قالمة','قسنطينة','المدية','مستغانم','المسيلة','معسكر','ورقلة','وهران','البيض','إليزي','برج بوعريريج','بومرداس','الطارف','تندوف','تيسمسيلت','الوادي','خنشلة','سوق أهراس','تيبازة','ميلة','عين الدفلى','النعامة','عين تموشنت','غرداية','غليزان'
];

const citiesByWilaya = {
  'الجزائر': ['الجزائر الوسطى','باب الواد','بومرداس','زرالدة','درارية','الشراقة'],
  'وهران': ['وهران','بئر الجير','السانية','بطيوة','قديل'],
  'قسنطينة': ['قسنطينة','عين سمارة','الخروب','زيغود يوسف'],
};

const Input = ({ label, ...props }) => (
  <label className="block" dir="rtl">
    <span className="text-sm text-gray-700">{label}</span>
    <input
      className="mt-1 w-full rounded-lg border border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 px-3 py-2 bg-white outline-none"
      {...props}
    />
  </label>
);

const Select = ({ label, children, ...props }) => (
  <label className="block" dir="rtl">
    <span className="text-sm text-gray-700">{label}</span>
    <select
      className="mt-1 w-full rounded-lg border border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 px-3 py-2 bg-white outline-none"
      {...props}
    >
      {children}
    </select>
  </label>
);

const Checkout = () => {
  const [form, setForm] = useState({ name: '', phone: '', wilaya: '', city: '' });
  const cities = useMemo(() => citiesByWilaya[form.wilaya] || [], [form.wilaya]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes only
    alert(`تم استلام طلبكم:\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالولاية: ${form.wilaya}\nالمدينة/البلدية: ${form.city}`);
  };

  return (
    <section id="checkout" className="py-16 bg-white" aria-label="إتمام الشراء">
      <div className="max-w-3xl mx-auto px-6" dir="rtl">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">إتمام الشراء</h2>
        <p className="text-gray-600 mb-8">أدخل معلوماتك ليتم التواصل معك للتأكيد والتوصيل داخل الجزائر.</p>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <Input label="الاسم الكامل" name="name" value={form.name} onChange={handleChange} placeholder="مثال: محمد أمين بن يوسف" required />
          <Input label="رقم الهاتف" name="phone" value={form.phone} onChange={handleChange} placeholder="مثال: 0550 00 00 00" inputMode="tel" pattern="[0-9 +]*" required />

          <div className="grid md:grid-cols-2 gap-5">
            <Select label="الولاية" name="wilaya" value={form.wilaya} onChange={handleChange} required>
              <option value="" disabled>اختر الولاية</option>
              {ALGERIA_WILAYAS.map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </Select>

            <Select label="المدينة / البلدية" name="city" value={form.city} onChange={handleChange} disabled={!form.wilaya} required>
              <option value="" disabled>{form.wilaya ? 'اختر المدينة / البلدية' : 'اختر الولاية أولاً'}</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </Select>
          </div>

          <button type="submit" className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition">
            تأكيد الطلب
          </button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
