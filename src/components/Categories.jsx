import React from 'react';

const products = {
  men: [
    { id: 1, name: 'أريج الليل', notes: 'عود - عنبر - فلفل أسود', price: 6200 },
    { id: 2, name: 'نسيم الساحل', notes: 'حمضيات - مسك - خشب الأرز', price: 5400 },
  ],
  women: [
    { id: 3, name: 'همس السوسن', notes: 'ياسمين - سوسن - فانيلا', price: 6500 },
    { id: 4, name: 'ندى الفجر', notes: 'ورد - فواكه - مسك أبيض', price: 5600 },
  ],
};

const Card = ({ title, notes, price, tag }) => (
  <div className="group rounded-2xl border border-violet-100 bg-white p-5 shadow-sm hover:shadow-md transition">
    <div className="flex items-start justify-between">
      <div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <p className="mt-1 text-sm text-gray-600">{notes}</p>
      </div>
      <span className="text-xs px-2 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-100">{tag}</span>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <span className="font-semibold text-violet-700">{price.toLocaleString('ar-DZ')} دج</span>
      <a href="#checkout" className="text-sm text-violet-700 hover:text-violet-800">اطلب الآن</a>
    </div>
  </div>
);

const Categories = () => {
  return (
    <section id="categories" className="py-14 bg-gradient-to-b from-white to-purple-50/50" aria-label="الأقسام">
      <div className="max-w-6xl mx-auto px-6" dir="rtl">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">اختر القسم</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">رجالي</h3>
            <div className="grid gap-4">
              {products.men.map((p) => (
                <Card key={p.id} title={p.name} notes={p.notes} price={p.price} tag="رجالي" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">نسائي</h3>
            <div className="grid gap-4">
              {products.women.map((p) => (
                <Card key={p.id} title={p.name} notes={p.notes} price={p.price} tag="نسائي" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
