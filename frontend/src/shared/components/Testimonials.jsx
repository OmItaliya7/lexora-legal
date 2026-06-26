import { motion } from "framer-motion";
import ArrowLeft from "@/assets/icons/testimonials/left-move.svg?react"
import ArrowRight from "@/assets/icons/testimonials/right-move.svg?react"
import { useState, useRef, useEffect, useCallback } from "react";
import TestimonialCard from "./TestimonialCard.jsx"
import {data} from "@/shared/data/testimonialData.js"
import arrowDecor from "@/assets/decorations/arrow-left.webp";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  
  const cardRef = useRef(null);

  const maxIndex = data.length - visibleCount;

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (cardRef.current) {
        const gap = width >= 1280 ? 30 : 24;
        setCardWidth(cardRef.current.offsetWidth + gap);
      }
      
      if (width < 640) setVisibleCount(1);
      else if (width < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const nextSlide = useCallback(() =>{
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  },[maxIndex])

  const prevSlide = useCallback(() =>{
    setIndex((prev) => Math.max(prev - 1, 0));
  },[])

  return (
    <section aria-labelledby="testimonials-heading" className="relative overflow-hidden">
      <img src={arrowDecor} alt="" width={250} height={120} aria-hidden="true" loading="lazy" className="hidden sm:block absolute left-0 top-[10px] lg:top-[25px] 2xl:top-1 w-40 lg:w-50 2xl:w-62.5 pointer-events-none select-none"/>

      <div className="container-main">
        <div className="container-content py-17.5 md:py-22.5 lg:py-25">

          <h2 id="testimonials-heading" className="mb-12 lg:mb-17.5 font-bold text-3xl sm:text-4xl lg:text-[40px] text-light text-center">
            What Our Clients Say
          </h2>
          
          <div className="overflow-hidden w-full px-[2px]"> 
            <motion.div className="flex gap-6 xl:gap-7.5 transform-gpu" animate={{ x: -index * cardWidth }} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1], type: "tween" }}>
              {data.map((item) => (
                <TestimonialCard 
                  key={item.id}
                  cardRef={item.id === 1 ? cardRef : null}
                  item={item}
                />
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-5 lg:gap-6 mt-10">
            <button onClick={prevSlide} disabled={index === 0} aria-label="Previous slide" className="group w-10 h-10 rounded-full border border-light flex items-center justify-center text-light hover:bg-light transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed">
              <ArrowLeft className="text-light group-hover:text-primary transition-colors duration-300" />
            </button>

            <button onClick={nextSlide} disabled={index >= maxIndex} aria-label="Next slide" className="group w-10 h-10 rounded-full border border-light flex items-center justify-center text-light hover:bg-light transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed">
              <ArrowRight className="text-light group-hover:text-primary transition-colors duration-300" />
            </button>
          </div>

        </div>
      </div>
      
    </section>
  );
};

export default Testimonials; 