import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const ORANGE = '#f46228';

const Hero = () => {
    return (
      <section id="home" className="w-full max-w-[1440px] mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xl">Hi I am</p>
              <h1 className="text-[#f46228] text-4xl lg:text-5xl font-bold lg:text-nowrap">
                Muhammad Bin Jameel
              </h1>
              <div className="space-y-2 flex flex-col w-full">
                <h2 className="text-5xl lg:text-8xl font-bold">UI & UX</h2>
                <h2 className="lg:relative lg:right-[53px] text-5xl lg:self-end lg:text-8xl font-bold">Designer</h2>
              </div>
            </div>
            
            <p className="text-gray-400 max-w-xl text-lg">
              Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
              felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus
              consectetur lacus
            </p>
  
            <button className="bg-[#f46228] px-8 py-3 rounded-md text-lg font-medium hover:bg-[#f46228]/90 transition-colors">
              Hire Me
            </button>
          </div>
  
          {/* Right Content */}
          <div className="relative">
            {/* Background Shapes */}
         
  
            {/* Profile Image */}
            <div className="relative z-10">
              <img
                src="hero.png"
                width={1920}
                height={1080}
                alt="Profile"
                className="w-full max-w-lg mx-auto"
              />
            </div>
  
            {/* Social Links */}
            <div className="w-full flex justify-center mt-4 gap-6 z-20">
              {[FaFacebook, BsTwitter, BsInstagram, BsLinkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white hover:text-[#f46228] transition-colors"
                >
                  <Icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  
  