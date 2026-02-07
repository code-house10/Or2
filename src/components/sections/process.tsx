import React from 'react';
import Image from 'next/image';
import { Check, Package } from 'lucide-react';

const ProcessSection = () => {
  return (
    <section className="relative py-[120px] bg-white overflow-hidden" id="about-details">
      <div className="container mx-auto px-[15px]">
        <div className="flex flex-wrap -mx-[15px] items-center">
          <div className="w-full lg:w-1/2 px-[15px] mb-[50px] lg:mb-0">
            <div className="relative pr-[30px]">
              <div className="mb-[15px]">
                <div className="flex items-center gap-[10px] mb-[10px]">
                  <span className="w-[12px] h-[12px] rounded-full bg-[#ff6a00] block"></span>
                  <span className="text-[14px] font-bold text-[#ff6a00] uppercase tracking-[1px]">
                    مرحباً بكم
                  </span>
                </div>
                <h2 className="text-[48px] font-bold text-[#1d1d1d] leading-[1.2] mb-[25px]">
                  نقدم مجموعة كاملة <br /> من خدمات النقل
                </h2>
              </div>
              
              <p className="text-[#777777] text-[16px] leading-[1.7] mb-[35px]">
                نوفر حلول نقل شاملة ومتكاملة تغطي جميع احتياجاتكم اللوجستية، من التخزين إلى التوصيل النهائي، بأعلى معايير الجودة والأمان.
              </p>

              <div className="flex items-start gap-[20px] mb-[40px] p-[20px] bg-white border-r-4 border-[#ff6a00] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
                <div className="flex-shrink-0 mt-[5px]">
                  <div className="p-[10px] bg-[#f7f7f7] rounded-[4px]">
                    <Package className="w-[30px] h-[30px] text-[#ff6a00]" />
                  </div>
                </div>
                <div>
                  <h5 className="text-[18px] font-bold text-[#d30a0a] leading-[1.4] mb-[5px]">
                    يمكن لفريقنا مساعدتكم في تحويل أعمالكم من خلال أحدث القدرات التقنية.
                  </h5>
                </div>
              </div>

              <ul className="space-y-[15px]">
                {[
                  "حلول نقل عاجلة",
                  "خدمات عالية الجودة بأسعار معقولة",
                  "فريق عمل موثوق وذو خبرة"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-[12px] text-[#1d1d1d] font-semibold">
                    <div className="w-[20px] h-[20px] flex items-center justify-center rounded-full border border-[#ff6a00]">
                      <Check className="w-[12px] h-[12px] text-[#ff6a00]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-[15px]">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-[4px]">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/about2-1-19.jpg" 
                  alt="عامل المستودع" 
                  width={600} 
                  height={500}
                  className="w-full h-auto object-cover"
                />
                
                <div className="absolute right-0 bottom-0 top-0 w-[40px] bg-[#d30a0a] flex items-center justify-center">
                  <span className="whitespace-nowrap rotate-90 text-white font-bold text-[14px] uppercase tracking-widest">
                    ننقل منتجاتكم عبر الحدود
                  </span>
                </div>
              </div>

              <div className="absolute -right-[30px] -bottom-[30px] w-[200px] h-[200px] bg-[#f7f7f7] -z-10 rounded-[4px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
