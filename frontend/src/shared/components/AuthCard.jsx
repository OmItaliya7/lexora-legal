import { FiX } from "react-icons/fi";
import {useState} from "react";
import userIcon from "@/assets/icons/user-icon.svg";
import showPasswordIcon from "@/assets/icons/password-visibility/showPassword.svg";
import hidePasswordIcon from "@/assets/icons/password-visibility/hidePassword.svg";

const SocialButton = ({ icon, text, onClick }) => {
  return (
    <button type="button" onClick={onClick} className="flex items-center justify-center gap-1 lg:gap-4 w-full py-5 bg-light border border-[#333333] rounded-full">
      <img src={icon} alt="" aria-hidden="true" className="size-4 sm:size-6" />
      <span className="text-base lg:text-xl text-primary ">{text}</span>
    </button>
  )
}

const InputField = ({ label , type = "text", name, value, onChange, autoComplete, error}) =>{
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";
  return (
    <div className="text-left">  
        <label htmlFor={name} className="text-xs lg:text-base block pb-2 text-gray">
          {label}
        </label>
        <div className="relative">
         <input type={isPasswordField ? showPassword ? "text" : "password" : type} aria-describedby={error ? `${name}-error` : undefined} name={name} id={name} onChange={onChange} autoComplete={autoComplete} aria-required="true" value={value} className={`w-full bg-transparent border rounded-full px-4 sm:px-5 py-3 lg:py-4 text-white transition ${error ? "border-red-500" : "border-dark-gray focus:border-white"}`}/>
         
         {isPasswordField && (
          <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2  text-gray text-xl">
            <img src={showPassword ? showPasswordIcon : hidePasswordIcon} alt="Eye icon" />
          </button>
        )}
        </div>
        {error && <p id={`${name}-error`} className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  )
}

const AuthCard = ({
  title,
  subtitle,
  buttonText,
  fields,
  showCheckbox = false,
  facebookIcon,
  googleIcon,
  description,
  onSubmit,
  loading,
  googleLogin,
  additionalContent,
  agreed,
  setAgreed,
  errors={}
}) => {
  return (
    <div className="w-full max-w-[670px] border border-light bg-primary px-8 py-6 sm:px-12 sm:py-7.5 lg:pl-16 lg:pr-20 text-center relative">

      {/* Close */}
      <span aria-hidden="true" className="absolute top-2 right-2 lg:top-8 lg:right-8 text-[#666666]">
        <FiX size={32} />
      </span>

        {/* HEADER */}
        <div className="mb-10">
          <img src={userIcon} alt="" aria-hidden="true" className="mx-auto mb-6" />
          <h2 id="auth-heading" className="text-light text-xl sm:text-2xl lg:text-[32px] mb-0.5">
            {title}
          </h2>

          <p className=" text-xs sm:text-sm lg:text-base text-gray">
            {subtitle}
          </p>
        </div>

        {/* SOCIAL */}
        <div className="mb-10 space-y-3 sm:space-y-4">
          <SocialButton
            icon={facebookIcon}
            text="Continue with Facebook"
          />
          <SocialButton
            icon={googleIcon}
            text="Continue with Google"
            onClick={googleLogin}
          />
        </div>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5.5 mb-10">
          <div className="flex-1 h-0.5 bg-dark-gray" />
          <span className="text-xs sm:text-sm lg:text-[24px] text-dark-gray">
            OR
          </span>
          <div className="flex-1 h-0.5 bg-dark-gray" />
        </div>

        {/* INPUTS */}
        <form onSubmit={onSubmit}>
          <div className="mb-10 space-y-6">
            <p className="text-xs sm:text-sm lg:text-lg text-gray">
              {description}
            </p>

            {fields.map((field, index) => (
              <InputField key={index} {...field} value={field.value} error={errors[field.name]} onChange={field.onChange} />
            ))}
            {additionalContent}
          </div>

          {/* BUTTON */}
          <div className="space-y-5">
            <button type="submit" disabled={loading} className="w-full border border-light px-4 sm:px-5 py-3 lg:py-4.5 rounded-full font-semibold text-xl text-light hover:bg-white hover:text-black transition">
              {buttonText}
            </button>
            {/* CHECKBOX (Signup only) */}
            {showCheckbox && (
            <label className="flex items-start gap-3 cursor-pointer">
              <div className="relative">
                <input checked={agreed} onChange={(e)=> {setAgreed(e.target.checked)}} type="checkbox" className="peer mt-[2px] size-4.5 appearance-none rounded-[2px] border-[1.5px] border-light checked:bg-secondary checked:border-secondary"/>
                <span className="pointer-events-none absolute inset-0 hidden items-center justify-center text-primary text-xs font-bold peer-checked:flex">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0.2 top-0">
                        <path d="M4.16699 12.0833C4.16699 12.0833 5.41699 12.0833 7.08366 14.9999C7.08366 14.9999 11.716 7.36103 15.8337 5.83325" stroke="#0E100F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <span className="text-base text-light">
                I agree to the{" "}
                <span className="text-secondary">Terms of Service</span> and{" "}
                <span className="text-secondary">Privacy Policy</span>
              </span>
            </label>
            )}
            {showCheckbox && errors.agreed && <p className="text-red-500 text-sm">{errors.agreed}</p>}
          </div>
        </form>
    </div>
  );
};

export default AuthCard;