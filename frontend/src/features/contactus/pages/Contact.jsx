// import Header from "../../../shared/layout/Header";
// import bgImage from "../../../assets/images/login1-bg.png";

// import ContactUper from "../components/ContactUper .jsx";
// import Consultation from "../components/Consultation .jsx";

// const Contact = () => {
//   return (
//     <>
//     <section className="relative w-full overflow-hidden">
//       {/*  Background */}
//       <img src={bgImage} alt="bg" className="absolute w-full h-full object-cover"/>
//       {/*  Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,16,15,0.81),rgba(14,16,15,1))]" />
//       {/*  Content */}
//       <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-[120px] 2xl:px-0">
//         <Header />
//         <ContactUper />   
//       </div>
//     </section>
    
//       <Consultation />

//     </>
//   ); 
// };

// export default Contact; 




import SEO from "../../../shared/components/SEO";
import ContactHero from "../components/ContactHero.jsx";
import Consultation from "../components/Consultation.jsx";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us | Dotch Law Firm"
        description="Contact our experienced attorneys for legal consultation, case evaluation, business law, family law, civil litigation, and other legal services."
        keywords="contact law firm, legal consultation, attorney contact, lawyer consultation, business law attorney, family law attorney"
        path="/contact"
      />
      <main>
        <ContactHero />
        <Consultation />
      </main>
    </>
  );
};

export default Contact;