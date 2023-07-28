import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden z-10 pt-[120px] pb-16 md:pt-[150px] xl:pt-[180px]">
      <div className="max-w-[1320px] w-full mx-auto px-4">
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full px-4">
            

            <div className="mx-auto max-w-[655px] text-center mb-12">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-tight md:leading-tight mb-5">
                Complete Tailwind CSS Template for SaaS website
              </h1>
              <p className="font-medium text-lg md:text-xl leading-relaxed text-gray-400 opacity-90 mb-12">
                SaaS Tailwind is a complete Tailwind CSS template crafted
                specially for SaaS, Software Mobile App and Web App Sites. Comes
                with all essential components and pages you need to kickstart
                your SaaS websites.
              </p>
              <div className="flex items-center justify-center">
                <Link href="" className="text-white text-base font-semibold bg-blue-500 py-4 px-7 hover:shadow-lg mx-2 rounded-sm transition duration-300 ease-in-out">Explore Features</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
