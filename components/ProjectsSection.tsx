"use client";
import React, { useState } from "react";
import ProjectCard from "./ui/ProjectCard";
import NeumorphicBox from "./ui/NeumorphicBox";
import AsOfficial from "../asset/images/AS official.webp";
import Office from "../asset/images/Office.jpg";
const projects = [
  // {
  //   id: 8,
  //   title: "Xoom Maps",
  //   description:
  //     "The #1 AI-Powered Mapping Solution For Collaboration, Routing & GPS Tracking! Streamline project management with real-time GPS tracking for teams, vendors, and assets, smart routing, scheduling, seamless collaboration, CRM integration, Auto Check In/Out, and advanced reporting—all in one intuitive app for iPad, iPhone, and Android.",
  //   image:
  //     "https://images.unsplash.com/photo-1508345226583-7c1a57eeca5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  //   tags: ["AI", "GPS", "Collaboration", "Mobile App"],
  //   category: "mobile",
  //   liveLink: "",
  //   githubLink: "",
  // },
  // {
  //   id: 7,
  //   title: "Universal Postal Union",
  //   description:
  //     "Universal Postal Union event site that is going to be held in Dubai this year. (Link access allowed only to organization.)",
  //   image:
  //     "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  //   tags: ["Event Management", "Organization"],
  //   category: "web",
  //   liveLink: "",
  //   githubLink: "",
  // },
  {
    id: 6,
    title: "As Group Official",
    description:
      "Built and optimized the website using Next.js, React.js, and integrating GSAP animations for a smoother user experience. Refactored and restyled the codebase to enhance both aesthetics and functionality. Reduced memory leaks and optimized initial load performance by 45%.",
    image:
      "https://www.asgroupofficial.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_nav.c1fd2e95.png&w=64&q=75",
    tags: ["Next.js", "React.js", "GSAP", "Performance Optimization"],
    category: "web",
    liveLink: "https://www.asgroupofficial.com/",
    githubLink: "",
  },
  {
    id: 5,
    title: "Office Suite",
    description:
      "Developed dynamic light and dark mode features for improved usability. Collaborated with designers to implement and verify UI changes according to project specifications. Improved UI based on feedback, ensuring a smoother and better user experience.",
    image:
      "https://media.istockphoto.com/id/1411304340/photo/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.jpg?s=612x612&w=0&k=20&c=KQA6R0B5lp8-rcdFO9knPiSz96NiZBCJQBQMlMoXT7U=",
    tags: ["UI/UX", "Light/Dark Mode", "Collaboration"],
    category: "web",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 4,
    title: "Landlock Solutions",
    description:
      "A scalable platform built using modern web technologies for team collaboration. Includes secure OTP-based user signups, responsive design, and optimized performance. Features include light/dark modes, email notifications, and GSAP animations for enhanced user experience.",
    image:
      "https://media.istockphoto.com/id/864768664/vector/house-icon.jpg?s=612x612&w=0&k=20&c=rjn0h1GC_dBfeMT6I8RO8jPZ7KR3BaKhS2HQeAeq1Kk=",
    tags: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS", "GSAP"],
    category: "web",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 3,
    title: "Legal Ease",
    description:
      "AI-powered platform that allows users in Pakistan to chat with AI for legal advice. Integrated with OpenAI for LLM-based communications and provides real-time recommendations for the best available lawyers.",
    image:
      "https://media.istockphoto.com/id/1728170360/photo/the-statue-of-justice-legal-law-concept-image.jpg?s=612x612&w=0&k=20&c=6ldbBGtCd6Ud3-fHXP1PH8_j1Y98db9D0pTDZX55unA=",
    tags: ["React", "Node.js", "OpenAI API", "Chatbot"],
    category: "ai",
    liveLink: "",
    githubLink: "https://github.com/usman9856/legal_ease",
  },
  {
    id: 2,
    title: "Human Action Recognition",
    description:
      "A machine learning project focused on recognizing and classifying human actions in videos. Uses state-of-the-art algorithms for real-time predictions with applications in surveillance, sports analysis, and human-computer interaction.",
    image:
      "https://media.istockphoto.com/id/542082438/vector/karate-fighters-vector-illustration.jpg?s=612x612&w=0&k=20&c=7DDrg7f1O-DGV26NfB3uxgCGT9CCUJFbBQKxYFbHzdE=",
    tags: ["Python", "TensorFlow", "OpenCV", "Keras"],
    category: "ai",
    liveLink: "",
    githubLink: "https://github.com/usman9856/Machine_Learning-HAR",
  },
  {
    id: 1,
    title: "Web Crawler",
    description:
      "A robust web scraping tool designed to extract and analyze large volumes of data from the web efficiently. Features include advanced filtering options, multi-threading for speed optimization, and automated scheduling for periodic crawls.",
    image:
      "https://media.istockphoto.com/id/1206206274/vector/crawler-color-icon-spiderbot-search-engine-optimization-automatic-indexer-content-monitoring.jpg?s=612x612&w=0&k=20&c=xslQbIeGUIu-jgtQTOtkAFcblof67iHay2jOKIBCiMg=",
    tags: ["Python", "BeautifulSoup", "Selenium", "Scrapy"],
    category: "web",
    liveLink: "",
    githubLink: "https://github.com/usman9856/Web-Crawler-2.0",
  },
];

const categories = [
  {
    id: "all",
    name: "All Projects",
  },
  {
    id: "web",
    name: "Web Applications",
  },
  {
    id: "mobile",
    name: "Mobile Apps",
  },
  {
    id: "ai",
    name: "AI Projects",
  },
  {
    id: "iot",
    name: "IoT Solutions",
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-2 text-center">My Projects</h2>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="flex gap-3">
            {categories.map((category) => (
              <NeumorphicBox
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                className="px-4 py-2 whitespace-nowrap"
              >
                {category.name}
              </NeumorphicBox>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
