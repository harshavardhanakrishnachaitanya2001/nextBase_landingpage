import Link from "next/link";

const ContactsSection = () => {
  return (
    <section className="py-[120px]">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[570px] text-center mb-[100px]">
              <span className="text-lg font-semibold text-blue-500 mb-2 block">
                Need Any Help?
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[45px] mb-4">
                Contact With Us
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed md:leading-relaxed">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mx-[-16px]">
            <div className="w-full lg:w-10/12 xl:w-8/12 px-4">
                <div>
                    <form>
                        <div className="flex flex-wrap mx-[-16px]">
                            <div className="w-full md:w-1/2 px-4">
                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-400 mb-3">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input type="text" placeholder="Enter your first name" className="w-full border border-[#DEE3F7] rounded-sm py-3 px-6 text-gray-400 text-base outline-none focus-visible:shadow-none focus:border-blue-500"/>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 px-4">
                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-400 mb-3">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input type="text" placeholder="Enter your first name" className="w-full border border-[#DEE3F7] rounded-sm py-3 px-6 text-gray-400 text-base outline-none focus-visible:shadow-none focus:border-blue-500"/>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 px-4">
                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-400 mb-3">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input type="text" placeholder="Enter your first name" className="w-full border border-[#DEE3F7] rounded-sm py-3 px-6 text-gray-400 text-base outline-none focus-visible:shadow-none focus:border-blue-500"/>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 px-4">
                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-400 mb-3">
                                        your Email <span className="text-red-500">*</span>
                                    </label>
                                    <input type="text" placeholder="Enter your first name" className="w-full border border-[#DEE3F7] rounded-sm py-3 px-6 text-gray-400 text-base outline-none focus-visible:shadow-none focus:border-blue-500"/>
                                </div>
                            </div>

                            <div className="w-full px-4">
                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-400 mb-3">
                                        Your Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea rows={5} placeholder="Enter your Message" className="w-full border border-[#DEE3F7] rounded-sm py-3 px-6 text-gray-400 text-base outline-none focus-visible:shadow-none focus:border-blue-500"/>
                                </div>
                            </div>

                            <div className="w-full mx-auto text-center px-4">
                                <Link href="" className="text-base font-medium text-white bg-blue-500 py-4 px-11 hover:shadow-lg inline-flex mx-auto transition duration-300 ease-in-out">Submit Ticket</Link>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
