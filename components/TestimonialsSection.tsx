import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <section className="pt-[120px] pb-20">
      <div className="container mx-auto">
        <div className="px-4 w-full">
          <div className="mx-auto max-w-[655px] text-center mb-20">
            <span className="text-lg font-semibold text-blue-500 block">
              Testimonials
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[45px] mb-5">
              What Clients Says
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[570px] mx-auto">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full lg:w-1/2 px-4">
            <div className="overflow-hidden rounded-sm p-8 lg:px-6 xl:px-8 mb-10">
              <div className="sm:flex justify-between lg:block xl:flex">
                <div className="w-full flex items-center">
                  <div className="rounded-full w-[60px] h-[60px] overflow-hidden mt-2 mr-4">
                    <Image src="/author-01.png" alt="" width={60} height={60} />
                  </div>
                  <div className="w-full">
                    <h5 className="text-base md:text-lg lg:text-base xl:text-lg font-medium mb-1">
                      Musharof Chowdhury
                    </h5>
                    <p className="text-base font-medium text-gray-400">
                      Founder @ TailGrids
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
