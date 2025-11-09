import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-violet-100" dir="rtl">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-violet-600" />
          <span className="font-semibold text-gray-900">رِوَاق</span>
        </div>
        <ul className="flex items-center gap-6 text-sm text-gray-700">
          <li><a className="hover:text-violet-700" href="#home">الرئيسية</a></li>
          <li><a className="hover:text-violet-700" href="#categories">الأقسام</a></li>
          <li><a className="hover:text-violet-700" href="#checkout">إتمام الشراء</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
