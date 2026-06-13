// import formImage from "../../../assets/images/contact-form.png";
// import userIcon from "../../../assets/icons/form/user.svg";
// import emailIcon from "../../../assets/icons/form/email.svg";
// import phoneIcon from "../../../assets/icons/form/Phone.svg";
// import serviceIcon from "../../../assets/icons/form/services.svg";
// import messageIcon from "../../../assets/icons/form/message.svg";

// import { submitContactForm } from "../../../api/contactApi";

// import { useState } from "react";
// import ArrowIcon from "../../../shared/icons/ArrowIcon";
// import toast from "react-hot-toast";

// const services = ["Corporate Law", "Family Law", "Business Law", "Real Estate Law", "Criminal Law", "Financial Law",];

// /* Reusable Input Row */
// const FormField = ({ icon, alt ,placeholder, type = "text", textarea, select, name, value, onChange}) => {

//   const baseClass = "w-full outline-none text-sm font-medium text-[#FEFCE1] placeholder-[#FEFCE1]"
 
//   return (
//     <div className={`flex border-b border-[#FEFCE1]/25 pb-2 ${textarea ? "items-start gap-4" : "items-center gap-2.25"}`}>
//       <img src={icon} alt={alt} className="size-5 shrink-0" />

//       { textarea ? (
//         <textarea
//           name={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           className={`${baseClass} resize-y`}
//           rows={5}
//         />
//       ) : select ? (
//         <select name = {name} value={value} onChange={onChange} className={`${baseClass}`}>
//           <option className="bg-[#0E100F]">{placeholder}</option>
//           {services.map((service, index) => (
//             <option key={index} value={service} className="bg-[#0E100F]">
//               {service}
//             </option>
//           ))}
//         </select>
//       ) : (
//         <input
//           type={type}
//           name={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           className={baseClass}
//         />
//       )}
//     </div>
//   );
// };

// const Consultation = () => {

//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: ""});
//   const [loading, setLoading] = useState(false);
//   const [agreed, setAgreed] = useState(false);

//   const handleChange = (e) =>{
//     setFormData({...formData,[e.target.name]: e.target.value})
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const name = formData.name.trim();
//     const email = formData.email.trim();
//     const phone = formData.phone.trim();
//     const message = formData.message.trim();
//     try {
//       if(!name || !email || !phone || !message){
//         toast.error("Please fill all the required fields");
//         return;
//       }

//       if(!agreed){
//         toast.error("Please accept the terms and conditions");
//         return;
//       }

//       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//       if (!emailRegex.test(formData.email)) {
//         toast.error("Please enter a valid email address");
//         return;
//       }

//       const phoneRegex = /^[0-9]{10,15}$/;
//       if (!phoneRegex.test(formData.phone)) {
//         toast.error("Please enter a valid phone number");
//         return;
//       }

//       await submitContactForm(formData);
//       toast.success("Form submitted successfully!");
//       setFormData({ name: "", email: "", phone: "", service: "", message: "", });
//       setAgreed(false);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30 2xl:px-0 py-17.5 md:py-22.5 lg:py-25 border-b border-[#FEFCE1]/25">
//         <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-21.25 items-center lg:items-start">

//         {/* LEFT IMAGE */}
//         <div className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[430px] shrink-0 mx-auto lg:mx-0">
//           <img
//             src={formImage}
//             alt="consultation"
//             className="w-full aspect-[430/585] object-cover"
//           />
//         </div>

//         {/* RIGHT FORM */}
//         <div className="w-full max-w-[680px]">

//           {/* HEADER */}
//           <div className="mb-14 lg:mb-24">
//             <h2 className="mb-4 font-bold text-2xl sm:text-3xl lg:text-[40px] leading-[120%] text-[#FEFCE1]">
//               Request a Free Consultation
//             </h2>

//             <p className="font-medium text-sm sm:text-base text-[#D8D6BF]">
//                Save money by bundling Solar power, Battery Storage, and Roofing and make your home into an energy saving machine!
//             </p>
//           </div>

//           {/* FORM */}
//           <form onSubmit={handleSubmit} className="w-full max-w-[560px] space-y-8 lg:space-y-9">

//             {/* GRID INPUTS */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-9">

//               <FormField icon={userIcon} alt="user" placeholder="First Name*" name = "name" value = {formData.name} onChange = {handleChange} />
//               <FormField icon={emailIcon} alt="email" placeholder="Email*" type="email" name = "email" value = {formData.email} onChange = {handleChange} />
//               <FormField icon={phoneIcon} alt="phone" placeholder="Phone Number*" name = "phone" value = {formData.phone} onChange = {handleChange} />
//               <FormField icon={serviceIcon} alt="service" placeholder="Services" select name = "service" value = {formData.service} onChange = {handleChange} />

//             </div>

//             {/* TEXTAREA */}
//             <FormField icon={messageIcon} alt="message" placeholder="Write your message here..." name = "message" value = {formData.message} onChange = {handleChange} textarea />

//             {/* BOTTOM */}
//             <div className="flex flex-col md:flex-row md:items-end gap-6 sm:gap-10 xl:gap-12.5">

//               {/* CHECKBOX */}
//               <label className="inline-flex items-start gap-2 max-w-[280px] font-medium text-sm text-[#D8D6BF]">
//                 <input onChange={(e) => setAgreed(e.target.checked)} type="checkbox" className="accent-[#FC8608] bg-[#FEFCE1] mt-[3px]" />
//                 <span>
//                   I here by agree to the Terms & Conditions of Dotch
//                 </span>
//               </label>

//               {/* BUTTON */}
//               <button disabled={loading} type="submit" className="bg-[#FC8608] px-10 py-4 rounded-full flex items-center justify-center gap-4 text-[#0E100F] font-semibold hover:opacity-90 transition whitespace-nowrap">
//                 {loading ? "Sending..." : "Send Message"}<ArrowIcon className="text-[#0E100F]" />
//               </button>

//             </div>

//           </form>
//         </div>
//         </div>
//       </div>
//   )
// };

// export default Consultation;







import formImage from "../../../assets/images/contact-form.webp";
import userIcon from "../../../assets/icons/form/user.svg";
import emailIcon from "../../../assets/icons/form/email.svg";
import phoneIcon from "../../../assets/icons/form/Phone.svg";
import serviceIcon from "../../../assets/icons/form/services.svg";
import messageIcon from "../../../assets/icons/form/message.svg";

import { submitContactForm } from "../../../api/contactApi";

import { useState } from "react";
import ArrowIcon from "../../../shared/icons/ArrowIcon";
import toast from "react-hot-toast";

const services = ["Corporate Law", "Family Law", "Business Law", "Real Estate Law", "Criminal Law", "Financial Law",];

/* Reusable Input Row */
const FormField = ({ icon, placeholder, type = "text", textarea, select, name, value, onChange, label, autoComplete}) => {

  const baseClass = "w-full outline-none text-sm font-medium text-[#FEFCE1] placeholder-[#FEFCE1]"
 
  return (
    <div className={`flex border-b border-[#FEFCE1]/25 pb-2 ${textarea ? "items-start gap-4" : "items-center gap-2.25"}`}>
      <img src={icon} alt="" className="size-5 shrink-0" />
      <label htmlFor={name} className="sr-only">{label}</label>

      { textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseClass} resize-y`}
          rows={5}
          autoComplete={autoComplete}
          required
          aria-required="true"
        />
      ) : select ? (
        <select id={name} name = {name} value={value} onChange={onChange} autoComplete={autoComplete} className={`${baseClass}`}>
          <option className="bg-[#0E100F]">{placeholder}</option>
          {services.map((service, index) => (
            <option key={index} value={service} className="bg-[#0E100F]">
              {service}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseClass}
          autoComplete={autoComplete}
          required
          aria-required="true"
        />
      )}
    </div>
  );
};

const Consultation = () => {

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: ""});
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();
    try {
      if(!name || !email || !phone || !message){
        toast.error("Please fill all the required fields");
        return;
      }

      if(!agreed){
        toast.error("Please accept the terms and conditions");
        return;
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        toast.error("Please enter a valid email address");
        return;
      }

      const phoneRegex = /^[0-9]{10,15}$/;
      if (!phoneRegex.test(formData.phone)) {
        toast.error("Please enter a valid phone number");
        return;
      }

      setLoading(true);

      await submitContactForm(formData);
      toast.success("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", service: "", message: "", });
      setAgreed(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section aria-labelledby="consultation-heading" className="max-w-[1440px] mx-auto px-5">
      <div className="max-w-[1200px] mx-auto py-17.5 md:py-22.5 lg:py-25 border-b border-[#FEFCE1]/25">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-21.25 items-center lg:items-start">

          {/* LEFT IMAGE */}
          <div className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[430px] shrink-0 mx-auto lg:mx-0">
            <img
              src={formImage}
              loading="lazy"
              decoding="async"
              alt="Professional attorney providing legal consultation"
              className="w-full aspect-[430/585] object-cover"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="w-full max-w-[680px]">

            {/* HEADER */}
            <div className="mb-14 lg:mb-24">
              <h2 id="consultation-heading" className="mb-4 font-bold text-2xl sm:text-3xl lg:text-[40px] leading-[120%] text-[#FEFCE1]">
                Request a Free Consultation
              </h2>

              <p className="font-medium text-sm sm:text-base text-[#D8D6BF]">
                Speak directly with our experienced attorneys and receive professional guidance tailored to your legal matter.We are committed to providing trusted legal solutions and clear advice for individuals and businesses.
              </p>
            </div>

            {/* FORM */}
            <form aria-label="Free legal consultation request form" onSubmit={handleSubmit} className="w-full max-w-[560px] space-y-8 lg:space-y-9">

              {/* GRID INPUTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-9">

                <FormField icon={userIcon} placeholder="First Name*" name = "name" value = {formData.name} onChange = {handleChange} autoComplete = "name"/>
                <FormField icon={emailIcon} placeholder="Email*" type="email" name = "email" value = {formData.email} onChange = {handleChange} autoComplete = "email"/>
                <FormField icon={phoneIcon} placeholder="Phone Number*" name = "phone" value = {formData.phone} onChange = {handleChange} autoComplete = "tel"/>
                <FormField icon={serviceIcon} placeholder="Services" select name = "service" value = {formData.service} onChange = {handleChange} autoComplete="off"/>

              </div>

              {/* TEXTAREA */}
              <FormField icon={messageIcon} alt="message" placeholder="Write your message here..." name = "message" value = {formData.message} onChange = {handleChange} textarea />

              {/* BOTTOM */}
              <div className="flex flex-col md:flex-row md:items-end gap-6 sm:gap-10 xl:gap-12.5">

                {/* CHECKBOX */}
                <label htmlFor="terms" className="inline-flex items-start gap-2 max-w-[280px] font-medium text-sm text-[#D8D6BF]">
                  <input checked={agreed} onChange={(e) => setAgreed(e.target.checked)} id="terms" type="checkbox" className="accent-[#FC8608] bg-[#FEFCE1] mt-[3px]" />
                  <span>
                    I hereby agree to the Terms & Conditions of our law firm.
                  </span>
                </label>

                {/* BUTTON */}
                <button disabled={loading} type="submit" className="bg-[#FC8608] px-10 py-4 rounded-full flex items-center justify-center gap-4 text-[#0E100F] font-semibold hover:opacity-90 transition whitespace-nowrap">
                  {loading ? "Sending..." : "Send Message"}<ArrowIcon className="text-[#0E100F]" />
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Consultation;
