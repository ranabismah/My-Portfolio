// src/app/page.tsx
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import About from "./about/page";
import Contact from "./contact/page";  
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Skills from "./skills/page";
import Projects from "./projects/page";



const Home: React.FC = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Section */}
          <div className="text-center xl:text-left order-2 xl:order-none mb-8 xl:mb-0">
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-blue-950">Rana Bisma Qasim</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-primary">
              Dedicated Full Stack Developer with a strong emphasis on backend
              technologies and a passion for Generative AI. I am proficient
              in various programming languages and technologies.
            </p>
            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-blue-900 rounded-full flex justify-center items-center text-blue-800 text-base hover:bg-blue-700 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Profile Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Sections */}
      <div>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        
      </div>
    </section>
  );
};

export default Home;
