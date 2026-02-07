import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/project1-1-23.jpg",
    category: "لوجستيات",
    title: "احصل على النقل المتخصص"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/project1-2-20.jpg",
    category: "لوجستيات",
    title: "احصل على النقل المتخصص"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/project1-3-21.jpg",
    category: "لوجستيات",
    title: "احصل على النقل المتخصص"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/project1-4-22.jpg",
    category: "لوجستيات",
    title: "احصل على النقل المتخصص"
  }
];

const Portfolio = () => {
  return (
    <section id="project" className="section-padding bg-white overflow-hidden">
      <div className="container px-[15px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-[50px]">
          <div className="text-right">
            <span className="text-subtitle font-bold text-[#ff6a00] text-[14px] uppercase tracking-[1px] mb-[10px] block relative before:content-[''] before:inline-block before:w-[15px] before:h-[2px] before:bg-[#d30a0a] before:ml-[10px] before:align-middle">
              معرض الأعمال
            </span>
            <h2 className="text-[48px] font-bold text-[#1d1d1d] mt-0 mb-0 leading-[1.2]">
              أحدث المشاريع
            </h2>
          </div>
          
          <div className="flex gap-[10px] mt-[20px] md:mt-0">
            <button className="w-[50px] h-[50px] rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#1d1d1d] hover:bg-[#ff6a00] hover:border-[#ff6a00] hover:text-white transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-[50px] h-[50px] rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#1d1d1d] hover:bg-[#ff6a00] hover:border-[#ff6a00] hover:text-white transition-all duration-300">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.05)] rounded-[4px] h-[480px]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-0 translate-y-[30px] transition-transform duration-500 group-hover:translate-y-0">
                  <div className="bg-white flex items-center relative overflow-hidden">
                    <div className="absolute top-[-26px] right-0 bg-[#ff6a00] px-[20px] py-[3px] text-white text-[12px] font-bold tracking-[1px]">
                      {item.category}
                    </div>
                    
                    <div className="flex-1 py-[25px] pr-[25px] pl-[10px]">
                      <h5 className="text-[18px] font-bold text-[#1d1d1d] leading-[1.3] transition-colors duration-300 group-hover:text-[#ff6a00]">
                        <a href="#">{item.title}</a>
                      </h5>
                    </div>

                    <div className="w-0 group-hover:w-[60px] bg-black h-full flex items-center justify-center transition-all duration-300 overflow-hidden">
                      <a href="#" className="text-white">
                        <ArrowLeft className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
