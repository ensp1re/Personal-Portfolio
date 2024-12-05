const SkillBar = ({ name, percentage }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-lg font-bold">{name}</span>
      <span className="text-sm text-gray-400">{percentage}%</span>
    </div>
    <div className="h-2 bg-white/10 rounded-full">
      <div
        className="h-full bg-[#f46228] rounded-full relative"
        style={{ width: `${percentage}%` }}
      >
        <div className="absolute right-0 -top-2.5 w-6 h-6 bg-white rounded-full border-2 border-[#f46228]" />
      </div>
    </div>
  </div>
);

const AboutMe = () => {
  const skills = [
    { name: "UX", percentage: 95 },
    { name: "Website Design", percentage: 85 },
    { name: "App Design", percentage: 75 },
    { name: "Graphic Design", percentage: 90 },
  ];

  return (
    <section id="about" className="w-full max-w-[1440px] mx-auto px-6 py-20">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side - Image */}
        <div className="relative">
          <img
            src="aboutme.png"
            width={1920}
            height={1080}
            alt="Profile - About Me"
            className="relative z-10 w-full max-w-lg mx-auto rounded-2xl"
          />
        </div>

        {/* Right side - Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-gray-400 text-lg">
              Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
              blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare
              tellus consectetur lacus
            </p>
          </div>

          <div className="space-y-6">
            {skills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
