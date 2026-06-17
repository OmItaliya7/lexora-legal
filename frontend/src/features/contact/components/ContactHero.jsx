import location from "../../../assets/icons/contact/location.svg";
import phone from "../../../assets/icons/contact/phone.svg";
import email from "../../../assets/icons/contact/email.svg";

import bgImage from "../../../assets/images/contact/contact-bg.webp";
import Header from "../../../shared/layout/Header";

const contactData = [
  {
    icon: location,
    title: "Location",
    text: "47 W 13th St, New York, NY 10011, USA",
  },
  {
    icon: phone,
    title: "Give us a call",
    text: "+117824641616",
  },
  {
    icon: email,
    title: "Write E-mail",
    text: "contact@dotch.com",
  },
];

const ContactHero = () => {
  return (
  <section aria-labelledby="contact-hero-title" className="relative overflow-hidden">

    {/* background  */}
    <img src={bgImage} alt="" aria-hidden="true" fetchPriority="high" className="absolute w-full h-full object-cover"/>
    
    {/* OVERLAY */}
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,16,15,0.81),#0E100F)]" />

    <div className="relative z-10 max-w-[1440px] mx-auto px-5">
      <div className="max-w-[1200px] mx-auto">
        <Header />

        <div className="border-b border-[#FEFCE1]/25 py-17.5 md:py-22.5 xl:pt-25.5 xl:pb-17.5">

          <div className="max-w-[850px] mb-8 sm:mb-10 lg:mb-12.75">
            <h1 id="contact-hero-title" className="mb-4.5 text-3xl sm:text-4xl md:text-5xl lg:text-[72px] xl:text-[90px] font-bold leading-[120%] text-[#FEFCE1]">
              We’re Here to Help
            </h1>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#D8D6BF]/60">
              With years of legal experience, our attorneys provide trusted legal consultation, business law services, family law guidance, civil litigation support, and professional legal representation.
            </p>
          </div>

          {/* CONTACT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-22">
            {contactData.map(({icon, title, text}) => (

              <article key={title} className="px-5 py-6 sm:px-6 sm:py-8 lg:px-6 lg:py-8.5 border border-[#FEFCE1]">

                <div className="flex items-center gap-2 mb-3">
                  <img src={icon} alt="" aria-hidden="true" loading="lazy" />
                  <h3 className="font-semibold text-sm sm:text-base lg:text-xl text-[#FEFCE1]">
                    {title}
                  </h3>
                </div>
                <p className="text-sm lg:text-base text-[#D8D6BF]">
                  {text}
                </p>

              </article>
            ))}

          </div>

        </div>
      </div>

    </div>
 
  </section>
  );
};

export default ContactHero;    