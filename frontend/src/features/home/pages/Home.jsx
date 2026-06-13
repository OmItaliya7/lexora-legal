import ExperienceStatsSection from "../../../shared/components/ExperienceStatsSection";
import AttorneyExperience from "../components/AttorneyExperienced";
import HomeHero from "../components/HomeHero";
import OurAttorneys from "../components/OurAttorneys";
import PracticeSection from "../components/PracticeSection";
import PricingSection from "../components/PricingSection";
import Testimonials from "../../../shared/components/Testimonials";
import TrustedCompaniesSection from "../components/TrustedCompaniesSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../../../shared/components/CTASection";
import SEO from "../../../shared/components/SEO";

const Home = () => {
  return (
    <>
      <SEO 
        title="Dotch Law Firm | Trusted Legal Services & Attorneys"
        description="Trusted attorneys providing business law, family law, criminal defense, legal consultation, and corporate legal services. Helping individuals and businesses achieve successful legal outcomes."
        keywords="law firm, attorney, lawyer, legal services, business law, family law, criminal defense, legal consultation"
        path="/"
      />
      <main>
        <HomeHero />
        <ExperienceStatsSection />
        <AttorneyExperience />
        <PracticeSection />
        <OurAttorneys staggerMiddleCard={true} arrowRightClass="right-[74px]"/>
        <PricingSection />
        <Testimonials />
        <TrustedCompaniesSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
};

export default Home;