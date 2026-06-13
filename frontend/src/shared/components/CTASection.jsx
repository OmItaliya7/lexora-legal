// import userIcon from "../../assets/icons/form/cta-user.svg";
// import emailIcon from "../../assets/icons/form/email.svg";
// import phoneIcon from "../../assets/icons/form/Phone.svg";
// import messageIcon from "../../assets/icons/form/cta-message.svg";
// import arrow from "../../assets/decorations/arrow-CTA.png";
// import ArrowIcon from "../../shared/icons/ArrowIcon";
// import { useState } from "react";
// import { submitContactForm } from "../../api/contactApi";
// import toast from "react-hot-toast";

// const FormField = ({icon, type="text", placeholder, textarea = false, alt, name, value, onChange, autoComplete}) =>{
//   return(
//     <div className="flex py-3 sm:py-4 border-b border-[#FEFCE1]/25">
//       {textarea ? (
//         <textarea name={name} value={value} onChange={onChange} rows={3} placeholder={placeholder} className="w-full resize-y bg-transparent text-sm lg:text-base text-[#FEFCE1] placeholder:text-[#D8D6BF] outline-none" />
//       ) : (
//         <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className="w-full bg-transparent text-sm lg:text-base text-[#FEFCE1] placeholder:text-[#D8D6BF] outline-none" />
//       )}

//       <img src={icon} alt={alt} className="size-5 lg:size-6 shrink-0" />
//     </div>
//   )
// }

// const CTASection = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) =>{
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   const handleSubmit = async (e) =>{
//     e.preventDefault();

//     const name = formData.name.trim();
//     const email = formData.email.trim();
//     const phone = formData.phone.trim();
//     const message = formData.message.trim();

//     try{
//       if (!name || !email || !phone || !message){
//         toast.error("Please fill all required fields");
//         return;
//       }
//       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//       if (!emailRegex.test(email)) {
//         toast.error("Please enter a valid email address");
//         return;
//       }
//       const phoneRegex = /^[0-9]{10,15}$/;
//       if (!phoneRegex.test(phone)) {
//         toast.error("Please enter a valid phone number");
//         return;
//       }
//       setLoading(true);
//       const payload = {name, email, phone, message}
//       await submitContactForm(payload);

//       toast.success("Form submitted successfully");
//       setFormData({ name: "", email: "", phone: "", message: "" });

//     }catch (error) {
//       toast.error(error.response?.data?.message || "Failed to send message")
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <section className="relative">
//       {/* ARROW  */}
//       <img src={arrow} alt="decor" loading='lazy' aria-hidden='true' className="pointer-events-none hidden sm:block absolute left-0 bottom-[-18px] 2xl:bottom-[-25px] w-40 lg:w-50 xl:w-auto 2xl:w-75" />

//       <div className="max-w-[1440px] mx-auto py-17.5 md:py-22.5 lg:py-25 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30 2xl:px-0">
        
//         {/* TITLE */}
//         <h2 className="mb-8 sm:mb-12 lg:mb-18 text-center font-bold text-[30px] sm:text-[36px] lg:text-[40px] leading-[120%] text-[#FEFCE1]">
//           Request a Free <br /> Legal Consultation
//         </h2>

//         {/* FORM */}
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[30px]">
//             <FormField type="text" name="name" value={formData.name} onChange={handleChange} icon={userIcon} placeholder="Your Name*" alt="user" autoComplete="name" />
//             <FormField type="email" name="email" value={formData.email} onChange={handleChange} icon={emailIcon} placeholder="Your Email*" alt="email" autoComplete="email" />
//             <FormField type="text" name="phone" value={formData.phone} onChange={handleChange} icon={phoneIcon} placeholder="Your Phone*" alt="phone" autoComplete="tel" />
//           </div>
//           <div className="max-w-[480px] lg:max-w-[570px] mx-auto mt-8">
//             <FormField type="text" name="message" value={formData.message} onChange={handleChange} icon={messageIcon} placeholder="Your Message*" alt="message" textarea autoComplete="off" />
//           </div>
//           <button type="submit" disabled={loading} className="mx-auto mt-10 sm:mt-12 lg:mt-23 flex items-center gap-4 rounded-full bg-[#FC8608] px-10 py-4 font-semibold text-sm md:text-base text-[#0E100F] hover:opacity-90 transition-opacity">
//             {loading ? "Sending..." : "Send Message"} <ArrowIcon className="text-[#0E100F]" />
//           </button> 
//         </form>
        
//       </div>
//     </section>
//   );
// };

// export default CTASection;








import userIcon from "../../assets/icons/form/cta-user.svg";
import emailIcon from "../../assets/icons/form/email.svg";
import phoneIcon from "../../assets/icons/form/phone.svg";
import messageIcon from "../../assets/icons/form/cta-message.svg";
import arrow from "../../assets/decorations/arrow-CTA.webp";
import ArrowIcon from "../../shared/icons/ArrowIcon";
import { useState } from "react";
import { submitContactForm } from "../../api/contactApi";
import toast from "react-hot-toast";
import React from "react";

const FormField = React.memo(({icon, type="text", label, placeholder, textarea = false, name, value, onChange, autoComplete}) =>{
  return(
    <div className="flex py-3 sm:py-4 border-b border-[#FEFCE1]/25">
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      {textarea ? (
        <textarea required aria-required="true" id={name} name={name} value={value} onChange={onChange} rows={3} placeholder={placeholder} autoComplete={autoComplete} className="w-full resize-y bg-transparent text-sm lg:text-base text-[#FEFCE1] placeholder:text-[#D8D6BF] outline-none" />
      ) : (
        <input required aria-required="true" id={name} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} autoComplete={autoComplete} className="w-full bg-transparent text-sm lg:text-base text-[#FEFCE1] placeholder:text-[#D8D6BF] outline-none" />
      )}

      <img src={icon} alt="" aria-hidden="true" className="size-5 lg:size-6 shrink-0" /> 
    </div>
  )
})

const CTASection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>{
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    try{
      if (!name || !email || !phone || !message){
        toast.error("Please fill all required fields");
        return;
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address");
        return;
      }
      const phoneRegex = /^[0-9]{10,15}$/;
      if (!phoneRegex.test(phone)) {
        toast.error("Please enter a valid phone number");
        return;
      }
      setLoading(true);
      const payload = {name, email, phone, message}
      await submitContactForm(payload);

      toast.success("Form submitted successfully");
      setFormData({ name: "", email: "", phone: "", message: "" });

    }catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message")
    } finally {
      setLoading(false);
    }
  }

  return (
    <section aria-labelledby="consultation-heading" className="relative">
      {/* ARROW  */}
      <img src={arrow} alt="" loading='lazy' aria-hidden='true' className="pointer-events-none hidden sm:block absolute left-0 bottom-[-18px] 2xl:bottom-[-25px] w-40 lg:w-50 xl:w-auto 2xl:w-75" />

      <div className="max-w-[1440px] mx-auto px-5">
        <div className="max-w-[1200px] mx-auto py-17.5 md:py-22.5 lg:py-25">
        
        {/* TITLE */}
        <h2 id="consultation-heading" className="mb-8 sm:mb-12 lg:mb-18 text-center font-bold text-[30px] sm:text-[36px] lg:text-[40px] leading-[120%] text-[#FEFCE1]">
          Request a Free <br /> Legal Consultation
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} aria-label="Free legal consultation form">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[30px]">
            <FormField type="text" label="Full Name" name="name" value={formData.name} onChange={handleChange} icon={userIcon} placeholder="Your Name*" autoComplete="name" />
            <FormField type="email" label="Email Address" name="email" value={formData.email} onChange={handleChange} icon={emailIcon} placeholder="Your Email*" autoComplete="email" />
            <FormField type="text" label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} icon={phoneIcon} placeholder="Your Phone*" autoComplete="tel" />
          </div>
          <div className="max-w-[480px] lg:max-w-[570px] mx-auto mt-8 ">
            <FormField type="text" label="Message" name="message" value={formData.message} onChange={handleChange} icon={messageIcon} placeholder="Describe Your Legal Matter*" textarea autoComplete="off" />
          </div>
          <button type="submit" disabled={loading} className="mx-auto mt-10 sm:mt-12 lg:mt-23 flex items-center gap-4 rounded-full bg-[#FC8608] px-10 py-4 font-semibold text-sm md:text-base text-[#0E100F] hover:opacity-90 transition-opacity">
            {loading ? "Sending..." : "Send Message"} <ArrowIcon className="text-[#0E100F]" />
          </button> 
        </form>
        </div>
        
      </div>
    </section>
  );
};

export default CTASection;