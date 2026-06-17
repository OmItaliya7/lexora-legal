import { motion } from "framer-motion";
import arrowRight from "../../../assets/decorations/our-team-arrow.webp";
import { trustedCompanies } from "../data/trustedCompaniesData";

const CompanyPill = ({ logo,name }) => {
  return (
    <figure className="shrink-0 whitespace-nowrap bg-[#FEFCE1]/15 rounded-full px-8 py-4 lg:px-14 lg:py-6 flex items-center justify-center">
      <img src={logo} alt={`${name} logo`} loading="lazy" className="h-2.5 sm:h-3 lg:h-4 w-auto object-contain" />
    </figure>
  );
};

const baseCompanies = [...trustedCompanies, ...trustedCompanies];

const TrustedCompaniesSection = () => {
  const rows = [1,2];
  return (
    <section aria-labelledby="trusted-companies-heading" className="relative overflow-hidden">

      {/* ARROW */}
      <img src={arrowRight} alt="" loading="lazy" aria-hidden="true" className="absolute right-0 hidden sm:block w-30 md:w-40 xl:w-auto pointer-events-none select-none" />

      <div className="py-17.5 md:py-22.5 lg:py-25">

        {/* TOP CONTENT */}
        <div className="mb-8 md:mb-12 lg:mb-15 space-y-4.5 text-center">

          <h2 id="trusted-companies-heading" className="font-bold text-[30px] sm:text-[36px] lg:text-[40px] leading-[120%] text-[#FEFCE1]">
            Trusted Companies
          </h2>

          <p className="max-w-[330px] xl:max-w-[360px] mx-auto font-medium text-sm text-[#D8D6BF]">
            <span className="pr-2 font-extralight text-[24px] leading-none">{`{`}</span>
            We’re proud that our law firm offers top-notch legal service for a nationwide affordable price.
            <span className="pl-1 font-extralight text-[24px] align-bottom leading-none">{`}`}</span>
          </p>

        </div>

        {/* MARQUEE AREA */}
        <div className="space-y-8 overflow-hidden">

          {/* TOP ROW (Moves Left) */}
          <div className="flex overflow-hidden">

            {rows.map((_, i) => (
              <motion.div key={i} animate={{ x: ["0%", "-50%"] }} transition={{ duration: 35, ease: "linear", repeat: Infinity, }} className="flex gap-6 lg:gap-14 pr-6 lg:pr-14 shrink-0 will-change-transform transform-gpu">
                {baseCompanies.map((item, idx) => (
                  <CompanyPill key={`${i}-${idx}`} logo={item.logo} name={item.name} />
                ))}
              </motion.div>
            ))}

          </div>

          {/* BOTTOM ROW (Moves Right) */}
          <div className="flex overflow-hidden">

            {rows.map((_, i) => (
              <motion.div key={i} animate={{ x: ["-50%", "0%"] }} transition={{ duration: 35, ease: "linear", repeat: Infinity, }} className="flex gap-6 lg:gap-14 pr-6 lg:pr-14 shrink-0 will-change-transform transform-gpu">
                {baseCompanies.map((item, idx) => (
                  <CompanyPill key={`${i}-${idx}`} logo={item.logo} name={item.name} />
                ))}
              </motion.div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;