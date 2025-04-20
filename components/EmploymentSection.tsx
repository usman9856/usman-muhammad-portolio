import React from "react";
import NeumorphicBox from "./ui/NeumorphicBox";
import { BriefcaseIcon, CalendarIcon } from "lucide-react";

const employmentHistory = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Skylinx Technology",
    period: "27 Jan 2025 - Present",
    description:
      "Currently leading the development of high-performance, scalable web applications tailored to meet diverse client requirements. Working on integrating modern technologies and frameworks to deliver user-friendly interfaces and backend systems. Focused on optimizing workflows, implementing third-party integrations, and enhancing overall application performance.",
    technologies: [
      "React",
      "Vite",
      "Next.js",
      "Strappi",
      "PostgreSQL",
      "GSAP",
      "Google Maps API",
      "Redux Toolkit",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Dice Technologies",
    period: "Aug 2024 - Dec 2024",
    description:
      "Developed scalable and responsive platforms for various projects, implementing modern web technologies and optimizing performance. Worked on projects like Landlock Solutions, As Group Official, and Office Suite, addressing technical challenges and enhancing user experience.",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "GSAP"],
  },
  {
    id: 3,
    title: "Backend Developer Intern",
    company: "Smarnovative Labs",
    period: "July 2023 - Nov 2023",
    description:
      "Designed and developed efficient backend solutions, including managing APIs and integrating front-end elements. Worked on the Restaurant Store project, focusing on MongoDB queries, API consumption, and deploying applications to Amazon EC2 servers.",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "AWS EC2"],
  },
  {
    id: 4,
    title: "Final Year Project",
    company: "Bahria University",
    period: "Nov 2023 - July 2024",
    description:
      "Led the development of Harvest Link, a blockchain-based solution for the agricultural supply chain. Designed intuitive front-end layouts, integrated multi-user login systems, and leveraged AI for real-time market and crop condition analysis.",
    technologies: ["React.js", "Laravel", "Blockchain", "AI", "Tailwind CSS"],
  },
];

const EmploymentSection = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-2 text-center">Work Experience</h2>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#0c1e3a]"></div>
          {employmentHistory.map((job, index) => (
            <div
              key={job.id}
              className={`mb-12 md:flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400 border-4 border-[#0a192f]"></div>
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <NeumorphicBox className="p-6">
                  <div className="flex items-center mb-2">
                    <BriefcaseIcon size={18} className="text-blue-400 mr-2" />
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                  </div>
                  <div className="flex items-center mb-4 text-gray-400">
                    <span className="mr-3">{job.company}</span>
                    <div className="flex items-center">
                      <CalendarIcon size={14} className="mr-1" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-300">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#0a192f] text-blue-400 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </NeumorphicBox>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default EmploymentSection;
