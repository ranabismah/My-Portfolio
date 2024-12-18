"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Project interface
interface Project {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A resume builder hepls to create a resume in short time.",
    githubLink: "https://github.com/ranabismah/hackathon-milestone5.git",
    liveLink: "https://hackathon-milestone5-nine-iota.vercel.app/",
    image: "/assets/resume.JPG",
  },
  {
    title: "Project Two",
    description: "A portfolio website on next.js by applying custom-css.",
    githubLink: "https://github.com/ranabismah/Portfolio-by-Custom-CSS.git",
    liveLink: "https://portfolio-by-custom-css.vercel.app/",
    image: "/assets/port.JPG",
  },
  {
    title: "Project Three",
    description: "A blog website on next.js by applying Tailwind-css.",
    githubLink: "https://github.com/ranabismah/milestone3-assignment-blog.git",
    liveLink: "https://milestone3-assignment-blog-eight.vercel.app/",
    image: "/assets/blog.JPG",
  },
  {
    title: "Project Four",
    description: "A portfolio website on next.js by applying Tailwind-css.",
    githubLink: "https://github.com/ranabismah/Hackathon2.git",
    liveLink: "https://hackathon2-beryl.vercel.app/",
    image: "/assets/figma-design.JPG",
  },
  
];

const Projects: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.8, ease: "easeInOut" } }}
      className="py-16"
    >
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4">My Projects</h2>
        <motion.div
          className="grid grid-cols-1 my-5 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.8, ease: "easeInOut" } }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Parallax Effect Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6">
                <h3 className="text-xl text-blue-950 font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex gap-6 mt-4 justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex items-center gap-2 text-blue-950 hover:bg-blue-950 hover:text-white"
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-xl" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex items-center gap-2 text-blue-950 hover:bg-blue-950 hover:text-white"
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt className="text-xl" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;

