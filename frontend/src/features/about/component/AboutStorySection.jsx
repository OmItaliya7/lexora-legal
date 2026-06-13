// import AboutCard from "./AboutCard";

// import { aboutStoryData } from "../data/aboutStoryData";

// const AboutStorySection = () => {
//   return (
//     <section className="flex flex-col gap-[90px] lg:gap-[100px]">
//       {aboutStoryData.map((item, index) => (
//         <AboutCard
//           key={index}
//           {...item}
//           delay={index * 0.1}
//         />
//       ))}

//     </section>
//   );
// };

// export default AboutStorySection;






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
      <div className="max-w-[1440px] mx-auto px-5">
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
        <button onClick={prevSlide} aria-label="Previous slide" className="group w-10 h-10 rounded-full border border-[#FEFCE1] flex items-center justify-center hover:bg-[#FEFCE1] transition-all duration-300">
          <ArrowLeft className="text-[#FEFCE1] group-hover:text-[#0E100F]" />
        </button>

        <button onClick={nextSlide} aria-label="Next slide" className="group w-10 h-10 rounded-full border border-[#FEFCE1] flex items-center justify-center hover:bg-[#FEFCE1] transition-all duration-300">
          <ArrowRight className="text-[#FEFCE1] group-hover:text-[#0E100F]" />
        </button>

      </div>
    </section>
  );
};

export default AboutStorySection;








// import { useEffect, useRef, useState } from "react";
// import AboutCard from "./AboutCard";
// import { aboutStoryData } from "../data/aboutStoryData";

// const AboutStorySection = () => {
//   const containerRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleScroll = () => {
//       // Get the container's position relative to viewport
//       const containerRect = container.getBoundingClientRect();
//       const containerTop = containerRect.top;
//       const containerHeight = containerRect.height;
//       const windowHeight = window.innerHeight;

//       // Calculate when the section starts entering viewport
//       const sectionStart = container.offsetTop - windowHeight / 2;
//       const currentScroll = window.scrollY;
//       const scrollWithinSection = currentScroll - sectionStart;

//       // Calculate which card should be active based on scroll position
//       const cardHeight = windowHeight * 0.8; // Each card takes ~80% of viewport
//       const newIndex = Math.floor(scrollWithinSection / cardHeight);
//       const clampedIndex = Math.min(newIndex, aboutStoryData.length - 1);

//       setActiveIndex(Math.max(0, clampedIndex));

//       // Calculate progress within current card (0 to 1)
//       const progressWithinCard =
//         (scrollWithinSection % cardHeight) / cardHeight;
//       setScrollProgress(Math.max(0, Math.min(1, progressWithinCard)));
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Call once on mount

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative w-full"
//       style={{
//         height: `${aboutStoryData.length * 100}vh`,
//       }}
//     >
//       {/* STICKY CONTAINER */}
//       <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
//         {/* CARDS CONTAINER WITH TRANSITIONS */}
//         <div className="relative w-full h-full">
//           {aboutStoryData.map((item, index) => (
//             <AboutCard
//               key={index}
//               {...item}
//               isActive={index === activeIndex}
//               scrollProgress={scrollProgress}
//               index={index}
//               totalCards={aboutStoryData.length}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutStorySection;