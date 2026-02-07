import React from 'react';
import Image from 'next/image';
import { Truck, Package } from 'lucide-react';

const TestimonialsStats = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f7]">
      <div className="flex flex-col lg:flex-row min-h-[400px]">
        <div className="w-full lg:w-1/2 bg-white px-8 md:px-16 py-16 md:py-24 flex flex-col justify-center border-b lg:border-b-0">
          <div className="max-w-[500px] mr-auto">
            <div className="mb-6">
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#d30a0a]">
                <path d="M11.4286 0C5.11429 0 0 5.11429 0 11.4286V32H16V11.4286H5.71429C5.71429 8.27429 8.27429 5.71429 11.4286 5.71429V0ZM35.4286 0C29.1143 0 24 5.11429 24 11.4286V32H40V11.4286H29.7143C29.7143 8.27429 32.2743 5.71429 35.4286 5.71429V0Z" fill="currentColor" fillOpacity="0.1" />
                <path d="M0 16H11V32H0V16ZM24 16H35V32H24V16Z" fill="currentColor" />
              </svg>
            </div>

            <p className="text-[18px] md:text-[20px] leading-[1.8] text-[#777777] font-normal mb-8">
              هذا بسبب خدمتهم الممتازة وأسعارهم التنافسية ودعم العملاء. إنه لمن المنعش حقاً الحصول على مثل هذه اللمسة الشخصية.
            </p>

            <div className="flex items-center gap-4">
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/icons/avatar-1-1.jpg"
                  alt="أحمد محمد"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h5 className="text-[16px] font-bold text-[#1d1d1d] uppercase tracking-wide">
                  أحمد محمد
                </h5>
                <span className="text-[13px] text-[#777777]">مؤسس مشارك</span>
              </div>
            </div>

            <div className="flex gap-2 mt-8 justify-start">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d30a0a]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#d30a0a]/30"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#d30a0a]/30"></span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col md:flex-row">
          <div className="w-full md:w-[40%] bg-[#ff6a00] p-10 md:p-12 flex flex-col justify-center items-center md:items-start text-white relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" fill="none" />
                <ellipse cx="50" cy="50" rx="20" ry="40" stroke="white" strokeWidth="0.5" fill="none" />
                <line x1="10" y1="50" x2="90" y2="50" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>
            <div className="relative z-10 text-center md:text-right w-full">
              <h3 className="text-[28px] md:text-[32px] font-bold mb-2" dir="ltr">+ 012 345 6789</h3>
              <p className="text-[14px] md:text-[16px] font-semibold text-white/90 mb-8 uppercase tracking-wider">
                نحن متفائلون نحب العمل معاً
              </p>
              <a 
                href="#" 
                className="inline-block bg-[#d30a0a] hover:bg-[#b00808] text-white font-bold text-[14px] py-3 px-8 transition-colors duration-300"
              >
                اتصل بنا
              </a>
            </div>
          </div>

          <div className="w-full md:w-[60%] bg-[#121521] flex flex-col divide-y divide-white/10 md:divide-y-0 md:flex-row">
            <div className="flex-1 p-10 md:p-12 flex flex-col items-center md:items-start justify-center border-white/10 md:border-r">
              <div className="mb-6">
                <Truck className="w-10 h-10 text-[#ff6a00]" strokeWidth={1.5} />
              </div>
              <h2 className="text-[48px] font-extrabold text-white mb-0 leading-tight">300</h2>
              <div className="mt-2 text-center md:text-right">
                <p className="text-[14px] text-white/70 mb-0 font-medium tracking-wide">فرع</p>
                <p className="text-[14px] text-white/70 mb-0 font-medium tracking-wide">حول العالم</p>
              </div>
            </div>

            <div className="flex-1 p-10 md:p-12 flex flex-col items-center md:items-start justify-center">
              <div className="mb-6">
                <Package className="w-10 h-10 text-[#ff6a00]" strokeWidth={1.5} />
              </div>
              <h2 className="text-[48px] font-extrabold text-white mb-0 leading-tight">489</h2>
              <div className="mt-2 text-center md:text-right">
                <p className="text-[14px] text-white/70 mb-0 font-medium tracking-wide">طرد</p>
                <p className="text-[14px] text-white/70 mb-0 font-medium tracking-wide">تم توصيلها</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsStats;
