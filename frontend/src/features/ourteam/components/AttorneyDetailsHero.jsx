import Header from "@/shared/layout/Header";
import bgImage from "@/assets/images/our-team/team-hero-bg.webp";
import ArrowIcon from "@/shared/icons/ArrowIcon";
import facebookIcon from "@/assets/icons/social/facebook.svg";
import instagramIcon from "@/assets/icons/social/instagram.svg";
import twitterIcon from "@/assets/icons/social/twitter.svg";
import linkedinIcon from "@/assets/icons/social/linkedin.svg";

const socialIcons = [
  {
    icon: facebookIcon,
    alt: "facebook",
    link: "#",
  },
  {
    icon: instagramIcon,
    alt: "instagram",
    link: "#",
  },
  {
    icon: twitterIcon,
    alt: "twitter",
    link: "#",
  },
  {
    icon: linkedinIcon,
    alt: "linkedin",
    link: "#",
  },
];

const AttorneyDetailsHero = ({ attorney }) => {
  const firstName = attorney.name.split(" ")[0];

  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND */}
      <img src={bgImage} alt="background" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center"/>
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(184.4deg,rgba(14,16,15,0.84)_10.02%,#0E100F_66.68%)]" />

      {/* CONTENT */}
      <div className="relative z-10 container-main">
        <div className="container-content">
          {/* HEADER */}
          <Header />

          {/* MAIN SECTION */}
          <div className="flex flex-col-reverse lg:flex-row items-center py-12 lg:py-16 gap-10 lg:gap-16 xl:gap-24.75 border-b border-light/20">

            {/* LEFT */}
            <div className="space-y-8 lg:space-y-10.5 px-5 sm:px-7 xl:px-12.5 py-5 xl:py-7 bg-primary border border-light">
              
              <div className="space-y-4">

                {/* NAME */}
                <h1 className="font-bold text-4xl sm:text-5xl lg:text-[56px] leading-[120%] text-light">
                  {attorney.name}
                </h1>

                {/* ROLE */}
                <p className="text-base lg:text-lg text-gray">
                  {attorney.role}
                </p>

                {/* EXPERTISE */}
                <div className="flex flex-wrap gap-3 py-5 border-y border-light/25">
                  {attorney.expertise.map((item, i) => (
                    <span key={i} className="border border-gray px-4 py-2 sm:px-5 lg:px-10 lg:py-4 rounded-full text-gray font-medium text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* ABOUT */}
              <div className="space-y-5.5">
                <div className="space-y-4">

                  <h2 className="text-2xl sm:text-[28px] text-light">
                    About {firstName}
                  </h2>

                  <p className="max-w-[630px] text-base sm:text-lg text-gray/60">
                    {attorney.about}
                  </p>

                </div>

                {/* SOCIAL ICONS */}
                <div className="flex gap-4 sm:gap-5">

                  {socialIcons.map((item, i) => (
                    <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70">
                      <img
                        src={item.icon}
                        alt={item.alt}
                        className="object-contain"
                      />
                    </a>
                  ))}

                </div>

                {/* BUTTON */}
                <button className="inline-flex items-center py-4 gap-4 font-semibold text-base text-secondary">
                  Hire Now <ArrowIcon className="text-secondary" />
                </button>
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full max-w-[380px] bg-light border border-light">
              <img src={attorney.image} alt={attorney.name} fetchPriority="high" className="w-full object-cover"/>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AttorneyDetailsHero;