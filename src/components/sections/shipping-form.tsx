"use client";

import React from 'react';
import Image from 'next/image';
import { Check, ChevronDown } from 'lucide-react';

const ShippingForm: React.FC = () => {
  return (
    <section id="contact" className="relative w-full bg-[#fdfaf5] overflow-hidden lg:pt-0 pt-16">
      <div className="container mx-auto px-0 md:px-4 lg:px-0 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-stretch">
          
          <div className="w-full lg:w-1/2 bg-[#d30a0a] relative p-8 md:p-12 lg:p-16 text-white z-10">
            <div className="absolute -left-16 bottom-0 w-48 h-48 hidden xl:block">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/bus-2.png" 
                alt="شاحنة" 
                width={200} 
                height={200}
                className="object-contain"
              />
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium">الاسم الكامل:</label>
                <input 
                  type="text" 
                  className="w-full bg-white text-gray-800 px-4 py-3 border-none outline-none rounded-none focus:ring-2 focus:ring-[#ff6a00]" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">البريد الإلكتروني:</label>
                  <input 
                    type="email" 
                    className="w-full bg-white text-gray-800 px-4 py-3 border-none outline-none rounded-none focus:ring-2 focus:ring-[#ff6a00]" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">رقم الهاتف:</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white text-gray-800 px-4 py-3 border-none outline-none rounded-none focus:ring-2 focus:ring-[#ff6a00]" 
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span>المسافة (أميال):</span>
                  <span>0 - 1000</span>
                </div>
                <div className="relative h-1 bg-white/30 rounded-full">
                  <div className="absolute right-0 top-0 h-full w-3/4 bg-[#ff6a00] rounded-full"></div>
                  <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#ff6a00] rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">نوع الشحن:</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white text-gray-600 px-4 py-3 border-none outline-none rounded-none focus:ring-2 focus:ring-[#ff6a00]">
                      <option>اختر</option>
                      <option>شحن جوي</option>
                      <option>نقل بحري</option>
                      <option>نقل بري</option>
                    </select>
                    <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">الحمولة:</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white text-gray-600 px-4 py-3 border-none outline-none rounded-none focus:ring-2 focus:ring-[#ff6a00]">
                      <option>اختر</option>
                      <option>خفيفة</option>
                      <option>متوسطة</option>
                      <option>ثقيلة</option>
                    </select>
                    <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-fit bg-[#121521] hover:bg-[#1d1d1d] text-white font-bold py-4 px-10 transition-colors uppercase text-sm tracking-wider"
              >
                إرسال الطلب
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col md:flex-row items-stretch bg-[#fdfaf5]">
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[#d30a0a]"></div>
                <span className="text-[#d30a0a] text-xs font-bold uppercase tracking-widest">تواصل معنا الآن</span>
              </div>
              
              <h2 className="text-[42px] leading-[1.1] font-bold text-[#121521] mb-6">
                تحكم كامل في عمليات الشحن
              </h2>
              
              <p className="text-[#777777] text-base leading-relaxed mb-8">
                نقدم لكم حلول شحن متكاملة مع إمكانية التتبع المباشر والتحكم الكامل في جميع مراحل عملية النقل.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-start group">
                  <div className="w-12 h-12 rounded-full bg-[#ff6a00] flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-200">
                    <Check className="w-6 h-6 stroke-[3px]" />
                  </div>
                  <h4 className="text-[#121521] font-bold text-sm leading-tight">تتبع <br/>سهل</h4>
                </div>
                
                <div className="flex flex-col items-start group">
                  <div className="w-12 h-12 rounded-full bg-[#ff6a00] flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-200">
                    <Check className="w-6 h-6 stroke-[3px]" />
                  </div>
                  <h4 className="text-[#121521] font-bold text-sm leading-tight">مستودعات <br/>متعددة</h4>
                </div>
                
                <div className="flex flex-col items-start group">
                  <div className="w-12 h-12 rounded-full bg-[#ff6a00] flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-200">
                    <Check className="w-6 h-6 stroke-[3px]" />
                  </div>
                  <h4 className="text-[#121521] font-bold text-sm leading-tight">عملية <br/>سريعة</h4>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 relative min-h-[400px]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/project1-3-21.jpg" 
                alt="عمال المستودع" 
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShippingForm;
