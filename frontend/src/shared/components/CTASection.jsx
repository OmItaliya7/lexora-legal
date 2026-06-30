import userIcon from "@/assets/icons/form/cta-user.svg";
import emailIcon from "@/assets/icons/form/email.svg";
import phoneIcon from "@/assets/icons/form/phone.svg";
import messageIcon from "@/assets/icons/form/cta-message.svg";
import arrow from "@/assets/decorations/arrow-CTA.webp";
import ArrowIcon from "@/shared/icons/ArrowIcon";
import { useContactForm } from "@/hooks/useContactForm";
import React from "react";

const FormField = React.memo(({icon, type="text", label, placeholder, textarea = false, name, value, onChange, autoComplete, error}) =>{
  return(
    <div>
      <div className={`flex py-3 sm:py-4 border-b ${error ? "border-red-500" : "border-light/25"}`}>
        <label htmlFor={name} className="sr-only">
          {label}
        </label>
        {textarea ? (
          <textarea aria-required="true" id={name} name={name} value={value} onChange={onChange} rows={3} placeholder={placeholder} autoComplete={autoComplete} className="w-full resize-y bg-transparent text-sm lg:text-base text-light placeholder:text-gray outline-none" />
        ) : (
          <input aria-required="true" id={name} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} autoComplete={autoComplete} className="w-full bg-transparent text-sm lg:text-base text-light placeholder:text-gray outline-none" />
        )}

        <img src={icon} alt="" aria-hidden="true" className="size-5 lg:size-6 shrink-0" /> 
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
})

const CTASection = () => {
  const {formData, handleChange, handleSubmit, loading, errors} = useContactForm({ name: "", email: "", phone: "", message: "" });

  return (
    <section aria-labelledby="consultation-heading" className="relative">
      {/* ARROW  */}
      <img src={arrow} alt="" loading='lazy' aria-hidden='true' className="pointer-events-none hidden sm:block absolute left-0 bottom-[-18px] 2xl:bottom-[-25px] w-40 lg:w-50 xl:w-auto 2xl:w-75" />

      <div className="container-main">
        <div className="container-content py-17.5 md:py-22.5 lg:py-25">
        
          {/* TITLE */}
          <h2 id="consultation-heading" className="mb-8 sm:mb-12 lg:mb-18 text-center font-bold text-[30px] sm:text-[36px] lg:text-[40px] leading-[120%] text-light">
            Request a Free <br /> Legal Consultation
          </h2>

          {/* FORM */}
          <form onSubmit={handleSubmit} aria-label="Free legal consultation form">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7.5">
              <FormField type="text" label="Full Name" name="name" value={formData.name} onChange={handleChange} icon={userIcon} placeholder="Your Name*" autoComplete="name" error={errors.name} />
              <FormField type="email" label="Email Address" name="email" value={formData.email} onChange={handleChange} icon={emailIcon} placeholder="Your Email*" autoComplete="email" error={errors.email} />
              <FormField type="text" label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} icon={phoneIcon} placeholder="Your Phone*" autoComplete="tel" error={errors.phone} />
            </div>
            <div className="max-w-[480px] lg:max-w-[570px] mx-auto mt-8 ">
              <FormField type="text" label="Message" name="message" value={formData.message} onChange={handleChange} icon={messageIcon} placeholder="Describe Your Legal Matter*" textarea autoComplete="off" error={errors.message} />
            </div>
            <button type="submit" disabled={loading} className="mx-auto mt-10 sm:mt-12 lg:mt-23 flex items-center gap-4 rounded-full bg-secondary px-10 py-4 font-semibold text-sm md:text-base text-primary hover:opacity-90 transition-opacity">
              {loading ? "Sending..." : "Send Message"} <ArrowIcon className="text-primary" />
            </button> 
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default CTASection;