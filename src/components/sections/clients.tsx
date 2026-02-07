import React from 'react';
import Image from 'next/image';

/**
 * ClientsSection Component
 * 
 * A pixel-perfect clone of the monochrome logo carousel section.
 * Featuring partner logos with soft hover transitions and consistent spacing.
 */

const clientLogos = [
  {
    id: 1,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/1-9.png",
    alt: "Logistics Logo",
  },
  {
    id: 2,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/2-11.png",
    alt: "Delivery Logo",
  },
  {
    id: 3,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/3-13.png",
    alt: "Truck Delivery Logo",
  },
  {
    id: 4,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/4-15.png",
    alt: "Express Logo",
  },
  {
    id: 5,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/5-17.png",
    alt: "Transport Co Logo",
  },
];

const ClientsSection: React.FC = () => {
  return (
    <section className="relative py-[80px] bg-white border-t border-[#e5e5e5]">
      <div className="container mx-auto px-[15px] max-w-[1200px]">
        {/* Logo Grid - replicating a carousel/list layout */}
        <div className="flex flex-wrap items-center justify-between gap-y-8 md:flex-nowrap">
          {clientLogos.map((logo) => (
            <div 
              key={logo.id} 
              className="group flex items-center justify-center w-1/2 md:w-auto px-4 transition-all duration-300 ease-in-out"
            >
              <div className="relative overflow-hidden opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 cursor-pointer">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={50}
                  className="object-contain h-[45px] w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle bottom decorative line if needed based on the theme, 
          though computed styles show generic section padding and white background */}
    </section>
  );
};

export default ClientsSection;