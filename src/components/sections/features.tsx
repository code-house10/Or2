import React from 'react';
import Image from 'next/image';

const Features = () => {
  const featureCards = [
    {
      id: '01',
      title: 'تحسين التكاليف',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      id: '02',
      title: 'تقليل وقت النقل',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      id: '03',
      title: 'عمليات المستودعات',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-[#121521] py-[100px] overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-15">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px]">
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative">
            <div className="relative">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/feature1-1-3.png"
                alt="خدمة التوصيل"
                width={500}
                height={600}
                className="object-contain"
              />
              <div className="absolute top-[20%] right-[-20px] bg-[#FF6A00] w-[80px] h-[80px] rounded-full flex items-center justify-center border-4 border-[#121521]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 text-white">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="mb-10 text-right lg:text-right">
              <h3 className="text-white text-[28px] lg:text-[36px] font-bold leading-tight mb-4 font-display">
                نهدف فقط للمساهمة بشكل جيد في نجاح أعمالكم
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
              {featureCards.map((card) => (
                <div 
                  key={card.id} 
                  className="bg-white group relative pt-[60px] pb-[35px] px-[25px] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 rounded-[4px] shadow-lg"
                >
                  <span className="absolute top-5 left-5 text-[24px] font-bold text-[#E5E5E5] group-hover:text-[#FF6A00] transition-colors duration-300">
                    {card.id}
                  </span>
                  
                  <div className="absolute -top-[35px] bg-[#D30A0A] w-[70px] h-[70px] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {card.icon}
                  </div>

                  <h5 className="text-[#1D1D1D] text-[18px] font-bold mt-4 font-display transition-colors duration-300 group-hover:text-[#D30A0A]">
                    {card.title}
                  </h5>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-4 justify-start">
              <div className="flex -space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/icons/avatar-1-1.jpg" alt="صورة" width={40} height={40} />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/icons/avatar-2-2.jpg" alt="صورة" width={40} height={40} />
                </div>
              </div>
              <p className="text-[#777777] text-[14px] font-medium m-0">
                موثوق من قبل <span className="text-white font-bold">89,000+</span>. ننقل طرودكم حول العالم
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
