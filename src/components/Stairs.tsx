"use client";
import { motion } from "framer-motion";

// Variants for the gradient slide animation
const gradientAnimation = {
  initial: {
    backgroundPosition: "0% 0%",
    opacity: 1,
  },
  animate: {
    backgroundPosition: "100% 100%",
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    backgroundPosition: "0% 0%",
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const Stairs: React.FC = () => {
  return (
    <motion.div
      variants={gradientAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-300 via-blue-500 to-blue-700 bg-[length:400%_400%] z-40"
    />
  );
};

export default Stairs;

