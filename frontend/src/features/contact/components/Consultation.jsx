import formImage from "@/assets/images/contact/contact-form.webp";
import userIcon from "@/assets/icons/form/user.svg";
import emailIcon from "@/assets/icons/form/email.svg";
import phoneIcon from "@/assets/icons/form/phone.svg";
import serviceIcon from "@/assets/icons/form/services.svg";
import messageIcon from "@/assets/icons/form/message.svg";
import { useContactForm } from "@/hooks/useContactForm";
import ArrowIcon from "@/shared/icons/ArrowIcon";

const services = ["Corporate Law", "Family Law", "Business Law", "Real Estate Law", "Criminal Law", "Financial Law",];

/* Reusable Input Row */
const FormField = ({ icon, placeholder, type = "text", textarea, select, name, value, onChange, label, autoComplete, error}) => {

  const baseClass = "w-full outline-none text-sm font-medium text-light placeholder-[#FEFCE1]"
 
  return (
    <div>
      <div className={`flex pb-2 border-b ${textarea ? "items-start gap-4" : "items-center gap-2.25"} ${error ? "border-red-500" : "border-light/25"}`}>
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
            aria-required="true"
          />
        ) : select ? (
          <select id={name} name = {name} value={value} onChange={onChange} autoComplete={autoComplete} className={`${baseClass}`}>
            <option className="bg-primary">{placeholder}</option>
            {services.map((service, index) => (
              <option key={index} value={service} className="bg-primary">
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
            aria-required="true"
          />
        )}
        
      </div>
      {error && (<p className="text-red-500 text-sm mt-2">{error}</p>)}
    </div>
  );
  
};

const Consultation = () => {

  const {
    formData,
    errors,
    loading,
    aggred,
    setAggred,
    handleChange,
    handleSubmit
  } = useContactForm({name:"",email:"",phone:"",message:"",service:""}, true);

  return (
    <section aria-labelledby="consultation-heading" className="container-main">
      <div className="container-content py-17.5 md:py-22.5 lg:py-25 border-b border-light/25">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-21.25 items-center ">

          {/* LEFT IMAGE */}
          <div className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[430px] shrink-0">
            <img
              src={formImage}
              loading="lazy"
              decoding="async"
              alt="Professional attorney providing legal consultation"
              className="w-full aspect-[430/585] object-cover"
            />
          </div>

          {/* RIGHT FORM */}
          <div>

            {/* HEADER */}
            <div className="mb-14 lg:mb-24">
              <h2 id="consultation-heading" className="mb-4 font-bold text-2xl sm:text-3xl lg:text-[40px] leading-[120%] text-light">
                Request a Free Consultation
              </h2>

              <p className="font-medium text-sm sm:text-base text-gray">
                Describe your legal matter and one of our experienced attorneys will contact you within 24 hours to discuss your options.
              </p>
            </div>

            {/* FORM */}
            <form aria-label="Free legal consultation request form" onSubmit={handleSubmit} className="w-full max-w-[470px] space-y-8 lg:space-y-9">

              {/* GRID INPUTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-9">

                <FormField icon={userIcon} placeholder="First Name*" name = "name" value = {formData.name} onChange = {handleChange} autoComplete = "name" error = {errors.name}/>
                <FormField icon={emailIcon} placeholder="Email*" type="email" name = "email" value = {formData.email} onChange = {handleChange} autoComplete = "email" error = {errors.email}/>
                <FormField icon={phoneIcon} placeholder="Phone Number*" name = "phone" value = {formData.phone} onChange = {handleChange} autoComplete = "tel" error = {errors.phone}/>
                <FormField icon={serviceIcon} placeholder="Services" select name = "service" value = {formData.service} onChange = {handleChange} autoComplete="off" error = {errors.service}/>

              </div>

              {/* TEXTAREA */}
              <FormField icon={messageIcon} alt="message" placeholder="Write your message here..." name = "message" value = {formData.message} onChange = {handleChange} textarea error={errors.message} />

              {/* BOTTOM */}
              <div className="flex flex-row ">
                {/* CHECKBOX */}
                <label htmlFor="terms" className="inline-flex items-start gap-1.25 text-sm text-gray font-medium">
                  <div className="relative mt-0.5">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={aggred}
                      onChange={(e) => setAggred(e.target.checked)}
                      className="peer size-4 appearance-none rounded-sm border-[1.5px] border-light checked:bg-secondary checked:border-secondary"/>

                    {aggred && (
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0">
                        <path d="M4.16699 12.0833C4.16699 12.0833 5.41699 12.0833 7.08366 14.9999C7.08366 14.9999 11.716 7.36103 15.8337 5.83325" stroke="#0E100F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>

                  <span>
                    I hereby agree to the Terms & Conditions of our law firm.
                  </span>

                </label>

                {/* BUTTON */}
                <button disabled={loading} type="submit" className="bg-secondary px-10 py-4 rounded-full flex items-center justify-center gap-4 text-primary font-semibold text-sm hover:opacity-90 transition whitespace-nowrap">
                  {loading ? "Sending..." : "Send Message"}<ArrowIcon className="text-primary" />
                </button>

              </div>
              {errors.agreed && <p className="text-red-500 text-sm mt-2">{errors.agreed}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Consultation;