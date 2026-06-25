import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import faqImage from "../../../assets/images/home/experienced-attorney-rotate.webp";
import arrowDecor from "../../../assets/decorations/arrow-left.webp";
import { faqData } from "../data/faqData";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section aria-labelledby="faq-heading" className="relative overflow-hidden">
      {/* ARROW */}
      <img src={arrowDecor} loading="lazy" alt=""  aria-hidden="true" className="hidden sm:block absolute -left-5 w-40 xl:w-auto pointer-events-none select-none" />

      <div className="container-main ">
        <div className="container-content py-17.5 md:py-22.5 lg:py-25">

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12.5 xl:gap-15 items-center">
            {/* LEFT IMAGE */}
            <img src={faqImage} alt="Experienced attorney answering client legal questions" loading="lazy" decoding="async" className="w-full max-w-[350px] lg:max-w-[380px]  aspect-[382/600] object-cover shrink-0" />

            {/* RIGHT CONTENT */}
            <div className="w-full">

              {/* TITLE */}
              <h2 id="faq-heading" className="mb-8 sm:mb-10 lg:mb-15 text-center lg:text-left text-[30px] sm:text-[36px] text-light">
                Frequently Asked Questions
              </h2>
              {/* FAQ LIST */}
              <div className="space-y-4 sm:space-y-5.5">
                {faqData.map((item, index) => {
                  const isOpen = activeIndex === index;
                  return (
                    <article key={index} onClick={() => toggleFAQ(index)} className="flex items-center gap-3 lg:gap-4 cursor-pointer">

                    {/* ICON */}
                    <button aria-expanded={isOpen} aria-label={isOpen ? "Close FAQ" : "Open FAQ"} className={`size-9 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-light border-[#E5EFFF] text-primary" : "bg-dark-gray border-[#F0F6FF] text-light"}`}>
                      <motion.div initial={false} animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                        {isOpen ? (
                           <FiMinus className="text-sm sm:text-base" />
                         ) : (
                           <FiPlus className="text-sm sm:text-base"  />
                         )}
                      </motion.div>
                    </button>

                    {/* QUESTION BOX */}
                    <div className={`w-full px-4 py-5 sm:p-6 lg:p-7 border transition-all duration-300 ${isOpen ? "bg-light border-[#E5EFFF] " : "bg-transparent border-[#F0F6FF]"}`}>

                      {/* QUESTION */}
                      <button type="button" className="w-full text-left focus:outline-none">
                        <h3 className={`font-medium text-base sm:text-lg lg:text-xl transition-colors duration-300 ${isOpen ? "pb-4 sm:pb-5 text-primary" : "text-light" } `}>
                          {item.question}
                        </h3>
                      </button>

                      {/* ANSWER */}
                        <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div key="answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98],}} className="overflow-hidden">
                            <p className="pt-4 sm:pt-5 border-t border-primary font-medium text-sm sm:text-base text-primary">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                  </article>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default FAQSection;