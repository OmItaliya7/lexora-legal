import SEO from "@/shared/components/SEO";
import ContactHero from "@/features/contact/components/ContactHero.jsx";
import Consultation from "@/features/contact/components/Consultation.jsx";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us | Lexora Legal"
        description="Contact our experienced attorneys for legal consultation, case evaluation, business law, family law, civil litigation, and other legal services."
        keywords="Contact Lexora Legal for professional legal consultation, business law services, family law assistance, and case evaluations."
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