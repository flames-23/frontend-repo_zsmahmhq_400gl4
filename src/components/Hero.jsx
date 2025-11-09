import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50" aria-label="القسم الرئيسي">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col items-start justify-center text-right" dir="rtl">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900">
          عبير يعبّر عنك
        </h1>
        <p className="mt-3 md:mt-5 text-gray-600 max-w-xl md:text-lg">
          عطور راقية بتصاميم عصرية للرجال والنساء. اكتشف روائح تدوم وتُكمل أناقتك اليومية.
        </p>
        <div className="mt-6 flex gap-3" role="group" aria-label="روابط سريعة">
          <a href="#categories" className="px-5 py-2.5 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition">
            استكشف العطور
          </a>
          <a href="#checkout" className="px-5 py-2.5 rounded-lg bg-white text-violet-700 ring-1 ring-violet-200 hover:ring-violet-300 transition">
            إتمام الشراء
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
