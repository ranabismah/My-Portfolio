"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface PhotoProps {
  className?: string;
}

const Photo: React.FC<PhotoProps> = ({ className }) => {
  return (
    <div className={`w-full h-full relative ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              borderColor: "rgb(17, 24, 39)",
              boxShadow: "0 0 20px rgba(17, 24, 39, 0.3)",
              transition: {
                delay: 1.6,
                duration: 0.6,
                ease: "easeInOut",
                opacity: { delay: 1.6, duration: 0.4 },
                scale: { delay: 1.6, duration: 0.4 },
                boxShadow: { delay: 1.6, duration: 0.4 },
              },
            }}
            className="absolute inset-0 border-4 border-transparent rounded-full group-hover:border-blue-950 group-hover:scale-105 group-hover:shadow-lg transition-all duration-500 ease-in-out"
          />
          <Image
            src="/assets/photo.JPG"
            alt="Profile Photo"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
