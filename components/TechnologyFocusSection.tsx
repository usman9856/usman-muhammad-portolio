import React from 'react';
import NeumorphicBox from './ui/NeumorphicBox';
import { CodeIcon, LayersIcon, SmartphoneIcon, CloudIcon, BrainIcon, ShieldIcon } from 'lucide-react';
const technologies = [{
  icon: <CodeIcon size={40} />,
  title: 'Frontend Development',
  description: 'Specializing in React, TypeScript, and modern web frameworks to create responsive and performant applications.',
  tools: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
}, {
  icon: <LayersIcon size={40} />,
  title: 'UI/UX Design',
  description: 'Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.',
  tools: ['Figma', 'Adobe XD', 'Material Design', 'Responsive Design']
}, {
  icon: <SmartphoneIcon size={40} />,
  title: 'Mobile Development',
  description: 'Building cross-platform mobile applications using React Native and modern mobile technologies.',
  tools: ['React Native', 'Expo', 'Mobile UI/UX', 'App Store Deployment']
}, {
  icon: <CloudIcon size={40} />,
  title: 'Cloud Services',
  description: 'Leveraging cloud platforms to build scalable and reliable applications.',
  tools: ['AWS', 'Vercel', 'Netlify', 'Cloud Functions']
}, {
  icon: <BrainIcon size={40} />,
  title: 'AI Integration',
  description: 'Implementing AI and machine learning solutions to enhance application capabilities.',
  tools: ['OpenAI API', 'TensorFlow.js', 'Natural Language Processing', 'Computer Vision']
}, {
  icon: <ShieldIcon size={40} />,
  title: 'Security & Performance',
  description: 'Ensuring applications are secure, fast, and reliable through best practices and modern tools.',
  tools: ['Web Security', 'Performance Optimization', 'SEO', 'Analytics']
}];
const TechnologyFocusSection = () => {
  return <section className="py-20 px-6 bg-[#081529]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Technology Focus
        </h2>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => <NeumorphicBox key={index} className="p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-blue-400">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {tech.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{tech.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tech.tools.map((tool, toolIndex) => <span key={toolIndex} className="bg-[#0a192f] text-blue-400 px-2 py-1 rounded-full text-xs">
                      {tool}
                    </span>)}
                </div>
              </div>
            </NeumorphicBox>)}
        </div>
      </div>
    </section>;
};
export default TechnologyFocusSection;