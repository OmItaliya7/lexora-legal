import SEO from "@/shared/components/SEO";
import ContactHero from "@/features/contact/components/ContactHero.jsx";
import Consultation from "@/features/contact/components/Consultation.jsx";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us | Lexora Legal"
        description="Contact our experienced attorneys for legal consultation, case evaluation, business law, family law, civil litigation, and other legal services."
        keywords="contact lawyer, legal consultation, business lawyer, family lawyer, law firm contact, Lexora Legal"
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