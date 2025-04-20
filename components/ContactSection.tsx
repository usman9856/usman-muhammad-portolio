"use client";
import React, { useState } from "react";
import NeumorphicBox from "./ui/NeumorphicBox";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <section id="contact" className="py-20 px-6 bg-[#081529]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-2 text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-2/5">
            <NeumorphicBox className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <NeumorphicBox className="p-3">
                      <MailIcon size={20} className="text-blue-400" />
                    </NeumorphicBox>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-400">um50765@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <NeumorphicBox className="p-3">
                      <PhoneIcon size={20} className="text-blue-400" />
                    </NeumorphicBox>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-400">+92 (331) 880-3736</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4">
                    <NeumorphicBox className="p-3">
                      <MapPinIcon size={20} className="text-blue-400" />
                    </NeumorphicBox>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-400">Lahore, Punjab</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  {["github", "linkedin", "twitter", "instagram"].map(
                    (platform) => (
                      <NeumorphicBox
                        key={platform}
                        className="p-3 hover:text-blue-400 cursor-pointer"
                      >
                        <span className="capitalize">{platform[0]}</span>
                      </NeumorphicBox>
                    )
                  )}
                </div>
              </div>
            </NeumorphicBox>
          </div>
          <div className="md:w-3/5">
            <NeumorphicBox className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm">
                      Name
                    </label>
                    <NeumorphicBox className="p-1">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#0c1e3a] p-2 rounded-lg focus:outline-none"
                        required
                      />
                    </NeumorphicBox>
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Email
                    </label>
                    <NeumorphicBox className="p-1">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#0c1e3a] p-2 rounded-lg focus:outline-none"
                        required
                      />
                    </NeumorphicBox>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 text-sm">
                    Subject
                  </label>
                  <NeumorphicBox className="p-1">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[#0c1e3a] p-2 rounded-lg focus:outline-none"
                      required
                    />
                  </NeumorphicBox>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm">
                    Message
                  </label>
                  <NeumorphicBox className="p-1">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-[#0c1e3a] p-2 rounded-lg focus:outline-none resize-none"
                      required
                    ></textarea>
                  </NeumorphicBox>
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Send Message <SendIcon size={16} />
                </button>
              </form>
            </NeumorphicBox>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
