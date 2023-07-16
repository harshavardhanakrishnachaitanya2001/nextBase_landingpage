import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="pt-[100px] md:pt-[180px] max-w-full">
        <div className="px-4 md:mx-auto w-full container">
        <h1 className="font-bold text-center  text-3xl md:text-4xl lg:text-5xl mb-5 leading-tight">
          Complete Tailwind CSS Template for SaaS Website
        </h1>
        <p className="text-center mb-12 text-xl text-gray-400">
          SaaS Tailwind is a complete Tailwind CSS template crafted specially
          for SaaS, Software Mobile App and Web App Sites. Comes with all
          essential components and pages you need to kickstart your SaaS
          websites.
        </p>
        <div className="flex justify-center">
          <Link
            href="/features"
            className=" bg-blue-500 text-white font-bold py-4 px-6"
          >
            Explore Features
          </Link>
        </div>
        <div className="text-center">
            <div className="mt-10 lg:mt-10 w-full">
                <Image src="/hero-image.png" width={800} className="mx-auto" height={600} alt="Hero Image" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection