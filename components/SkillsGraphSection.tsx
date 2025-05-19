import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import NeumorphicBox from "./ui/NeumorphicBox";
const skillCategories = [
  {
    category: "Frontend Development",
    level: 90,
  },
  {
    category: "Backend Development",
    level: 75,
  },
  {
    category: "Database Management",
    level: 80,
  },
  {
    category: "UI/UX Design",
    level: 85,
  },
  {
    category: "Problem Solving",
    level: 90,
  },
  {
    category: "Communication",
    level: 85,
  },
  {
    category: "Project Management",
    level: 80,
  },
  {
    category: "DevOps",
    level: 70,
  },
];
const SkillsGraphSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="size-[28px] text-blue-400" />
          <h2 className="section-heading text-3xl">Skills Overview</h2>
        </div>
        <div className="section-divider"></div>
        <NeumorphicBox className="p-8">
          <div className="h-[500px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius="80%" data={skillCategories}>
                <PolarGrid stroke="#1e40af" strokeDasharray="3 3" />
                <PolarAngleAxis
                  dataKey="category"
                  tick={{
                    fill: "#94a3b8",
                    fontSize: 12,
                  }}
                />
                <Radar
                  name="Skills"
                  dataKey="level"
                  stroke="#60a5fa"
                  fill="#3b82f6"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </NeumorphicBox>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {skillCategories.map((skill) => (
            <NeumorphicBox key={skill.category} className="p-5">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">{skill.category}</h3>
                <div className="text-3xl font-bold text-gradient">
                  {skill.level}%
                </div>
              </div>
            </NeumorphicBox>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsGraphSection;
