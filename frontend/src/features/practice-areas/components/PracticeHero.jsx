import Header from "../../../shared/layout/Header";
import bgImage from "../../../assets/images/practice/practice-bg.webp"; 

const PracticeHero = ({practice}) => {
  const Icon = practice.icon;
  return (
    <section aria-labelledby="practice-title" className="relative overflow-hidden">
      {/*  BACKGROUND */}
      <img src={bgImage} alt="" aria-hidden="true" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover bg-center"/>
      {/*  OVERLAY  */}
      <div className="absolute inset-0 bg-[linear-gradient(36.41deg,rgba(14,16,15,0.9215)_59.85%,rgba(14,16,15,0.627)_108.64%)]" />

      {/*  CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5">
        <div className="max-w-[1200px] mx-auto">
          <Header />

          {/* MAIN CONTENT */}
          <div className="py-17.5 md:py-20 lg:py-22.5 xl:pt-21.5 xl:pb-30 border-b border-[#FEFCE1]/25">
            <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20 xl:gap-27.5">
              {/* LEFT */}
              <div className="space-y-3 sm:space-y-4">
                <Icon aria-hidden="true" className="size-7 lg:size-8 text-[#D1B06B]" />
                <p className="font-semibold text-sm sm:text-base lg:text-2xl text-[#D1B06B]">
                  Legal Practice Area
                </p>
                <h1 id="practice-title" className="font-bold text-4xl sm:text-[56px] lg:text-[68px] xl:text-[76px] leading-[120%] text-[#FEFCE1] whitespace-nowrap">
                  {practice.heroTitle}
                </h1>
              </div>
              {/* RIGHT */}
              <p className="max-w-[600px] text-sm sm:text-base lg:text-lg text-[#FEFCE1]/60">
                {practice.heroDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PracticeHero;