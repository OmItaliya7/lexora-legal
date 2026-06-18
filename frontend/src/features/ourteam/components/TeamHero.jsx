import bgImage from "../../../assets/images/our-team/team-hero-bg.webp";
import teamLawyer from "../../../assets/images/our-team/team-hero-lawyer.webp";
import Header from "../../../shared/layout/Header";

const TeamHero = () => {
  return (
    <section aria-labelledby="our-team-heading" className="relative overflow-hidden">

      {/* BACKGROUND */}
      <img src={bgImage} alt="" className="absolute right-0 w-full h-full lg:w-[calc(100%-400px)] xl:w-[calc(100%-650px)] object-cover object-center lg:object-left"/>
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(184.4deg,rgba(14,16,15,0.84)_10.02%,#0E100F_66.68%)]" />

      <div className="relative z-50 container-main">
        <div className="container-content">
          <Header />
          
          {/* HERO CONTENT */}
          <div className="flex flex-col lg:flex-row items-center py-17.5 md:py-22.5 lg:py-25 gap-10 lg:gap-20 xl:gap-30 border-b border-light/25">

            {/* LEFT CONTENT */}
            <div className="lg:py-[51px] text-center lg:text-left">

              {/* TITLE */}
              <h1 id="our-team-heading" className="mb-6 lg:mb-9 text-light text-[48px] sm:text-[60px] md:text-[72px] xl:text-[90px] leading-[120%] font-bold">
                Meet Our <br /> Team
              </h1>

              {/* DESCRIPTION */}
              <p className="font-medium text-sm sm:text-base lg:text-lg text-gray/60 lg:max-w-[565px]">
                Meet our experienced attorneys specializing in business law, family law, civil litigation, financial law, and legal consultation services. Our team is committed to delivering trusted legal guidance and successful outcomes for every client.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <img src={teamLawyer} alt="Experienced law firm attorney providing legal consultation" loading="eager" decoding="async" fetchPriority="high" className="w-full max-w-[405px] object-cover border border-light"/>
            
          </div>
        </div>
      </div> 
    </section>
  );
};
export default TeamHero;