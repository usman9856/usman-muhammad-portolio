"use client";
import React, { useState } from "react";
import NeumorphicBox from "./ui/NeumorphicBox";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react";
import ToastMessage from "../utils/toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "fail";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "um50765@gmail.com", // Replace this with your recipient email
          subject: formData.subject,
          text: formData.message,

          html: `<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f9; padding: 20px; margin: 0;">
    <div style="max-width: 600px; margin: 20px auto; padding: 20px; border-radius: 12px; background-color: #ffffff; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
      <h2 style="font-size: 20px; color: #333333; text-align: center; margin-bottom: 20px;">New Contact Message</h2>
      <p style="font-size: 16px; color: #555555; margin-bottom: 20px; text-align: center;">
        You’ve received a new message from your portfolio website!
      </p>
      <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; background-color: #f9f9f9;">
        <p style="font-size: 16px; margin: 0;">
          <b>From:</b> ${formData.name} (<a href="mailto:${formData.email}" style="color: #007BFF; text-decoration: none;">${formData.email}</a>)
        </p>
        <p style="font-size: 16px; color: #555555; margin-top: 10px;">
          <b>Subject:</b> ${formData.subject}
        </p>
        <p style="font-size: 16px; color: #555555; margin-top: 20px; white-space: pre-line;">
          ${formData.message}
        </p>
      </div>
      <p style="font-size: 14px; color: #999999; margin-top: 20px; text-align: center;">
        This email was automatically sent from your portfolio contact form.
      </p>
    </div>
  </body>
</html>           `,
        }),
      });

      if (response.ok) {
        setToast({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setToast({ type: "fail", message: "Failed to send your message." });
      }
    } catch (error) {
      console.error("Error:", error);
      setToast({ type: "fail", message: "An error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#081529]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-2 text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Information Section */}
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
            </NeumorphicBox>
          </div>

          {/* Contact Form Section */}
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
                  className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg font-medium transition-opacity ${isLoading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
                    }`}
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  <SendIcon size={16} />
                </button>
              </form>
            </NeumorphicBox>
          </div>
        </div>
      </div>

      {/* Render ToastMessage */}
      {toast && (
        <ToastMessage
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default ContactSection;

