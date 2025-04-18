import React from 'react';
import NeumorphicBox from './ui/NeumorphicBox';
const AboutSection = () => {
  return <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <NeumorphicBox className="p-6">
              <p className="mb-4">
                Hello! I'm John, a passionate frontend developer with over 5
                years of experience creating beautiful, functional, and
                user-friendly websites and applications.
              </p>
              <p className="mb-4">
                My journey in web development started when I was in college,
                tinkering with HTML and CSS. Since then, I've grown to love the
                ever-evolving nature of web technologies and the creative
                possibilities they offer.
              </p>
              <p>
                When I'm not coding, you can find me hiking in the mountains,
                reading science fiction, or experimenting with new cooking
                recipes. I believe that diverse experiences fuel creativity,
                which in turn leads to better problem-solving in development.
              </p>
            </NeumorphicBox>
          </div>
          <div className="md:w-1/2">
            <NeumorphicBox className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Personal Details
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-400">Name:</span>
                  <span>John Doe</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span>San Francisco, CA</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Experience:</span>
                  <span>5+ Years</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span>john@example.com</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Availability:</span>
                  <span className="text-green-400">Available for hire</span>
                </li>
              </ul>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'UI/UX Design', 'Photography', 'Hiking', 'Reading'].map(interest => <span key={interest} className="bg-[#0a192f] px-3 py-1 rounded-full text-sm">
                      {interest}
                    </span>)}
                </div>
              </div>
            </NeumorphicBox>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;