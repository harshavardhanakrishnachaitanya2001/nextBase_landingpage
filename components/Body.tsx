"use client";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import AboutProjects from "./AboutProjectSection";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";
import BrandsSection from "./BrandsSection";
import UpdatesSection from "./UpdatesSection";
import ContactsSection from "./ContactsSection";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";

const Body = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 200) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 200) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [showScroll]);

  return (
    <>
      <HeroSection />
      <AboutProjects />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <BrandsSection />
      <UpdatesSection />
      <ContactsSection />
      <NewsletterSection />
      <Footer />
      {showScroll && (
        <Link
          href="#"
          className="hidden items-center justify-center bg-blue-500 text-white w-10 h-10 rounded-sm fixed bottom-8 right-8 left-auto z-[999] hover:shadow-lg transition shadow-md"
          style={{ display: "flex" }}
        >
          <AiOutlineDown className="rotate-180" />
        </Link>
      )}
    </>
  );
};

export default Body;
