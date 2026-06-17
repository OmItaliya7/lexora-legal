import attorneyImage from "../../../assets/images/home/experienced-attorney.webp";
import curveArrow from "../../../assets/decorations/curve-arrow-left.webp";
import { Link } from 'react-router-dom';
import ArrowIcon from "../../../shared/icons/ArrowIcon";

const AttorneyExperienced = () => {
  return (
    <section aria-labelledby="attorney-experience-heading" className="relative overflow-hidden border-t border-[#FEFCE1]/25">
      {/* Golden curve arrow  */}
      <img src={curveArrow} alt="" loading="lazy" aria-hidden="true" className="hidden sm:block absolute left-0 2xl:left-1/2 2xl:translate-x-[-165%] top-20 2xl:top-16 w-85 md:w-115 lg:w-130 2xl:w-[600px] pointer-events-none select-none z-0" />
            
      <div className="relative z-10 max-w-[1440px] mx-auto px-5">
        <div className="max-w-[1200px] mx-auto py-17.5 md:py-22.5 lg:py-25">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-15">
            {/* Left Side: Image */}
            <div className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[520px] xl:max-w-[536px] aspect-[536/730] shrink-0">
              <img src={attorneyImage} alt="Experienced law firm attorney providing professional legal consultation Services" loading="lazy" decoding="async" className="w-full h-full object-cover"/>
            </div>

            {/* Right Side: Content */}
            <div className="flex flex-col w-full max-w-[585px]">
              {/* Heading */}
              <h2 id="attorney-experience-heading" className="mb-8 lg:mb-10 font-bold text-[26px] sm:text-[30px] lg:text-[34px] xl:text-[40px] leading-[120%] text-[#FEFCE1]">
                Experienced Attorneys<br/>Professional Approach.
              </h2>

              {/* Paragraph Area with Brackets */}
              <div className="relative mb-10 lg:mb-16">
                <span aria-hidden="true" className="absolute left-0 -top-3 sm:-top-5 text-[#FEFCE1] text-[42px] md:text-[48px] font-extralight leading-none">
                  {"{ "}
                </span>
                <div className="space-y-4 pl-4 sm:pl-5 lg:pl-6">
                  <p className="font-medium text-sm lg:text-base text-[#D8D6BF]/70">
                    We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
                  </p>
                  <p className="font-medium text-sm lg:text-base leading-[150%] text-[#D8D6BF]/70">
                    That they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
                  <span aria-hidden="true" className="align-bottom font-extralight text-[40px] md:text-[48px] text-[#FEFCE1] pl-1">
                    {'}'}
                  </span>
                </p>
              </div>

            </div>
          
            {/* Button */}
            <Link to="/contact" aria-label="Contact our experienced attorneys for legal consultation" className="inline-flex items-center w-fit px-10 py-4 gap-4 rounded-full bg-[#FC8608] transition-opacity duration-300 hover:opacity-90 font-semibold text-sm md:text-base text-[#0E100F]">
              Contact Us <ArrowIcon className="text-[#0E100F]" />
            </Link>

            </div>
          </div>
        </div>
      </div>

    </section>
      
    );
  };

  export default AttorneyExperienced;