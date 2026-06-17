import { Link } from "react-router-dom";
import aboutImage from "../../../assets/images/practice/practice-about.webp";
import arrowTick from "../../../assets/ui/right-tick.svg";
import ArrowIcon from "../../../shared/icons/ArrowIcon";
import { stats } from "../data/serviceData"

const PracticeAreaOverview = ({practice, attorney}) => {

  return (
    <section aria-labelledby="practice-title" className="max-w-[1440px] mx-auto px-5">
      <div className="max-w-[1200px] mx-auto py-17.5 md:py-20 lg:py-22.5 border-b border-[#FEFCE1]/25">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 xl:gap-25 ">
          {/* LEFT */}
          <div className="flex-1 space-y-10 lg:space-y-13.5 max-w-[730px]">

            {/* ABOUT */}
            <div className="space-y-4 lg:space-y-6">

              <h2 id="practice-title" className="font-bold text-2xl sm:text-3xl lg:text-[40px] leading-[120%] text-[#FEFCE1]">
                About This Practice Area
              </h2>

              <p className=" text-sm sm:text-base text-[#FEFCE1]/60">
                {practice.mainDescription}
              </p>

              <p className="text-sm sm:text-base text-[#FEFCE1]/60">
                {practice.mission}
              </p>

            </div>

            <div className="space-y-4 lg:space-y-6">

              <h3 className="font-bold text-2xl sm:text-3xl lg:text-[40px] leading-[120%] text-[#FEFCE1]">
                {practice.overviewTitle}
              </h3>

              <p className=" text-sm sm:text-base text-[#FEFCE1]/60">
                {practice.overview}
              </p>

              <img src={aboutImage} alt={`${practice.title} legal services overview`} loading="lazy" decoding="async" className="w-full max-w-[585px] aspect-[585/292] object-cover pt-2"/>
            </div>

          </div>

          {/* RIGHT */}
          <div className="w-full max-w-[370px] px-6 sm:px-7.5 lg:px-8.5 py-5 lg:py-6.5 border border-[#FEFCE1]">

            <div className="flex items-center gap-4 pb-5">
              <div className="flex items-center justify-center size-12.5 sm:size-14 lg:size-15.5 border border-[#FEFCE1] rounded-full overflow-hidden shrink-0">
                <img src={attorney.image} alt={`${attorney.name} - ${attorney.role}`} loading="lazy" decoding="async" className="w-full h-full object-contain "/>
              </div>

              <div className="space-y-1.25">
                <h4 className="font-medium text-base sm:text-lg text-[#FEFCE1]">
                  {attorney.name}
                </h4>
                <p className="text-xs text-[#D8D6BF]">
                  {practice.title}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2.5 py-6 border-y border-[#FEFCE1]/25">
              {stats.map((item) => (
                <div key={item.label} className="space-y-3">
                  <h2 className="font-semibold text-[22px] sm:text-[26px] lg:text-[32px] text-[#FEFCE1]">
                    {item.number}
                  </h2>
                  <p className="text-xs sm:text-sm lg:text-lg text-[#FEFCE1]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            
            <ul className="py-5 space-y-3 sm:space-y-4">
              {practice.services.map((item, i) => (
                <li key={i} className="flex items-center gap-1 text-sm text-[#FEFCE1] font-medium">
                  <img src={arrowTick} alt="" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <Link aria-label={`Hire ${attorney.name} for ${practice.title}`} to={`/ourteam/${attorney.slug}`} className="inline-flex py-4 items-center gap-4 font-semibold text-sm sm:text-base text-[#FC8608]">
              Hire Now <ArrowIcon className="text-[#FC8608]" />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default PracticeAreaOverview;