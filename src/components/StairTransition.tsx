"use client"; 

import { usePathname } from "next/navigation"; 
import { AnimatePresence, motion } from "framer-motion";
import Stairs from "./Stairs";

const StairTransition: React.FC = () => {
  const pathname = usePathname(); 

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stairs />
          <motion.div
            className="h-screen w-screen fixed bg-blue-950 top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;



