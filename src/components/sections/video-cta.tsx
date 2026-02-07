import React from 'react';

const VideoCTA = () => {
  const backgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/about1-1-4.jpg";

  return (
    <section className="relative w-full h-[620px] overflow-hidden group">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#121521]/60" />
      </div>

      <div 
        className="absolute top-0 left-0 h-full w-[45%] z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #FF6A00 0%, #D30A0A 60%, transparent 100%)',
          clipPath: 'ellipse(70% 80% at 0% 50%)',
          opacity: 0.9
        }}
      />

      <div 
        className="absolute top-0 left-0 h-[80%] w-[30%] z-20 pointer-events-none"
        style={{
          background: 'rgba(255, 106, 0, 0.3)',
          clipPath: 'ellipse(60% 70% at 0% 30%)',
        }}
      />

      <div 
        className="absolute top-0 right-0 h-[200px] w-[500px] z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(225deg, #FF6A00 0%, #D30A0A 100%)',
          clipPath: 'ellipse(80% 80% at 100% 0%)',
          opacity: 0.95
        }}
      />

      <div className="container relative z-30 h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-[32px] md:text-[48px] font-bold leading-[1.2] max-w-[800px] mb-12">
          هل تبحث عن أفضل <br />
          خدمة نقل لوجستي؟
        </h2>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
          
          <button 
            className="relative flex items-center justify-center w-[85px] h-[85px] rounded-sm transition-transform duration-300 hover:scale-110"
            style={{
              background: 'linear-gradient(to bottom, #FF6A00, #D30A0A)',
            }}
          >
            <span className="sr-only">تشغيل الفيديو</span>
            <svg 
              width="24" 
              height="28" 
              viewBox="0 0 24 28" 
              fill="white" 
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path d="M23.5 13.134a1 1 0 0 1 0 1.732l-20.25 11.691a1 1 0 0 1-1.5-.866V2.309a1 1 0 0 1 1.5-.866L23.5 13.134Z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent opacity-30" />
    </section>
  );
};

export default VideoCTA;
