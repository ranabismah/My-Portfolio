"use client";
import { FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";


// Define interface for a skill
interface Skill {
  icon: JSX.Element;
  name: string;
  color: string;
}

// Define interface for the skills object
interface SkillsData {
  title: string;
  description: string;
  skillList: Skill[];
}

const skills: SkillsData = {
  title: "My Skills",
  description: "Technologies I work with in web development:",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5", color: "#e34f26" }, 
    { icon: <FaCss3 />, name: "CSS", color: "#2965f1" }, 
    { icon: <FaJs />, name: "JavaScript", color: "#f7df1e" }, 
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178c6" }, 
    { icon: <FaNodeJs />, name: "Node.js", color: "#8cc84b" }, 
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38bdf8" }, 
    { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" }, 
  ],
};

const Skills: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 1, ease: "easeInOut" },
      }}
      className="min-h-screen flex items-center justify-center py-16 px-4"
    >
      <div className="container mx-auto text-center px-6">
        {/* Title Section */}
        <div className="mb-12">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4">
            {skills.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">{skills.description}</p>
        </div>

        {/* Skill Circles with Tooltip */}
        <div className="relative flex flex-wrap justify-center gap-10 py-10">
          {skills.skillList.map((skill, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center w-32 h-32 rounded-full shadow-xl cursor-pointer transition-all duration-500 transform hover:scale-125 hover:shadow-lg"
            >
              {/* Icon */}
              <div
                className="text-5xl transition-all duration-300"
                style={{
                  color: skill.color, 
                }}
              >
                {skill.icon}
              </div>

              {/* Name Label */}
              <div className="absolute bottom-0 w-full text-sm text-blue-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </motion.div>
  );
};

export default Skills;


