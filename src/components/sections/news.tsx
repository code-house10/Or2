import React from 'react';
import Image from 'next/image';
import { ChevronLeft, User, MessageCircle } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/news1-1-25.jpg",
    day: "28",
    month: "يوليو",
    author: "المدير",
    comments: "2 تعليقات",
    title: "نتعامل بحرص مع البضائع القيمة"
  },
  {
    id: 2,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/news1-2-26.jpg",
    day: "28",
    month: "يوليو",
    author: "المدير",
    comments: "2 تعليقات",
    title: "نتعامل بحرص مع البضائع القيمة"
  },
  {
    id: 3,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/news1-3-27.jpg",
    day: "28",
    month: "يوليو",
    author: "المدير",
    comments: "2 تعليقات",
    title: "نتعامل بحرص مع البضائع القيمة"
  }
];

const NewsSection = () => {
  return (
    <section id="news" className="bg-white py-[120px] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[15px]">
        <div className="text-center mb-[50px] flex flex-col items-center">
          <div className="flex items-center gap-[10px] mb-[10px]">
            <span className="w-[15px] h-[2px] bg-[#ff6a00]"></span>
            <span className="text-[14px] font-[700] text-[#ff6a00] uppercase tracking-[1px]">
              من المدونة
            </span>
            <span className="w-[15px] h-[2px] bg-[#ff6a00]"></span>
          </div>
          <h2 className="text-[48px] font-[700] text-[#1D1D1D] leading-[1.2] mb-0">
            الأخبار والمقالات
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {blogPosts.map((post) => (
            <div key={post.id} className="group flex flex-col bg-white card-shadow">
              <div className="relative overflow-hidden">
                <div className="relative h-[250px] w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute right-[20px] bottom-[-25px] bg-[#d30a0a] text-white w-[54px] h-[65px] flex flex-col items-center justify-center z-10">
                  <span className="text-[18px] font-[700] leading-[1]">{post.day}</span>
                  <span className="text-[10px] font-[600] uppercase tracking-[1px]">{post.month}</span>
                </div>
              </div>

              <div className="pt-[45px] px-[30px] pb-[40px] relative border-x border-b border-[#e5e5e5]">
                <div className="flex items-center gap-[20px] mb-[15px]">
                  <div className="flex items-center gap-[5px] text-[14px] text-[#777777]">
                    <User size={14} className="text-[#ff6a00]" />
                    <span>بواسطة {post.author}</span>
                  </div>
                  <div className="flex items-center gap-[5px] text-[14px] text-[#777777]">
                    <MessageCircle size={14} className="text-[#ff6a00]" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <h5 className="text-[20px] font-[700] text-[#1D1D1D] leading-[1.4] mb-[25px] transition-colors duration-300 group-hover:text-[#ff6a00]">
                  <a href="#">{post.title}</a>
                </h5>

                <div className="absolute bottom-0 left-0 w-full h-[35px] bg-[#000000] flex items-center justify-between px-[30px] translate-y-0 group-hover:bg-[#ff6a00] transition-colors duration-300">
                  <span className="text-white text-[12px] font-[600] uppercase tracking-[1px]">اقرأ المزيد</span>
                  <ChevronLeft size={14} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
