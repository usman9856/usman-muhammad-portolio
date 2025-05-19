import React from "react";
import { TimerIcon, GitBranchIcon, CircleDotIcon } from "lucide-react";
import NeumorphicBox from "./ui/NeumorphicBox";

const currentProjects = [
  {
    id: 1,
    name: "Xoom Maps",
    role: "Frontend Developer",
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redux",
      "CSS",
      "FastAPI",
      "Google Maps",
    ],
    description: `Top AI-Powered Mapping App for Collaboration, Routing & GPS Tracking.
Manage projects easily with real-time GPS tracking, smart routing, scheduling, team collaboration, CRM integration, Auto Check In/Out, and detailed reports—all in one app for iPad, iPhone, and Android.`,
    progress: 60,
    startDate: "2022",
  },
  {
    id: 2,
    name: "Xoom Maps Landing Page",
    role: "Frontend Developer",
    techStack: ["HTML", "CSS", "JS", "GSAP Animation"],
    description:
      "Developing a clean and professional landing page for the Xoom Maps application. By incorporating smooth GSAP animations, the page aims to engage users while clearly presenting the main features and benefits of the product. This approach ensures that visitors gain a clear understanding of Xoom Maps in an attractive and effective manner.",
    progress: 90,
    startDate: "Feb 2025",
  },

  {
    id: 3,
    name: "Universal Postal Union",
    role: "Full Stack Developer",
    techStack: ["React", "Next.js", "Tailwind", "Strappi V5"],
    description:
      "We are designing a user-friendly website for the UPU event to provide seamless access to event details and nearby hotel services. The platform is tailored to accommodate attendees, ensuring they can easily find all the information they need to make the most of their experience.",
    progress: 90,
    startDate: "Jan 2025",
  },
];

const CurrentWorkSection = () => {
  return (
    <section className="py-20 px-6 bg-[#081529]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-3 mb-2">
          <TimerIcon size={28} className="text-blue-400" />
          <h2 className="text-3xl font-bold text-center">
            Currently Working On
          </h2>
        </div>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentProjects.map((project) => (
            <NeumorphicBox
              key={project.id}
              className="p-6 relative overflow-hidden group"
            >
              {/* Progress indicator */}
              <div
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"
                style={{
                  width: `${project.progress}%`,
                }}
              />
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <GitBranchIcon size={14} className="text-blue-400" />
                    <span>{project.role}</span>
                    <CircleDotIcon size={14} />
                    <span>Started {project.startDate}</span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#0a192f] text-blue-400 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  ~{project.progress}%
                </div>
              </div>
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </NeumorphicBox>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CurrentWorkSection;
