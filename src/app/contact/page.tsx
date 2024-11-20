"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";


// Type definition for the contact info
interface Info {
  icon: JSX.Element;
  title: string;
  description: string;
}

const info: Info[] = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ranabismah178@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Karachi, Sindh Pakistan",
  },
];

// Type definition for the form data
interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.firstname || !formData.email || !formData.message) {
      setError("Please fill out all required fields.");
      return;
    }
    setError("");

    setTimeout(() => {
      setSuccess("Your message has been sent successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <><motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.8, ease: "easeInOut" },
      }}
      className="py-16 px-6"
    >
      <div className="container mx-auto text-center mb-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4">Contact Me</h1>
        <p className="text-xl text-primary mt-4">Feel free to reach out for collaborations or inquiries!</p>
      </div>

      <div className="flex flex-col xl:flex-row gap-12">
        {/* Contact Form Section */}
        <div className="xl:w-1/2 bg-[#1e1e1e] rounded-xl p-8 shadow-lg">
          <h3 className="text-3xl text-blue-600 font-semibold mb-6">Let&apos;s work together</h3>
          <p className="text-white/60 mb-6">Have an idea or project? Let&apos;s create something amazing together.</p>

          {/* Error and Success Messages */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="bg-gray-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600" />
              <Input
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="bg-gray-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="bg-gray-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600" />
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-gray-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600" />
            </div>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className="bg-gray-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600"
              rows={6} />
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 text-white">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex-1 flex items-center xl:justify-end">
          <ul className="flex flex-col gap-8">
            {info.map((item, index) => (
              <li key={index} className="flex items-center gap-6">
                <div className="w-[72px] h-[72px] bg-[#27272c] text-blue-600 rounded-md flex items-center justify-center shadow-xl transform hover:scale-110 transition-all duration-300">
                  <div className="text-3xl">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-primary">{item.title}</p>
                  <h3 className="text-xl text-primary">{item.description}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section></>
  );
};

export default Contact;


