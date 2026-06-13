import TeamHero from "../components/TeamHero";
import OurAttorneyTeam from "../components/OurAttorneyTeam";
import Testimonials from "../../../shared/components/Testimonials";
import CTASection from "../../../shared/components/CTASection";
import SEO from "../../../shared/components/SEO";

const OurTeam = () =>{
    return(
        <>
            <SEO
                title="Our Attorneys | Experienced Legal Team"
                description="Meet our experienced attorneys specializing in business law, family law, civil litigation, financial law, and legal consultation services."
                keywords="attorneys, legal team, lawyers, business attorney, family lawyer, civil litigation attorney, legal consultation"
                path="/ourteam"
            />
            <main>
                <TeamHero />
                <OurAttorneyTeam />
                <Testimonials />
                <CTASection />
            </main>
        </>
    )
}

export default OurTeam;