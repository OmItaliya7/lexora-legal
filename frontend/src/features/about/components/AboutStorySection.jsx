import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AboutCard from "./AboutCard";
import { aboutStoryData } from "../data/aboutStoryData";
import ArrowLeft from "../../../assets/icons/testimonials/left-move.svg?react";
import ArrowRight from "../../../assets/icons/testimonials/right-move.svg?react";
import arrowDecor from "../../../assets/decorations/about-story-arrow.webp";

const AboutStorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentStory = aboutStoryData[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === aboutStoryData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? aboutStoryData.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden py-12.5">
      <img src={arrowDecor} alt="" aria-hidden="true" loading="lazy" className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none select-none" />
      <div className="container-main">
        <div className="mx-auto" style={{maxWidth: currentStory.maxWidth}}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
            <AboutCard {...aboutStoryData[currentIndex]}/>
            </motion.div>

          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 lg:mt-12.5 flex justify-center gap-5">
        <button onClick={prevSlide} aria-label="Previous slide" className="group w-10 h-10 rounded-full border border-light flex items-center justify-center hover:bg-light transition-all duration-300">
          <ArrowLeft className="text-light group-hover:text-primary" />
        </button>

        <button onClick={nextSlide} aria-label="Next slide" className="group w-10 h-10 rounded-full border border-light flex items-center justify-center hover:bg-light transition-all duration-300">
          <ArrowRight className="text-light group-hover:text-primary" />
        </button>

      </div>
    </section>
  );
};

export default AboutStorySection;