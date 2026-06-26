import ExperienceStatsSection from "@/shared/components/ExperienceStatsSection";
import AttorneyExperience from "@/features/home/components/AttorneyExperienced";
import HomeHero from "@/features/home/components/HomeHero";
import OurAttorneys from "@/features/home/components/OurAttorneys";
import PracticeSection from "@/features/home/components/PracticeSection";
import PricingSection from "@/features/home/components/PricingSection";
import Testimonials from "@/shared/components/Testimonials";
import TrustedCompaniesSection from "../components/TrustedCompaniesSection";
import FAQSection from "../components/FAQSection";
import CTASection from "@/shared/components/CTASection";
import SEO from "@/shared/components/SEO";

const Home = () => {
  return (
    <>
      <SEO 
        title="Lexora Legal | Trusted Legal Services & Attorneys"
        description="Trusted attorneys providing business law, family law, criminal defense, legal consultation, and corporate legal services. Helping individuals and businesses achieve successful legal outcomes."
        keywords="law firm, attorney, lawyer, legal services, business law, family law, civil litigation, legal consultation, legal representation"
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