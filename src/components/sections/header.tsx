"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search, ShoppingCart, Menu, X, MapPin, Clock, Phone, ChevronDown } from "lucide-react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "حولنا", href: "#about" },
    { name: "خدماتنا", href: "#service" },
    { name: "المشاريع", href: "#project" },
    { name: "الأخبار", href: "#news" },
    { name: "اتصل بنا", href: "#contact" },
  ];

  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ccd16c68-70bf-4457-96ed-31e8e8659178-html-kodesolution-com/assets/images/logo-1.png";

  return (
    <header className={`w-full z-[999] transition-all duration-300 ${isSticky ? "fixed top-0 left-0 animate-fadeInDown shadow-md bg-white text-[#1d1d1d]" : "relative"}`}>
      {/* Header Top - Only visible on non-sticky or desktops */}
      {!isSticky && (
        <div className="hidden lg:flex bg-[#d30a0a] h-[40px] items-center justify-between px-[60px] text-white overflow-hidden">
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-6 text-[14px]">
              <li className="flex items-center gap-1.5">
                <MapPin size={14} className="text-white" />
                <span>380 سانت كيلدا، أستراليا</span>
              </li>
              <li className="flex items-center gap-1.5 border-r border-white/20 pr-6 mr-6">
                <Clock size={14} className="text-white" />
                <span>السبت - الاثنين: 8 صباحاً - 5 مساءً</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone size={14} className="text-white" />
                <a href="tel:92880087890" dir="ltr">+92 (8800) 87890</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center text-[14px]">
            <ul className="flex items-center gap-5">
              <li><a href="#" className="hover:opacity-80">المساعدة</a></li>
              <li><a href="#" className="hover:opacity-80 border-r border-white/20 pr-5 mr-5">تتبع الآن</a></li>
              <li><a href="#" className="hover:opacity-80 border-r border-white/20 pr-5 mr-5">الدعم</a></li>
            </ul>
          </div>
        </div>
      )}

      {/* Header Lower / Main Nav */}
      <div className={`transition-all duration-300 ${isSticky ? "h-[80px]" : "h-[92px] bg-[#121521]"} flex items-center`}>
        <div className="w-full flex items-center justify-between px-[15px] max-w-[1230px] mx-auto">
          {/* Logo Section */}
          <div className={`relative flex items-center ${!isSticky ? "lg:mt-[-40px] bg-white lg:h-[132px] px-[40px] lg:px-[60px]" : ""}`}>
            <a href="/" className="block">
              <Image 
                src={logoUrl} 
                alt="Lozics Logo" 
                width={168} 
                height={38} 
                className="object-contain"
                priority
              />
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-[45px]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`text-[15px] font-medium transition-colors hover:text-[#ff6a00] uppercase tracking-wider ${isSticky ? "text-[#1d1d1d]" : "text-white"}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Utility Box */}
          <div className="flex items-center gap-6">
            <div className={`hidden sm:flex items-center gap-4 ${isSticky ? "text-[#1d1d1d]" : "text-white"}`}>
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="hover:text-[#ff6a00] transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button className="hover:text-[#ff6a00] transition-colors relative" aria-label="Cart">
                <ShoppingCart size={20} />
                <span className="absolute -top-1.5 -right-1.5 bg-[#ff6a00] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </button>
            </div>

            <div className="hidden md:block">
              <a 
                href="#contact" 
                className="bg-[#ff6a00] text-white px-[25px] py-[12px] rounded-[4px] text-[15px] font-bold uppercase transition-all hover:bg-[#d30a0a]"
              >
                احصل على عرض سعر
              </a>
            </div>

            {/* Mobile Toggler */}
            <button 
              className={`lg:hidden ${isSticky ? "text-[#1d1d1d]" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[1000] bg-black/60 transition-opacity duration-500 lg:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className={`absolute left-0 top-0 bottom-0 w-[300px] bg-[#121521] transition-transform duration-500 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Image src={logoUrl} alt="Lozics Logo" width={140} height={32} className="brightness-0 invert" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
              <X size={24} />
            </button>
          </div>
          
          <nav className="p-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name} className="border-b border-white/5 pb-3">
                  <a 
                    href={link.href} 
                    className="text-white text-[16px] font-medium block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 mt-10 text-white/70 text-[14px]">
            <div className="mb-6">
              <h4 className="text-white font-bold mb-2">تواصل معنا</h4>
              <p className="flex items-center gap-2 mb-2"><Phone size={14} /> +92 (8800) - 98670</p>
              <p className="flex items-center gap-2 mb-2 text-white/50">help@company.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      <div className={`fixed inset-0 z-[1001] bg-black/95 transition-all duration-300 flex items-center justify-center p-6 ${isSearchOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        <button 
          onClick={() => setIsSearchOpen(false)} 
          className="absolute top-10 right-10 text-white hover:text-[#ff6a00]"
        >
          <X size={32} />
        </button>
        <div className="w-full max-w-[800px]">
          <form className="relative">
            <input 
              type="text" 
              placeholder="ابحث هنا..." 
              className="w-full bg-transparent border-b-2 border-white/20 text-white text-[32px] py-4 outline-none focus:border-[#ff6a00] transition-colors"
              autoFocus={isSearchOpen}
            />
            <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-[#ff6a00]">
              <Search size={32} />
            </button>
          </form>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.4s both;
        }
      `}</style>
    </header>
  );
};

export default Header;