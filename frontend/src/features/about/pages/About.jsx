import AboutHero from "@/features/about/components/AboutHero";
import TrustedCompaniesSection from "@/features/home/components/TrustedCompaniesSection";
import AboutStorySection from "@/features/about/components/AboutStorySection";
import OurAttorneys  from "@/features/home/components/OurAttorneys";
import relatedArrow from "@/assets/decorations/our-team-arrow.webp";
import OthersPracticeAreas from "@/shared/components/OthersPracticeAreas";
import CTASection from "@/shared/components/CTASection";
import ExperienceStatsSection from "@/shared/components/ExperienceStatsSection";
import SEO from "@/shared/components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="About Us | Professional Legal Services & Experienced Attorneys"
        description="Learn about our experienced legal team, our mission, values, and commitment to providing trusted legal services across business law, family law, civil litigation, and more."
        keywords="about law firm, experienced attorneys, legal team, business law, family law, civil litigation, legal services"
        path="/about-us"
      />
      <main>
        <AboutHero />
        <TrustedCompaniesSection />
        <ExperienceStatsSection />
        <AboutStorySection />
        <OurAttorneys title="Related Attorneys" staggerMiddleCard={false} showButton={false} arrowImage={relatedArrow}  />
        <OthersPracticeAreas />
        <CTASection />
      </main>
    </>
  );
};

export default About;