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