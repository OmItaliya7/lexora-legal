import { useParams, Navigate } from "react-router-dom";
import { attorneysData } from "../data/attorneysData";
import AttorneyDetailsHero from "../components/AttorneyDetailsHero";
import OurAttorneys  from "../../home/components/OurAttorneys";
import Testimonials from "../../../shared/components/Testimonials";
import CTASection from "../../../shared/components/CTASection";
import relatedArrow from "../../../assets/decorations/our-team-arrow.webp";
import SEO from "../../../shared/components/SEO";

const AttorneyDetails = () => {
  const { slug } = useParams();

  const attorney = attorneysData.find(
    (item) => item.slug === slug
  );

  if (!attorney) {
  return <Navigate to="/ourteam" replace />;
}

  return (
    <>
      <SEO
        title={`${attorney.name} | ${attorney.role}`}
        description={`Meet ${attorney.name}, an experienced ${attorney.role} at Lexora Legal providing trusted legal consultation and representation.`}
        keywords={`${attorney.name}, ${attorney.role}, attorney, lawyer, legal consultation`}
        path={`/ourteam/${attorney.slug}`}
      />
      <main>
        <AttorneyDetailsHero attorney={attorney} />
        <OurAttorneys title="Related Attorneys" showButton={false} arrowImage={relatedArrow}  />
        <Testimonials />
        <CTASection />
      </main>
    </>
  );
};

export default AttorneyDetails;