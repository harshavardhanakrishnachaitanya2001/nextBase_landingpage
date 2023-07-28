import Link from "next/link";
import React from "react";
import Image from "next/image";

const UpdatesSection = () => {
  return (
    <section className="pt-[120px]">
      <div className="px-4 max-w-[1320px] w-full mx-auto">
        <div className="flex flex-wrap mx-[-16px]">
          <div className="px-4 w-full">
            <div className="mx-auto max-w-[570px] text-center mb-[100px]">
              <span className="text-lg font-semibold text-blue-500 mb-2 block">
                Latest Updates
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[45px] mb-4">
                From The Blog
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="border-b pb-20 border-[#E9ECF8]">
          <div className="flex flex-wrap mx-[-16px] justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative rounded-sm shadow-pricing overflow-hidden mb-10">
                <Link href="" className="w-full block relative p-3 pb-0">
                  <Image
                    src="/blog-01.jpg"
                    width={384}
                    height={230.4}
                    alt=""
                    className="w-full"
                  />
                </Link>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <span className="bg-blue-500 rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white mb-2">
                    Computer
                  </span>
                  <h3 className="">
                    <Link
                      href=""
                      className="font-bold text-xl sm:text-2xl mb-4 hover:text-blue-500"
                    >
                      Best UI components for modern websites
                    </Link>
                  </h3>
                  <p className="text-base text-gray-400 font-medium pb-6 mb-6 border-b border-[#E9ECF8]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras sit amet dictum neque, laoreet dolor.
                  </p>
                  <div className="flex items-center">
                    <div className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-[#E9ECF8]">
                      <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                        <Image
                          src="/auth-01.png"
                          width={40}
                          height={40}
                          alt=""
                        />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-medium mb-1">
                          By{" "}
                          <Link href="" className="hover:text-blue-500">
                            Samuyl Joshi
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-400">
                          Graphic Designer
                        </p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4 className="text-sm font-medium mb-1">Date</h4>
                      <p className="text-xs text-gray-400">15 Dec, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative rounded-sm shadow-pricing overflow-hidden mb-10">
                <Link href="" className="w-full block relative p-3 pb-0">
                  <Image
                    src="/blog-01.jpg"
                    width={384}
                    height={230.4}
                    alt=""
                    className="w-full"
                  />
                </Link>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <span className="bg-blue-500 rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white mb-2">
                    Design
                  </span>
                  <h3 className="">
                    <Link
                      href=""
                      className="font-bold text-xl sm:text-2xl mb-4 hover:text-blue-500"
                    >
                      9 simple ways to improve your design skills
                    </Link>
                  </h3>
                  <p className="text-base text-gray-400 font-medium pb-6 mb-6 border-b border-[#E9ECF8]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras sit amet dictum neque, laoreet dolor.
                  </p>
                  <div className="flex items-center">
                    <div className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-[#E9ECF8]">
                      <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                        <Image
                          src="/auth-01.png"
                          width={40}
                          height={40}
                          alt=""
                        />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-medium mb-1">
                          By{" "}
                          <Link href="" className="hover:text-blue-500">
                            Samuyl Joshi
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-400">
                          Graphic Designer
                        </p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4 className="text-sm font-medium mb-1">Date</h4>
                      <p className="text-xs text-gray-400">15 Dec, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative rounded-sm shadow-pricing overflow-hidden mb-10">
                <Link href="" className="w-full block relative p-3 pb-0">
                  <Image
                    src="/blog-01.jpg"
                    width={384}
                    height={230.4}
                    alt=""
                    className="w-full"
                  />
                </Link>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <span className="bg-blue-500 rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white mb-2">
                    Development
                  </span>
                  <h3 className="">
                    <Link
                      href=""
                      className="font-bold text-xl sm:text-2xl mb-4 hover:text-blue-500"
                    >
                      Tips to quickly improve your coding skills
                    </Link>
                  </h3>
                  <p className="text-base text-gray-400 font-medium pb-6 mb-6 border-b border-[#E9ECF8]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras sit amet dictum neque, laoreet dolor.
                  </p>
                  <div className="flex items-center">
                    <div className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-[#E9ECF8]">
                      <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                        <Image
                          src="/auth-01.png"
                          width={40}
                          height={40}
                          alt=""
                        />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-medium mb-1">
                          By{" "}
                          <Link href="" className="hover:text-blue-500">
                            Samuyl Joshi
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-400">
                          Graphic Designer
                        </p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4 className="text-sm font-medium mb-1">Date</h4>
                      <p className="text-xs text-gray-400">15 Dec, 2023</p>
                    </div>
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

export default UpdatesSection;
