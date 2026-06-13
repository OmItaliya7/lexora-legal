// import { motion } from "framer-motion";

// import heroBg from "../../../assets/images/about/about-hero-bg.png";
// import about1 from "../../../assets/images/about/about1.webp";
// import about2 from "../../../assets/images/about/about2.webp";
// import about3 from "../../../assets/images/about/about3.webp";

// import Header from "../../../shared/layout/Header";

// const AboutHero = () => {

//   const aboutHeroImages = [about1,about2,about3];

//   const marqueeImages = [...aboutHeroImages, ...aboutHeroImages];

//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* BACKGROUND IMAGE */}
//       <div className="absolute inset-0" style={{backgroundImage: `url(${heroBg})`}}/>

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-[linear-gradient(304.61deg,rgba(14,16,15,0.95)_42.67%,rgba(14,16,15,0.95)_75%,rgba(14,16,15,0.0665)_103.96%)]" />

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30 2xl:px-0">
//         <Header />

//         <div className="py-17.5 md:py-22.5 lg:py-25 space-y-15 lg:space-y-25">
//           {/* HERO CONTENT */}
//           <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">

//             {/* LEFT */}
//             <div>
//               <p className="mb-4 lg:mb-7 text-[#D1B06B] text-2xl font-semibold">
//                 Law Firm
//               </p>
//               <h1 className="text-[#FEFCE1] text-5xl sm:text-7xl lg:text-[90px] font-bold leading-[120%]">
//                 About Us
//               </h1>
//             </div>

//             {/* RIGHT */}
//             <p className="max-w-[380px] text-[#D8D6BF] text-[22px] sm:text-[28px] lg:text-[32px] leading-normal">
//               Your Legal Partners, Ensuring Justice and Peace of Mind
//             </p>

//           </div>

//           {/* DIVIDER */}
//           <div className="border-b border-[#FEFCE1]/25" />
//         </div>

//       </div>

//       {/* IMAGE MARQUEE */}
//       <div className="relative z-0 w-full overflow-hidden pointer-events-none select-none pb-17.5 md:pb-22.5 lg:pb-25">
//         <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 32, ease: "linear", repeat: Infinity,}} className="flex w-max gap-5 sm:gap-6 lg:gap-10.5 will-change-transform transform-gpu">
//           {marqueeImages.map((image, index) => (
//             <div key={index} className="shrink-0 overflow-hidden w-60 h-40 sm:w-80 sm:h-52.5 md:w-95 md:h-60 lg:w-105 lg:h-65 xl:w-130 xl:h-75">
//               <img src={image} alt="about" loading={index === 0 ? "eager" : "lazy"} className="w-full h-full object-cover" />
//               </div>
//             ))}
//           </motion.div>
//         </div>
    
//     </section>
//   );
// };

// export default AboutHero;







import { motion } from "framer-motion";

import heroBg from "../../../assets/images/about/about-hero-bg.webp";
import about1 from "../../../assets/images/about/about1.webp";
import about2 from "../../../assets/images/about/about2.webp";
import about3 from "../../../assets/images/about/about3.webp";

import Header from "../../../shared/layout/Header";


const aboutHeroImages = [
  {
    src: about1,
    alt: "Professional attorney consultation with clients",
  },
  {
    src: about2,
    alt: "Experienced legal team discussing case strategy",
  },
  {
    src: about3,
    alt: "Law firm attorneys providing legal representation",
  },
];

const AboutHero = () => {

  const marqueeImages = [...aboutHeroImages, ...aboutHeroImages];

  return (
    <section aria-labelledby="about-page-heading" className="relative w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img src={heroBg} alt="" fetchPriority="high" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover"/>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(304.61deg,rgba(14,16,15,0.95)_42.67%,rgba(14,16,15,0.95)_75%,rgba(14,16,15,0.0665)_103.96%)]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5">
        <div className="max-w-[1200px] mx-auto">
        <Header />

        <div className="py-17.5 md:py-22.5 lg:py-25 space-y-15 lg:space-y-25">
          {/* HERO CONTENT */}
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

            {/* LEFT */}
            <div>
              <p className="mb-4 lg:mb-7 text-[#D1B06B] text-2xl font-semibold">
                Law Firm
              </p>
              <h1 id="about-page-heading" className="text-[#FEFCE1] text-5xl sm:text-7xl lg:text-[90px] font-bold leading-[120%]">
                About Us
              </h1>
            </div>

            {/* RIGHT */}
            <p className="max-w-[310px] text-[#D8D6BF] text-[22px] sm:text-[28px] lg:text-[32px] leading-normal">
              Your Legal Partners, Ensuring Justice and Peace of Mind
            </p>

          </div>
          {/* DIVIDER */}
          <div className="border-b border-[#FEFCE1]/25" />
        </div>
        </div>

      </div>

      {/* IMAGE MARQUEE */}
      <div className="relative z-0 w-full overflow-hidden pointer-events-none select-none pb-17.5 md:pb-22.5 lg:pb-25">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 32, ease: "linear", repeat: Infinity,}} className="flex w-max gap-5 sm:gap-6 lg:gap-10.5 will-change-transform transform-gpu">
          {marqueeImages.map((item, index) => (
            <div key={index} className="shrink-0 overflow-hidden w-60 h-40 sm:w-80 sm:h-52.5 md:w-95 md:h-60 lg:w-105 lg:h-65 xl:w-130 xl:h-75">
              <img src={item.src} alt={item.alt} loading={index === 0 ? "eager" : "lazy"} decoding="async" className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
    
    </section>
  );
};

export default AboutHero;