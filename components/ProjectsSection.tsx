"use client";
import React, { useState } from "react";
import ProjectCard from "./ui/ProjectCard";
import NeumorphicBox from "./ui/NeumorphicBox";
const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description:
      "A comprehensive dashboard for managing online stores with analytics and inventory management.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    category: "web",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description:
      "Mobile application for tracking workouts, nutrition, and progress with personalized recommendations.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["React Native", "Firebase", "Redux", "Health API"],
    category: "mobile",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "Web application that leverages machine learning to generate blog posts, social media content, and more.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
    tags: ["Next.js", "OpenAI API", "MongoDB", "Tailwind CSS"],
    category: "ai",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 4,
    title: "Smart Home Control Panel",
    description:
      "Dashboard for controlling and monitoring smart home devices with automation capabilities.",
    image:
      "https://images.unsplash.com/photo-1558002038-bb4237b98681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "Node.js", "MQTT", "Socket.io"],
    category: "iot",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 5,
    title: "Financial Portfolio Tracker",
    description:
      "Application for tracking investments, stocks, and financial goals with visualizations and alerts.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
    category: "web",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 6,
    title: "Augmented Reality Navigation",
    description:
      "Mobile app that provides AR navigation for indoor spaces like malls and airports.",
    image:
      "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    tags: ["React Native", "ARKit", "ARCore", "Three.js"],
    category: "mobile",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
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
