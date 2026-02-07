"use client";

import React from 'react';
import { User, Mail } from 'lucide-react';

const OrderTrackingSection: React.FC = () => {
  return (
    <section className="relative w-full py-[60px] md:py-[100px] bg-white overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container relative z-10 px-[15px] mx-auto max-w-[1230px]">
        <div className="relative">
          <div 
            className="flex flex-col lg:flex-row items-center bg-[#ff6a00] rounded-[4px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)] overflow-hidden"
            style={{ minHeight: '144px' }}
          >
            <div className="w-full lg:w-[30%] p-[30px] md:p-[40px] flex flex-col justify-center border-b lg:border-b-0 lg:border-l border-white/10">
              <h3 className="text-white text-[24px] font-bold leading-[1.2] mb-0 font-display">
                تتبع <br /> طلبك
              </h3>
            </div>

            <div className="w-full lg:w-[70%] p-[30px] md:p-[40px] flex flex-col md:flex-row items-center gap-[20px] md:gap-[0px] bg-white/5 backdrop-blur-sm">
              <form 
                className="w-full flex flex-col md:flex-row items-center gap-[15px] md:gap-[20px]"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative w-full md:flex-1">
                  <span className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#777777]">
                    <User size={18} />
                  </span>
                  <input
                    type="text"
                    placeholder="رقم التتبع الخاص بك"
                    className="w-full h-[60px] pr-[50px] pl-[20px] bg-white border-none rounded-[4px] text-[15px] text-[#1d1d1d] focus:ring-2 focus:ring-[#d30a0a] transition-all outline-none placeholder:text-[#777777]"
                  />
                </div>

                <div className="relative w-full md:flex-1">
                  <span className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#777777]">
                    <Mail size={18} />
                  </span>
                  <input
                    type="email"
                    placeholder="بريدك الإلكتروني"
                    className="w-full h-[60px] pr-[50px] pl-[20px] bg-white border-none rounded-[4px] text-[15px] text-[#1d1d1d] focus:ring-2 focus:ring-[#d30a0a] transition-all outline-none placeholder:text-[#777777]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto h-[60px] px-[40px] bg-[#d30a0a] text-white text-[15px] font-bold uppercase tracking-[1px] rounded-[4px] hover:bg-[#b00808] transition-colors duration-300 font-display whitespace-nowrap"
                >
                  تتبع الطلب
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTrackingSection;
