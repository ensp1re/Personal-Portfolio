import React from "react";
import { CgLayoutGrid, CgSmartphone } from "react-icons/cg";
import { FiPenTool } from "react-icons/fi";
import { LuMonitorSmartphone } from "react-icons/lu";

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white/5 backdrop-blur-sm cursor-pointer rounded-2xl p-6 hover:bg-white/10 transition-colors">
    <div className="text-[#f46228] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <CgLayoutGrid size={32} />,
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
    },
    {
      icon: <LuMonitorSmartphone size={32} />,
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
    },
    {
      icon: <CgSmartphone size={32} />,
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
    },
    {
      icon: <FiPenTool size={32} />,
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
    },
  ];

  return (
    <section id="services" className="w-full max-w-[1440px] mx-auto px-6 pb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Services</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis fgh hajj nisi ante.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
