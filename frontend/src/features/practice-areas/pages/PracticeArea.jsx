import PracticeHero from "../components/PracticeHero";
import PracticeAreaOverview from "../components/PracticeAreaOverview";
import OthersPracticeAreas from "../../../shared/components/OthersPracticeAreas";
import Testimonials from "../../../shared/components/Testimonials";
import CTASection from "../../../shared/components/CTASection";
import SEO from "../../../shared/components/SEO";

import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { practiceAreasData } from "../data/practiceAreasData";
import { attorneysData } from "../../ourteam/data/attorneysData";

const PracticeArea = () =>{
    const { slug } = useParams();
    const practice = practiceAreasData.find((item) => item.slug === slug);
    
    if (!practice) {
        return <Navigate to="/practicearea" replace />;
    }
    const attorney = attorneysData.find((item) => item.slug === practice.attorneySlug);
    return(
        <>
            <SEO
                title={`${practice.title} Services | Dotch Law Firm`}
                description={practice.mainDescription}
                keywords={`${practice.title}, legal services, attorney, law firm, legal consultation`}
                path={`/practicearea/${practice.slug}`}
            />
            <main>
                <PracticeHero practice={practice}/>
                <PracticeAreaOverview practice={practice} attorney={attorney}/>
                <OthersPracticeAreas />
                <Testimonials />
                <CTASection />
            </main>
        </>
    )
}

export default PracticeArea