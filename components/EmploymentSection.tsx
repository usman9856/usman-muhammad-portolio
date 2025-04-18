import React from 'react';
import NeumorphicBox from './ui/NeumorphicBox';
import { BriefcaseIcon, CalendarIcon } from 'lucide-react';
const employmentHistory = [{
  id: 1,
  title: 'Senior Frontend Developer',
  company: 'Tech Innovations Inc.',
  period: '2021 - Present',
  description: 'Lead the frontend development team in creating scalable and performant web applications. Implemented modern CI/CD practices and improved site performance by 40%.',
  technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL']
}, {
  id: 2,
  title: 'Frontend Developer',
  company: 'Digital Solutions LLC',
  period: '2018 - 2021',
  description: 'Developed responsive web applications using React and Redux. Collaborated with UX designers to implement pixel-perfect interfaces and improved user engagement.',
  technologies: ['React', 'Redux', 'SASS', 'REST APIs']
}, {
  id: 3,
  title: 'UI Developer',
  company: 'Creative Web Studio',
  period: '2016 - 2018',
  description: 'Created interactive and responsive user interfaces for various client projects. Worked closely with backend developers to integrate frontend with APIs.',
  technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery']
}];
const EmploymentSection = () => {
  return <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-2 text-center">Work Experience</h2>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#0c1e3a]"></div>
          {employmentHistory.map((job, index) => <div key={job.id} className={`mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400 border-4 border-[#0a192f]"></div>
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
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
                    {job.technologies.map(tech => <span key={tech} className="bg-[#0a192f] text-blue-400 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>)}
                  </div>
                </NeumorphicBox>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default EmploymentSection;