

import Photo from "@/components/Photo";

const Page: React.FC = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo className="rounded-full" /> 
          </div>
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none xl:ml-16">
            <h1 className="h1 mb-6">
              About
              <span className="text-blue-800"> Me!</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-primary">
              Hi there! I’m Rana Bisma Qasim, a passionate Full Stack Developer just
              starting my journey in the tech industry. With a solid grasp of
              HTML, CSS, and JavaScript/TypeScript, I enjoy building engaging web
              applications using frameworks like Next.js and Tailwind CSS.
            </p>

            <h2 className="h2 my-3">
              My<span className="text-blue-800"> Mission</span>
            </h2>
            <p>
              Delivering top-notch quality work to clients, exceeding
              expectations, and building long-lasting relationships.
            </p>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Page;
