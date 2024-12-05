import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const navItems = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Testimonials",
    "Contact Us",
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-black/50 backdrop-blur-sm mt-20">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-12">
          {/* Logo */}
          <a href="#" className="text-3xl font-bold">
            <span className="bg-[#f46228] px-2 py-1">M</span>uhammad
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap text-lg justify-center gap-x-8 gap-y-4">
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
          </nav>

          {/* Social Links */}
          <div className="flex gap-6">
            {[FaFacebook, BsTwitter, BsInstagram, BsLinkedin].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white hover:text-[#f46228] transition-colors"
                >
                  <Icon size={24} className="w-8 h-8" />
                </a>
              )
            )}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            © {currentYear} <span className="text-[#f46228]">Muhammad</span> All
            Rights Reserved, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
