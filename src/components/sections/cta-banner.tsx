import React from 'react';
import Image from 'next/image';

export default function CTABanner() {
  return (
    <section className="relative overflow-visible py-0">
      <div className="container mx-auto px-[15px]">
        <div className="relative flex flex-col md:flex-row items-center bg-[#FF6A00] min-h-[160px] rounded-[4px] overflow-visible shadow-lg">
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-[4px]">
            <svg className="absolute right-0 top-0 h-full w-full" viewBox="0 0 1000 160" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 160C200 120 400 140 600 80C800 20 1000 40 1000 40V0H0V160Z" fill="white" />
            </svg>
          </div>

          <div className="relative w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 md:py-0">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full max-w-[850px]">
              <h3 className="text-white text-[24px] md:text-[30px] lg:text-[36px] font-bold leading-tight text-center md:text-right">
                هل أنت مستعد لإرسال طردك معنا؟
              </h3>

              <div className="flex-shrink-0">
                <a href="#" className="inline-block bg-[#121521] text-white px-8 py-3 rounded-[4px] text-[15px] font-bold transition-colors duration-300 hover:bg-black whitespace-nowrap">
                  اكتشف المزيد
                </a>
              </div>
            </div>

            <div className="relative md:absolute md:left-[20px] lg:left-[60px] md:bottom-0 mt-6 md:mt-0 flex justify-center items-end">
              <div className="relative w-[280px] h-[300px] md:w-[350px] md:h-[380px] lg:w-[414px] lg:h-[432px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/feature1-1-3.png"
                  alt="رجل التوصيل يحمل طرداً"
                  width={414}
                  height={432}
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20px] md:h-[80px]" aria-hidden="true" />
    </section>
  );
}
