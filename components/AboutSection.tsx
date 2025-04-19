import React from "react";
import NeumorphicBox from "./ui/NeumorphicBox";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <header className="text-center">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>
        </header>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <article className="md:w-1/2">
            <NeumorphicBox className="p-6">
              <p className="mb-4">
                Hi, I'm Usman Muhammad, a full-stack developer passionate about
                building complete applications with clean, high-quality code.
                I’m currently working at <b>Skylinx Technologies</b> while also
                exploring side projects to sharpen my skills and push
                boundaries.
              </p>
              <p className="mb-4">
                My journey into development began in school, where I was first
                introduced to HTML and CSS. Over the past 2 years, I've worked
                on a variety of projects, ranging from event hosting platforms
                and property-selling sites to tailored solutions for
                organizations and community-focused initiatives. Each project
                has deepened my appreciation for the endless possibilities in
                tech.
              </p>
              <p>
                What I love most about this field is the vast array of
                technologies available—though keeping up can be challenging,
                it's always rewarding. Outside of coding, I enjoy gaming,
                exploring new technologies, and delving into cybersecurity (a
                growing interest!). My philosophy is simple: explore broadly to
                find what resonates with you, then focus and excel at what you
                love.
              </p>
            </NeumorphicBox>
          </article>
          <aside className="md:w-1/2">
            <NeumorphicBox className="p-6">
              <section>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Personal Details
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Name:</span>
                    <span>Usman Muhammad</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Location:</span>
                    <span>Lahore, Punjab</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Experience:</span>
                    <span>1+ Years</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Email:</span>
                    <span>um50765@gmail.com</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-green-400">
                      Available for opportunity
                    </span>
                  </li>
                </ul>
              </section>
              <section className="mt-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "UI/UX Design",
                    "Cybersecurity",
                    "Games",
                    "Learning",
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="bg-[#0a192f] px-3 py-1 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </section>
            </NeumorphicBox>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
