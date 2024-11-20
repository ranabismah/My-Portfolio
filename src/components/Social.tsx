"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
      }}
      className={containerStyles || "flex justify-center gap-8 mt-8"}
    >
      <a
        href="https://github.com/ranabismah"
        target="_blank"
        rel="noopener noreferrer"
        className={`${iconStyles} text-blue-800 hover:text-blue-600 transition-all duration-300`}
        aria-label="GitHub"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/rana-bisma-qasim-537bab2bb"
        target="_blank"
        rel="noopener noreferrer"
        className={`${iconStyles} text-blue-800 hover:text-blue-600 transition-all duration-300`}
        aria-label="LinkedIn"
      >
        <FaLinkedin size={30} />
      </a>
    </motion.div>
  );
};

export default Social;

