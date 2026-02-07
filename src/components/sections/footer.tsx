"use client";

import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Send, MapPin, Phone, Clock, MoveRight } from 'lucide-react';

const Footer = () => {
  const galleryThumbs = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/gallery-thumb-1-29.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/gallery-thumb-2-30.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/gallery-thumb-1-29.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/gallery-thumb-2-30.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/gallery-thumb-1-29.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/gallery-thumb-2-30.jpg"
  ];

  return (
    <footer className="relative bg-[#121521] overflow-hidden" dir="rtl">
      {/* Contact Boxes Section */}
      <div className="container relative -mt-16 z-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-[#1d1d1d] border border-white/5 shadow-2xl">
          {/* Address Box */}
          <div className="flex items-center p-8 border-l border-white/10 hover:bg-[#252525] transition-colors group">
            <div className="w-14 h-14 rounded-lg bg-orange-600/10 flex items-center justify-center ml-4 group-hover:bg-orange-600 transition-colors">
              <MapPin className="text-orange-600 w-7 h-7 group-hover:text-white" />
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-1">العنوان</h4>
              <p className="text-gray-400 text-sm mb-0 leading-relaxed">30 St Kilda Road, Jackson Store, Australia</p>
            </div>
          </div>
          {/* Contact Box */}
          <div className="flex items-center p-8 border-l border-white/10 hover:bg-[#252525] transition-colors group">
            <div className="w-14 h-14 rounded-lg bg-orange-600/10 flex items-center justify-center ml-4 group-hover:bg-orange-600 transition-colors">
              <Phone className="text-orange-600 w-7 h-7 group-hover:text-white" />
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-1">اتصل بنا</h4>
              <p className="text-gray-400 text-sm mb-0 leading-relaxed">needhelp@company.com<br />+92 (8800) 48720</p>
            </div>
          </div>
          {/* Timing Box */}
          <div className="flex items-center p-8 hover:bg-[#252525] transition-colors group">
            <div className="w-14 h-14 rounded-lg bg-orange-600/10 flex items-center justify-center ml-4 group-hover:bg-orange-600 transition-colors">
              <Clock className="text-orange-600 w-7 h-7 group-hover:text-white" />
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-1">المواعيد</h4>
              <p className="text-gray-400 text-sm mb-0 leading-relaxed">السبت - الخميس: 8ص - 5م،<br />الجمعة: مغلق</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-16 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/logo-3-28.png" 
                alt="Lozics logo" 
                width={150} 
                height={40}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-7">
              نحن نعمل بشغف لمواجهة التحديات وخلق حلول جديدة ومبتكرة في قطاع النقل والخدمات اللوجستية.
            </p>
            <a href="#" className="inline-flex items-center justify-center px-8 py-3 bg-[#d30a0a] text-white font-bold text-sm tracking-widest rounded-sm hover:bg-black transition-all">
              عن الشركة
            </a>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white text-xl font-bold mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-12 after:h-[2px] after:bg-orange-600">الخدمات</h3>
            <ul className="space-y-4">
              {['الموثوقية والمواعيد', 'وكالة معتمدة', 'تخزين المستودعات', 'تتبع الوقت الفعلي', 'تسعير شفاف'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-orange-600 text-sm flex items-center group">
                    <span className="ml-2 transition-transform group-hover:-translate-x-1">«</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Column */}
          <div>
            <h3 className="text-white text-xl font-bold mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-12 after:h-[2px] after:bg-orange-600">المشاريع</h3>
            <div className="grid grid-cols-3 gap-2">
              {galleryThumbs.map((url, idx) => (
                <div key={idx} className="relative group aspect-square overflow-hidden rounded-sm">
                  <Image 
                    src={url} 
                    alt={`Gallery thumbnail ${idx + 1}`} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-orange-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoveRight className="text-white w-5 h-5 -rotate-45" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-white text-xl font-bold mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-12 after:h-[2px] after:bg-orange-600">النشرة البريدية</h3>
            <p className="text-gray-400 text-sm leading-7 mb-6">
              اشترك في نشرتنا البريدية للحصول على آخر التحديثات والأخبار.
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="البريد الإلكتروني....." 
                className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white text-sm focus:outline-none focus:border-orange-600 transition-colors"
              />
              <button className="absolute left-0 top-0 bottom-0 px-4 bg-orange-600 hover:bg-[#d30a0a] transition-colors flex items-center justify-center">
                <Send className="text-white w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#0b0d14] py-6 border-t border-white/5">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-12 h-12 bg-orange-600 flex items-center justify-center -mr-4 absolute right-0 bottom-0 md:relative">
               <span className="text-white text-xs font-bold -rotate-90">TOP</span>
            </div>
            <p className="text-gray-500 text-sm mb-0">جميع الحقوق محفوظة © 2024 بواسطة Company.com</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-4 h-4 fill-current" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook className="w-4 h-4 fill-current" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
            {/* Pinterest replacement */}
            <a href="#" className="text-gray-500 hover:text-white transition-colors font-bold text-sm">P</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;