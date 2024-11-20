"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.8, ease: "easeInOut" },
      }}
      className="bg-gray-900 text-white py-12 mt-16"
    >
      <div className="container mx-auto text-center px-6">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Let's Connect</h3>
        <p className="text-white/60 text-lg mb-8">
          I&apos;m open to new opportunities. Let&apos;s chat or collaborate!
        </p>

        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/ranabismah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/rana-bisma-qasim-537bab2bb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        <p className="text-sm text-white/60">
          &copy; {new Date().getFullYear()} Rana Bisma. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
