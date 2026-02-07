import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-[120px] bg-white overflow-hidden">
      <div className="container mx-auto px-[15px]">
        <div className="flex flex-wrap -mx-[15px]">
          {/* Content Column */}
          <div className="w-full lg:w-1/2 px-[15px] mb-[50px] lg:mb-0">
            <div className="relative pr-[40px]">
              <div className="mb-[10px]">
                <span className="text-[#FF6A00] text-[14px] font-[700] uppercase tracking-[1px] relative inline-block before:content-[''] before:absolute before:right-[-30px] before:top-1/2 before:-translate-y-1/2 before:w-[20px] before:h-[2px] before:bg-[#FF6A00]">
                  مرحباً بكم
                </span>
              </div>
              <h2 className="text-[#1D1D1D] text-[48px] font-[700] leading-[1.2] mb-[25px]">
                نقدم مجموعة كاملة <br /> من خدمات النقل
              </h2>
              <p className="text-[#777777] text-[16px] leading-[1.7] mb-[35px]">
                نحن نقدم حلول نقل متكاملة تلبي جميع احتياجاتكم اللوجستية بأعلى معايير الجودة والكفاءة، مع ضمان وصول شحناتكم بأمان وفي الوقت المحدد.
              </p>

              <div className="space-y-[15px] mb-[40px]">
                <div className="flex items-center gap-[15px]">
                  <div className="flex items-center justify-center w-[20px] h-[20px] text-[#FF6A00]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[#1D1D1D] font-[600] text-[16px]">حلول نقل عاجلة</span>
                </div>
                <div className="flex items-center gap-[15px]">
                  <div className="flex items-center justify-center w-[20px] h-[20px] text-[#FF6A00]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[#1D1D1D] font-[600] text-[16px]">خدمات عالية الجودة بأسعار معقولة</span>
                </div>
                <div className="flex items-center gap-[15px]">
                  <div className="flex items-center justify-center w-[20px] h-[20px] text-[#FF6A00]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[#1D1D1D] font-[600] text-[16px]">فريق عمل موثوق وذو خبرة</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-[30px]">
                <div className="relative group">
                  <a 
                    href="#discover" 
                    className="inline-block bg-[#D10A0A] text-white px-[35px] py-[15px] rounded-[4px] font-[700] text-[14px] uppercase tracking-[1px] shadow-lg transition-all duration-300 hover:bg-[#B00808]"
                  >
                    اكتشف المزيد
                  </a>
                </div>

                <div className="flex items-center p-[15px] ring-1 ring-[#e5e5e5] rounded-[4px] bg-white max-w-[210px]">
                  <div className="icon-container ml-[15px]">
                    <svg className="w-[45px] h-[45px] text-[#D10A0A]" viewBox="0 0 64 64" fill="none" stroke="currentColor">
                        <path d="M32 32c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zM12 52c0-11.046 8.954-20 20-20s20 8.954 20 20" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h6 className="text-[#1D1D1D] text-[14px] font-[700] mb-[2px]">تعرف على وكلائنا الخبراء</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-1/2 px-[15px]">
            <div className="relative flex gap-[20px]">
              <div className="relative w-1/2">
                <div className="relative rounded-[4px] overflow-hidden">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/about1-1-4.jpg" 
                    alt="عمليات المستودعات" 
                    width={280} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute left-[-25px] bottom-[50px] w-[50px] h-[100px] bg-[#D10A0A] rounded-r-full z-10 hidden sm:block" />
              </div>

              <div className="relative w-1/2 pt-[50px]">
                <div className="relative rounded-[4px] overflow-hidden">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/about1-2-5.jpg" 
                    alt="عمليات المستودعات" 
                    width={280} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="absolute left-[-60px] bottom-[30px] bg-white p-[25px] rounded-[4px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)] flex items-center gap-[15px] min-w-[200px] z-20">
                  <span className="text-[#FF6A00] text-[48px] font-[800] leading-none">89+</span>
                  <div className="text-[#777777] text-[13px] font-[600] leading-[1.3] uppercase tracking-[0.5px]">
                    موقع <br /> حول العالم
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
