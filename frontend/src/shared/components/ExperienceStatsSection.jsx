const stats = [
  {
    number: "1998",
    line1: "YEAR OF",
    line2: "ESTABLISHMENT",
  },
  {
    number: "547",
    line1: "CASES",
    line2: "WON",
  },
  {
    number: "45+",
    line1: "BUSINESS",
    line2: "PARTNERS",
  },
  {
    number: "72+",
    line1: "TRUSTED",
    line2: "CLIENTS",
  },
];

const ExperienceStatsSection = () => {
  return (  
    <section className="max-w-[1440px] mx-auto px-5">
      <div className="max-w-[1040px] mx-auto py-17.5 md:py-22.5 lg:py-25">
        <div className="space-y-16 md:space-y-20 lg:space-y-22.5">

          {/* TOP CONTENT */}
          <div className="text-center space-y-6 lg:space-y-8">
            <h2 className="font-bold text-[32px] sm:text-[40px] leading-[120%] text-[#FEFCE1]">
              20 Year Of Experience In Various Cases
            </h2>
            <p className="font-medium text-sm sm:text-base lg:text-lg text-[#D8D6BF]/60">
              We’re proud that our law firm offers top-notch legal service for a nationwide affordable price! With us you’ll never feel like the lawyers are just robbers in suits, besides, we win 98% of all cases. 
            </p>
          </div>

          {/* STATS */}
          <ul className="flex flex-wrap justify-center gap-y-12 gap-x-10 sm:gap-x-16 md:gap-x-20 lg:gap-x-32">
            {stats.map((item) => (
              <li key={item.number} className="text-center">

                {/* NUMBER */}
                <h3 aria-label={`${item.number} ${item.line1} ${item.line2}`} className="mb-4 lg:mb-6 font-bold text-3xl sm:text-4xl lg:text-[40px] leading-[120%] text-[#FEFCE1]">
                  {item.number}
                </h3>

                {/* TEXT */}
                <p className="mb-4 lg:mb-6 text-sm sm:text-base text-[#D8D6BF]">
                  {item.line1}
                </p>

                <p className="text-sm sm:text-base text-[#D8D6BF]">
                    {item.line2}
                </p>
                
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default ExperienceStatsSection;