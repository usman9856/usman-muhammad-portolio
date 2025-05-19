import React from 'react';
import { MilestoneIcon, GitCommitIcon } from 'lucide-react';
import NeumorphicBox from './ui/NeumorphicBox';
const milestones = [{
  id: 1,
  year: '2024',
  title: 'Senior Frontend Developer',
  achievements: ['Led team of 5 developers', 'Implemented CI/CD pipeline', 'Reduced load time by 40%'],
  skills: ['Team Leadership', 'DevOps', 'Performance Optimization']
}, {
  id: 2,
  year: '2022',
  title: 'Frontend Developer',
  achievements: ['Developed 10+ React applications', 'Mentored junior developers', 'Implemented design system'],
  skills: ['React', 'TypeScript', 'Mentoring']
}, {
  id: 3,
  year: '2020',
  title: 'Junior Developer',
  achievements: ['Built responsive websites', 'Learned React ecosystem', 'Contributed to open source'],
  skills: ['HTML/CSS', 'JavaScript', 'Git']
}];
const CareerPathSection = () => {
  return <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-3 mb-2">
          <MilestoneIcon size={28} className="text-blue-400" />
          <h2 className="text-3xl font-bold text-center">Career Journey</h2>
        </div>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-[#0c1e3a] hidden md:block" />
          {milestones.map((milestone, index) => <div key={milestone.id} className={`mb-12 md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Year marker */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                <NeumorphicBox className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600">
                  {milestone.year}
                </NeumorphicBox>
              </div>
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <NeumorphicBox className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GitCommitIcon size={20} className="text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">
                      {milestone.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {milestone.achievements.map((achievement, i) => <li key={i} className="flex items-start gap-2 text-gray-400">
                        <span className="text-blue-400 mt-1">•</span>
                        {achievement}
                      </li>)}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {milestone.skills.map((skill, i) => <span key={i} className="bg-[#0a192f] text-blue-400 px-2 py-1 rounded-full text-xs">
                        {skill}
                      </span>)}
                  </div>
                </NeumorphicBox>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default CareerPathSection;