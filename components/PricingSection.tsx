import Link from "next/link";

const PricingSection = () => {
  return (
    <section className="pt-[120px] pb-20">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="mx-auto max-w-[655px] text-center mb-20">
            <span className="text-lg font-semibold text-blue-500 block">
              Affordable Pricing
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[45px] mb-5">
              Our Pricing Plans
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[570px] mx-auto">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mx-[-16px]">
          <div className="w-full  sm:w-3/4 md:w-1/2 lg:w-1/3 px-4">
            <div className="shadow-pricing p-10 md:px-8 lg:py-10 lg:px-6 xl:p-10 text-center rounded-sm mb-10">
              <div className="flex justify-center items-end">
                <h2 className="font-bold text-[42px] mb-2">
                  $49
                  <span className="text-lg font-medium text-gray-400">
                    {" "}
                    /month{" "}
                  </span>
                </h2>
              </div>
              <p className="text-base text-gray-400 leading-relaxed font-medium pb-9 xl:pb-9 lg:pb-6 mb-9 lg:mb-6 xl:mb-9 border-b border-[#E9ECF8]">
                Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.
              </p>
              <div className="mb-8">
                <p className="font-medium text-base text-gray-400 mb-3">
                  All UI Components
                </p>
                <p className="font-medium text-base text-gray-400 mb-3">
                  Use with Unlimited Projects
                </p>
                <p className="font-medium text-base text-gray-400 mb-3">
                  Commercial Use
                </p>
                <p className="font-medium text-base text-gray-400 mb-3">
                  Email Support
                </p>
                <p className="font-medium text-base text-gray-400 mb-3">
                  Lifetime Access
                </p>
                <p className="font-medium text-base text-gray-400 mb-3">
                  Free Lifetime Updates
                </p>
              </div>
              <Link
                href=""
                className="flex items-center justify-center p-3 hover:shadow-lg rounded-sm bg-blue-600 text-semibold text-base text-white"
              >
                Purchase Now
              </Link>
            </div>
          </div>

          <div className="w-full sm:w-3/4  md:w-1/2 lg:w-1/3 px-4">
            <div className="shadow-pricing p-10 md:px-8 lg:py-10 lg:px-6 xl:p-10 text-center rounded-sm mb-10">
              <div className="flex justify-center items-end">
                <h2 className="font-bold text-[42px] mb-2">
                  $159
                  <span className="text-lg font-medium text-gray-400">
                    {" "}
                    /month{" "}
                  </span>
                </h2>
              </div>
              <p className="text-base text-gray-400 leading-relaxed font-medium pb-9 xl:pb-9 lg:pb-6 mb-9 lg:mb-6 xl:mb-9 border-b border-[#E9ECF8]">
                Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.
              </p>
              <div className="mb-8">
                <p className="font-medium text-base text-gray-400 mb-3">
                  All UI Components
                </p>
                <p className="font-medium text-base text-gray-400 mb-3">
                  Use with Unlimited Projects
                </p>
                <p className="font-medium text-base text-gray-400 mb-3">
                  Commercial Use
                </p>
                <p className="font-medium text-base text-gray-400 mb-3">
                  Email Support
                </p>
                <p className="font-medium text-base text-gray-400 mb-3">
                  Lifetime Access
                </p>
                <p className="font-medium text-base text-gray-400 mb-3">
                  Free Lifetime Updates
                </p>
              </div>
              <Link
                href=""
                className="flex items-center justify-center p-3 hover:shadow-lg rounded-sm bg-blue-600 text-semibold text-base text-white"
              >
                Purchase Now
              </Link>
            </div>
          </div>

          <div className=" w-full sm:w-3/4  md:w-1/2 lg:w-1/3 px-4">
            <div className="shadow-pricing p-10 md:px-8 lg:py-10 lg:px-6 xl:p-10 text-center rounded-sm mb-10">
              <div className="flex justify-center items-end">
                <h2 className="font-bold text-[42px] mb-2">
                  $599
                  <span className="text-lg font-medium text-gray-400">
                    {" "}
                    /month{" "}
                  </span>
                </h2>
              </div>
              <p className="text-base text-gray-400 leading-relaxed font-medium pb-9 xl:pb-9 lg:pb-6 mb-9 lg:mb-6 xl:mb-9 border-b border-[#E9ECF8]">
                Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.
              </p>
              <div className="mb-8">
                <p className="font-medium text-base text-gray-400 mb-3">
                  All UI Components
                </p>
                <p className="font-medium text-base text-gray-400 mb-3">
                  Use with Unlimited Projects
                </p>
                <p className="font-medium text-base text-gray-400 mb-3">
                  Commercial Use
                </p>
                <p className="font-medium text-base text-gray-400 mb-3">
                  Email Support
                </p>
                <p className="font-medium text-base text-gray-400 mb-3">
                  Lifetime Access
                </p>
                <p className="font-medium text-base text-gray-400 mb-3">
                  Free Lifetime Updates
                </p>
              </div>
              <Link
                href=""
                className="flex items-center justify-center p-3 hover:shadow-lg rounded-sm bg-blue-600 text-semibold text-base text-white"
              >
                Purchase Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
