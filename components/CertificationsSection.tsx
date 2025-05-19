import React from "react";
import { AwardIcon, ExternalLinkIcon, CheckCircleIcon } from "lucide-react";
import NeumorphicBox from "./ui/NeumorphicBox";

const certifications = [
  {
    id: 1,
    name: "Network Mastery for Ethical Hacker",
    organization: "Udemy",
    date: "May 2025",
    credentialId: "N/A",
    image:
      "https://images.seeklogo.com/logo-png/40/1/udemy-logo-png_seeklogo-409219.png",
    verifyLink: "/",
    skills: ["Network Fundamentals", "Network Security", "Ethical Hacking"],
  },
  {
    id: 2,
    name: "Starting Career In CyberSecurity ",
    organization: "Udemy",
    date: "May 2025",
    credentialId: "N/A",
    image:
      "https://images.seeklogo.com/logo-png/40/1/udemy-logo-png_seeklogo-409219.png",
    verifyLink: "/",
    skills: ["Roles Of Cybersecurity"],
  },
  {
    id: 3,
    name: "React Basics",
    organization: "Coursera",
    date: "Mar 2023",
    credentialId: "N/A",
    image:
      "https://whop.com/blog/content/images/size/w2000/2024/11/Coursera-Review.webp",
    verifyLink: "/",
    skills: ["React Basics", "CSS", "Tailwind"],
  },
  {
    id: 4,
    name: "Introduction to Backend Development",
    organization: "Coursera",
    date: "Feb 2023",
    credentialId: "N/A",
    image:
      "https://whop.com/blog/content/images/size/w2000/2024/11/Coursera-Review.webp",
    verifyLink: "/",
    skills: [
      "Express",
      "Node.Js",
      "JavaScript",
      "MongoDB",
      "RestApi",
      "CURD Operation",
    ],
  },
  {
    id: 5,
    name: "Git Certificate",
    organization: "Coursera",
    date: "Mar 2023",
    credentialId: "N/A",
    image:
      "https://whop.com/blog/content/images/size/w2000/2024/11/Coursera-Review.webp",
    verifyLink: "/",
    skills: [
      "Git Basics",
      "Branching",
      "Merging",
      "Version Control",
      "Collaborative Development",
    ],
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-3 mb-2">
          <AwardIcon size={28} className="text-blue-400" />
          <h2 className="text-3xl font-bold text-center">Certifications</h2>
        </div>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <NeumorphicBox
              key={cert.id}
              className="p-6 hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex gap-6">
                <div className="w-24 h-24 flex-shrink-0">
                  <NeumorphicBox className="flex items-center justify-center p-2">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="object-contain"
                    />
                  </NeumorphicBox>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <CheckCircleIcon size={16} className="text-blue-400" />
                    <span>{cert.organization}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-[#0a192f] text-blue-400 px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {/* <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-400">Credential ID:</span>
                    <span className="text-gray-300">{cert.credentialId}</span>
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors ml-auto"
                    >
                      <ExternalLinkIcon size={16} />
                    </a>
                  </div> */}
                </div>
              </div>
            </NeumorphicBox>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CertificationsSection;
