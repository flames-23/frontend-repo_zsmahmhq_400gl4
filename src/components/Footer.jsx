import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gradient-to-t from-purple-50 to-white" dir="rtl">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-gray-600">
        <p>© {new Date().getFullYear()} رِوَاق للعطور. جميع الحقوق محفوظة.</p>
        <p>
          للتواصل: <a className="text-violet-700 hover:underline" href="tel:+213">+213</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
