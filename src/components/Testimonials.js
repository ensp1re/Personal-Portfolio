import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../lib/data";

const TestimonialCard = ({ testimonial, position, onClick }) => {
  const [showFullText, setShowFullText] = useState(false);

  const baseClasses =
    "absolute top-0 transition-all duration-500 ease-in-out cursor-pointer";
  const positionClasses = {
    left: "-translate-x-[calc(100%+2rem)] opacity-50 scale-95",
    center: "translate-x-0 opacity-100 scale-100",
    right: "translate-x-[calc(100%+2rem)] opacity-50 scale-95",
  };

  const toggleText = (e) => {
    e.stopPropagation();
    setShowFullText(!showFullText);
  };

  return (
    <div
      className={`${baseClasses} ${positionClasses[position]} shadow-xl rounded-2xl`}
      onClick={onClick}
      style={{
        width: "calc(100% - 4rem)",
      }}
    >
      <div
        className={`bg-white/[${
          position === "center" ? "0.05" : "0.02"
        }] backdrop-blur-sm rounded-2xl p-8 md:p-16 max-h-[400px] transition-colors duration-500 shadow-lg`}
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative flex-shrink-0">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              width={64}
              height={64}
              className="w-[100px] h-[100px] md:w-[145px] md:h-[145px] rounded-full object-cover shadow-md"
            />
            {position === "center" && (
              <div className="absolute -top-2 -right-2 bg-[#f46228] rounded-full p-1.5 shadow-md">
                <FaQuoteLeft size={12} className="text-white" />
              </div>
            )}
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm md:text-lg text-gray-300 mb-4">
              {showFullText
                ? testimonial.text
                : `${testimonial.text.substring(0, 100)}...`}
              {testimonial.text.length > 100 && (
                <span
                  onClick={toggleText}
                  className="text-[#f46228] cursor-pointer"
                >
                  {showFullText ? " Show less" : " Read more"}
                </span>
              )}
            </p>
            {!showFullText && (
              <>
                <h3 className="font-semibold text-lg md:text-xl">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400">{testimonial.position}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getPosition = (index) => {
    if (index === currentIndex) return "center";
    if (
      index ===
      (currentIndex - 1 + testimonials.length) % testimonials.length
    )
      return "left";
    if (index === (currentIndex + 1) % testimonials.length) return "right";
    return "right"; // Hide other cards
  };

  const handleCardClick = (index) => {
    const position = getPosition(index);
    if (position === "left") {
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    } else if (position === "right") {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  return (
    <section
      id="testimonials"
      className="w-full max-w-[1440px] mx-auto px-6 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Testimonials</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis fghh hgjj nisi ante.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative h-[300px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              position={getPosition(index)}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-36 md:mt-14">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-14 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-[#f46228]" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
