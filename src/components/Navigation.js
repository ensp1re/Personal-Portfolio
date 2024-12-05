import React, { useState, useEffect } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-scroll";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Testimonials",
    "Contact Us",
  ];

  return (
    <nav
      className={`w-full max-w-[1440px] mx-auto px-7 py-6 
         "text-white"`}
    >
      <div className="relative flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold z-20">
          <span className="bg-[#f46228] px-2 py-1 text-white">M</span>uhammad
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-[1000] text-white"
        >
          {isOpen ? (
            <MdClose className="h-6 w-6" />
          ) : (
            <MdMenu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex text-lg items-center gap-8">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                to={item.toLowerCase().split(" ").join("")}
                smooth={true}
                duration={500}
                key={item}
                href={`#${item.toLowerCase().split(" ").join("")}`}
                className={`hover:text-[#f46228] transition-colors ${"text-white"}`}
              >
                {item}
              </Link>
            ))}
          </div>
          <button className="bg-[#f46228] text-nowrap px-6 py-2.5 rounded-md hover:bg-[#f46228]/90 transition-colors">
            Download CV
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-[999] bg-black/90 backdrop-blur-md  lg:hidden transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`flex flex-col items-center justify-center h-full gap-8 transition-all duration-300 ${
              isOpen ? "translate-y-0" : "-translate-y-10"
            }`}
          >
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-2xl hover:text-[#f46228] transition-colors"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-[#f46228] px-6 py-2.5 rounded-md hover:bg-[#f46228]/90 transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
