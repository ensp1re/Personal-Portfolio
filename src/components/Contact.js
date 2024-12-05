import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contactus" className="w-full max-w-[1440px] mx-auto px-6 py-20">
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Lets Design Together
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis fghh hgjj nisi ante.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 px-6 py-3 rounded-md bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f46228]"
            required
          />
          <button
            type="submit"
            className="bg-[#f46228] text-white px-8 py-3 rounded-md hover:bg-[#f46228]/90 transition-colors font-bold text-lg whitespace-nowrap"
          >
            Contact Me
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
