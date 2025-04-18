import React from 'react';
import NeumorphicBox from './ui/NeumorphicBox';
const skills = [{
  category: 'Frontend',
  items: [{
    name: 'HTML5',
    level: 90
  }, {
    name: 'CSS3',
    level: 85
  }, {
    name: 'JavaScript',
    level: 90
  }, {
    name: 'TypeScript',
    level: 80
  }, {
    name: 'React',
    level: 85
  }, {
    name: 'Next.js',
    level: 75
  }, {
    name: 'Tailwind CSS',
    level: 80
  }]
}, {
  category: 'Backend',
  items: [{
    name: 'Node.js',
    level: 75
  }, {
    name: 'Express',
    level: 70
  }, {
    name: 'MongoDB',
    level: 65
  }, {
    name: 'PostgreSQL',
    level: 60
  }, {
    name: 'GraphQL',
    level: 70
  }]
}, {
  category: 'Tools & Others',
  items: [{
    name: 'Git',
    level: 85
  }, {
    name: 'Docker',
    level: 60
  }, {
    name: 'AWS',
    level: 65
  }, {
    name: 'CI/CD',
    level: 70
  }, {
    name: 'Figma',
    level: 75
  }, {
    name: 'Jest',
    level: 70
  }]
}];
const SkillBar = ({
  name,
  level
}: {
  name: string;
  level: number;
}) => {
  return <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <NeumorphicBox className="h-4 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-400 to-purple-500" style={{
        width: `${level}%`
      }}></div>
      </NeumorphicBox>
    </div>;
};
const SkillsSection = () => {
  return <section id="skills" className="py-20 px-6 bg-[#081529]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-2 text-center">Skills</h2>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map(skillGroup => <NeumorphicBox key={skillGroup.category} className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">
                {skillGroup.category}
              </h3>
              {skillGroup.items.map(skill => <SkillBar key={skill.name} name={skill.name} level={skill.level} />)}
            </NeumorphicBox>)}
        </div>
      </div>
    </section>;
};
export default SkillsSection;