import AttorneyCard from "../../../shared/components/AttorneyCard";
import defaultArrow from "../../../assets/decorations/arrow-right.webp";
import ArrowIcon from "../../../shared/icons/ArrowIcon";
import { Link } from "react-router-dom";
import { attorneysData } from "../../ourteam/data/attorneysData";

const featuredAttorneys = attorneysData.slice(0, 3);

const OurAttorneys = ({title = "Our Attorneys",arrowImage = defaultArrow,showButton = true,staggerMiddleCard = false,arrowRightClass = "right-0",}) => {
  return (
    <section aria-labelledby="attorneys-heading" className="relative border-b border-light/20">
      {/* GOLDEN ARROW */}
      <img src={arrowImage} alt="" aria-hidden="true" loading="lazy" className={`hidden sm:block absolute ${arrowRightClass} top-4 lg:top-5 w-40 lg:w-55 xl:w-auto pointer-events-none`}/>

      <div className="container-main">
        <div className="container-content py-17.5 md:py-22.5 lg:py-25">

          {/* TITLE */}
          <h2 id="attorneys-heading" className={`mb-12 ${staggerMiddleCard ? "lg:mb-15" : "lg:mb-[70px]"} text-center font-bold text-3xl md:text-[40px] leading-[120%] text-light`}>
            {title}
          </h2>

          {/* GRID */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${staggerMiddleCard ? "pt-8.25 gap-6 lg:gap-7.5" : "gap-8 lg:gap-11"}`}>
            {featuredAttorneys.map((item, i) => (
              <div key={i} className={staggerMiddleCard && i === 1 ? "lg:-translate-y-8" : ""}>
                <AttorneyCard {...item}/>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          {showButton && (
            <div className="mt-12 flex justify-center"> 
              <Link to="/ourteam" className="inline-flex items-center gap-4 px-10 py-4 rounded-full bg-secondary hover:opacity-90 font-semibold text-sm md:text-base text-primary transition-opacity">
                See All Attorneys <ArrowIcon className="text-primary" />
              </Link>
            </div>
          )}
      </div>
    </div>
  </section>
  );
};

export default OurAttorneys;