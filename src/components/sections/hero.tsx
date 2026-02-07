"use client";

import React from 'react';
import Image from 'next/image';

/**
 * Hero Section component for Lozics Logistics
 * Featuring Arabic RTL support as per global settings, 
 * full-width industrial background, animated plane, and counter.
 */
export default function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-accent min-h-[800px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/main-slider/1.jpg')`,
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Main Content Column */}
          <div className="w-full md:w-3/5 text-right rtl">
            <span className="text-subtitle mb-4 block" style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '1px' }}>
              أفضل الخدمات اللوجستية والنقل
            </span>
            
            <h1 
              className="text-white mb-8" 
              style={{ 
                fontSize: 'clamp(40px, 8vw, 70px)', 
                fontWeight: 800, 
                lineHeight: 1.1,
                fontFamily: 'var(--font-display)' 
              }}
            >
              تحريك طرودك <br /> حول <br /> العالم
            </h1>

            <div className="flex gap-4 mt-8">
              <a 
                href="/about" 
                className="bg-primary hover:bg-red-700 text-white px-8 py-4 text-sm font-bold uppercase transition-colors rounded-[var(--radius-lg)]"
                style={{ height: 'fit-content' }}
              >
                اكتشف المزيد
              </a>
            </div>
            
            {/* Animated Plane Icon */}
            <div className="hidden lg:block absolute left-[40%] top-[60%] animate-bounce">
              <div 
                className="w-[100px] h-[60px] bg-no-repeat bg-contain"
                style={{ 
                  backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/main-slider/plane-icon.png')`,
                  filter: 'invert(1) brightness(2)'
                }}
              />
            </div>
          </div>

          {/* Floating Elements Column */}
          <div className="w-full md:w-2/5 relative mt-12 md:mt-0 flex justify-center">
            {/* Trusted Counter Card */}
            <div 
              className="absolute -top-20 right-10 md:right-0 bg-white rounded-full w-40 h-40 flex flex-col items-center justify-center text-center p-4 z-20 shadow-xl border-4 border-white/20"
            >
              <span className="text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-1">موثوق من قبل</span>
              <h3 className="text-3xl font-extrabold text-navy-dark">4890</h3>
            </div>

            {/* Bus Image Overlay */}
            <div className="relative z-10 transform translate-y-10">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/bus-2.png" 
                alt="Bus Logistics" 
                width={800} 
                height={500}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Pattern or Dotted Overlay typically found in such templates */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Scroll Down Indicator (Optional but adds to the hero vibe) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>

      <style jsx global>{`
        .rtl {
          direction: rtl;
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(30px); }
        }
        .animate-bounce-x {
          animation: bounce-x 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}