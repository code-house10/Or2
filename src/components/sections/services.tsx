import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'الشحن الجوي',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/service1-1-6.jpg',
    description: 'نقدم خدمات الشحن الجوي السريعة والموثوقة لضمان وصول بضائعكم في الوقت المحدد إلى أي مكان في العالم.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-1.1.1-1.5.5l-.3.3c-.4.4-.4 1.1 0 1.5L9 12l-5 5v2l3-1 3 1v-2l5-5 4 5.7c.3.4.8.6 1.3.6h.2c.5 0 .9-.3 1.1-.7l.3-.3c.4-.4.4-1.1 0-1.5l-.6-.6z" />
      </svg>
    ),
  },
  {
    title: 'النقل البحري',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/service1-2-7.jpg',
    description: 'خدمات النقل البحري المتميزة لشحن البضائع الكبيرة والثقيلة عبر المحيطات بأسعار تنافسية.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.2.94 4.19 2.42 5.58" />
        <path d="M12 10V4.5" />
        <path d="M8 4.5a4.5 4.5 0 1 1 9 0" />
      </svg>
    ),
  },
  {
    title: 'النقل البري',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/service1-3-8.jpg',
    description: 'شبكة واسعة من خدمات النقل البري تغطي جميع المناطق مع ضمان سلامة البضائع.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 17h4V5H2v12h3" />
        <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section id="service" className="relative py-[120px] bg-[#f7f7f7]">
      <div className="container mx-auto px-[15px] max-w-[1200px]">
        <div className="text-center mb-[60px]">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-10 h-[2px] bg-primary"></span>
            <span className="text-subtitle !mb-0">جميع خدماتنا</span>
            <span className="w-10 h-[2px] bg-primary"></span>
          </div>
          <h2 className="text-[48px] font-bold text-text-black leading-[1.2]">
            نقدم خدمات لوجستية <br /> متخصصة
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white overflow-hidden card-shadow transition-all duration-500 hover:-translate-y-2 rounded-[4px]"
            >
              <div className="relative h-[280px] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-[90px]">
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white z-20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-[#FF6A00] transition-colors duration-500 group-hover:bg-[#d30a0a] rounded-[50%_50%_0_0] translate-y-1/2 z-10 scale-x-125"></div>
                  
                  <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 z-30">
                    <div className="w-[70px] h-[70px] bg-[#d30a0a] rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 pb-8 px-8 text-center bg-white">
                <h4 className="text-[22px] font-bold text-text-black mb-4 group-hover:text-primary transition-colors duration-300">
                  <a href="#">{service.title}</a>
                </h4>
                <p className="text-text-gray text-[15px] leading-[26px]">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#f1f1f1]">
                <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
