"use client";

import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="absolute inset-y-0 left-0 w-full lg:w-[40%] overflow-hidden pointer-events-none opacity-30 lg:opacity-100 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/about2-1-19.jpg"
          alt="عامل بجهاز لوحي"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-[1200px]">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-8">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[600px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/choose1-1-24.png"
                alt="رسم توضيحي لرافعة شوكية"
                width={740}
                height={550}
                className="w-full h-auto object-contain"
              />
              
              <div className="absolute top-[10%] right-[10%] bg-white rounded-full w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center shadow-xl border border-gray-100 p-2 text-center animate-bounce-slow">
                <span className="text-[10px] sm:text-[12px] font-bold uppercase text-gray-500 tracking-wider">موثوق من قبل</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#121521]">4890</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-right">
            <div className="mb-8">
              <span className="text-[14px] font-bold uppercase text-[#ff6a00] tracking-[2px] mb-3 block">
                لماذا تختارنا
              </span>
              <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.2] text-[#1D1D1D] mb-6">
                نخلق فرصاً <br /> للوصول إلى الإمكانات
              </h2>
              <p className="text-[18px] font-semibold text-[#d30a0a] mb-8 leading-[1.6]">
                بسّط احتياجات الشحن واللوجستيات الخاصة بك <br className="hidden md:block" /> بنهج شخصي.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-[#ff6a00] rounded-[4px] flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#1D1D1D] mb-2 leading-tight">السلامة والموثوقية</h3>
                  <p className="text-[15px] text-[#777777] leading-[1.7] max-w-[380px]">
                    نضمن أعلى معايير السلامة والموثوقية في جميع عمليات النقل والتخزين.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-[#ff6a00] rounded-[4px] flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#1D1D1D] mb-2 leading-tight">الشحن حول العالم</h3>
                  <p className="text-[15px] text-[#777777] leading-[1.7] max-w-[380px]">
                    شبكة عالمية واسعة تمكننا من الشحن إلى أي مكان في العالم بكفاءة عالية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
