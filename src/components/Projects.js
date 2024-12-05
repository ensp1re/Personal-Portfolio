import React, { useState } from "react";

const FilterButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md transition-colors ${
      active
        ? "bg-[#f46228] text-white"
        : "bg-white/5 hover:bg-white/10 text-white"
    }`}
  >
    {children}
  </button>
);

const ProjectCard = ({ title, category, image }) => (
  <div className="group relative overflow-hidden rounded-lg cursor-pointer">
    <img
      src={image}
      alt={title}
      className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-[#f46228] text-sm uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-xl font-semibold text-white mt-2">{title}</h3>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "UI UX",
    "Website Design",
    "App Design",
    "Graphic Design",
  ];

  const projects = [
    {
      id: 1,
      title: "AirCalling Landing Page Design",
      category: "UI UX",
      image: "portfolio.png",
    },
    {
      id: 2,
      title: "AirCalling Landing Page Design",
      category: "UI UX",
      image: "portfolio.png",
    },
    {
      id: 3,
      title: "AirCalling Landing Page Design",
      category: "UI UX",
      image: "portfolio.png",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="w-full max-w-[1440px] mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">My Projects</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis fghh hgjj nisi ante.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <FilterButton
            key={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </FilterButton>
        ))}
      </div>
      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      ) : (
        <p className="flex justify-center items-center text-center text-nowrap text-gray-400 text-lg p-[154px]">
          No projects found
        </p>
      )}
    </section>
  );
};

export default Projects;
