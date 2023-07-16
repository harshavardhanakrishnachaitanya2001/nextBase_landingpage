import Link from "next/link";
import Image from "next/image";

const ProjectSection = () => {
  return (
    <section className="pt-[100px] max-w-full">
      <div className="px-4 mx-auto w-full container">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[655px] text-center mb-12">
              <span className="text-blue-500 text-lg md:text-base font-semibold mb-2 block">
                Know About Our Project
              </span>
              <h1 className="text-3xl sm:text-4xl mb-5 md:text-[45px] font-bold">
                {" "}
                About Our Software
              </h1>
              <p className="text-center text-base w-fit md:text-lg leading-relaxed mx-auto text-gray-400">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
            <div className="py-2 mb-[60px] divide-x md:divide-x-0 w-fit flex-wrap md:flex-nowrap mx-auto shadow-lg flex">
              <Link href="" className="my-4 px-6 flex items-center">
                <span className="mr-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.5"
                      cx="4.11765"
                      cy="4.11814"
                      r="4.11765"
                      fill="#4A6CF7"
                    />
                    <circle
                      cx="15.8824"
                      cy="4.11814"
                      r="4.11765"
                      fill="#4A6CF7"
                    />
                    <circle
                      opacity="0.5"
                      cx="15.8824"
                      cy="15.8828"
                      r="4.11765"
                      fill="#4A6CF7"
                    />
                    <circle
                      cx="4.11765"
                      cy="15.8828"
                      r="4.11765"
                      fill="#4A6CF7"
                    />
                  </svg>
                </span>
                SaaS
              </Link>
              <Link href="" className="my-4 px-6 flex items-center">
                <span className="mr-3">
                  <svg
                    width="32"
                    height="20"
                    viewBox="0 0 32 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.5"
                      cx="22"
                      cy="10.0005"
                      r="10"
                      fill="#4A6CF7"
                    />
                    <path
                      d="M22 10.0005L12 17.0005L12 3.00049L22 10.0005Z"
                      fill="#4A6CF7"
                    />
                    <rect y="9.00049" width="12" height="2" fill="#4A6CF7" />
                  </svg>
                </span>
                Business
              </Link>
              <Link href="" className="my-4 px-6 flex items-center">
                <span className="mr-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 11.563V20.0005L19.9994 14.2192V5.78174L10 11.563Z"
                      fill="#4A6CF7"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 14.3755L10 20.0005V11.563L0 5.78174V14.3755Z"
                      fill="#4A6CF7"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 8.12549L0 14.3755L10 20.0005L20 14.3755L10 8.12549Z"
                      fill="url(#paint0_linear_3:20)"
                      fill-opacity="0.64"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 0.000488281L0 5.78174L10 11.563L20 5.78174L10 0.000488281Z"
                      fill="url(#paint1_linear_3:20)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_3:20"
                        x1="-3.86893e-09"
                        y1="11.9781"
                        x2="19.8302"
                        y2="17.6066"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" stop-opacity="0.299" />
                        <stop
                          offset="1"
                          stop-color="#7587E4"
                          stop-opacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_3:20"
                        x1="3.7182"
                        y1="0.000488354"
                        x2="11.1258"
                        y2="15.7396"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#7587E4" />
                        <stop offset="1" stop-color="#CCD4FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                Software
              </Link>

              <Link href="" className="my-4 px-6 flex items-center">
                <span className="mr-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M20 5.71484V20.0006H5.71429V15.9189H15.9184V5.71484H20Z"
                      fill="#4A6CF7"
                    />
                    <rect
                      y="0.000488281"
                      width="14.2857"
                      height="14.2857"
                      fill="#4A6CF7"
                    />
                  </svg>
                </span>
                Mobile App
              </Link>
            </div>
            {/* <div className="text-center">
              <Image src="/about-image.png" alt="" width={500} height={500} />
            </div> */}
            <div className="mx-auto ">
              <Image
                src="/about-image.png"
                width={800}
                className="max-w-full mx-auto"
                height={600}
                alt="About Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
