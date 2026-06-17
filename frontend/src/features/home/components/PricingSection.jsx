import arrowRight from "../../../assets/decorations/arrow-right.webp";
import PricingItem from "./PricingItem";
import { pricingData } from "../data/pricingData";

const PricingSection = () => {
  return (
    <section aria-labelledby="pricing-heading" className="max-w-[1440px] mx-auto px-5 ">
      <div className="max-w-[1200px] mx-auto py-17.5 md:py-22.5 lg:py-25">
        {/* TOP AREA */}
        <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-18 lg:pl-53">
          {/* ARROW */}
          <img src={arrowRight} alt="" aria-hidden="true" loading="lazy" className="hidden sm:block w-40 md:w-56 lg:w-72 shrink-0 pointer-events-none select-none" />

          {/* TITLE */}
          <h2 id="pricing-heading" className="mb-12 lg:mb-15 text-[#FEFCE1] text-[32px] sm:text-[36px] lg:text-[40px] font-bold leading-[120%]">
            Get the Right <br />
            Price With Us
          </h2>
        </div>

        {/* PRICING TABLE */}

        {/* BUTTONS */}
        <div className="mb-12 lg:mb-15 flex justify-center sm:justify-end gap-4 lg:gap-10">

          <span className="px-5 sm:px-6 lg:px-10 py-3 lg:py-4 rounded-full bg-[#FC8608] font-semibold text-sm lg:text-base text-[#0E100F]">
            Premium member
          </span>

          <span className="px-5 sm:px-6 lg:px-10 py-3 lg:py-4 border border-[#FC8608] rounded-full bg-transparent font-semibold text-sm lg:text-base text-[#FC8608]">
            Non-member
          </span>

        </div>

        {/* ROWS */}
        <div className="space-y-10">
          {pricingData.map((group, index) => (
            <div key={index} className={`${index === pricingData.length - 1 ? "" : "border-b border-[#FEFCE1]"}`}>
              {group.map((item, i) => (
                <PricingItem key={i} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;