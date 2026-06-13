import { FiX } from "react-icons/fi";
import {useState} from "react";
import userIcon from "../../assets/icons/user-icon.svg";
import showPasswordIcon from "../../assets/icons/passWordVisiblity/showPassword.svg";
import hidePasswordIcon from "../../assets/icons/passWordVisiblity/hidePassword.svg";

const SocialButton = ({ icon, text, alt, onClick }) => {
  return (
    <button type="button" onClick={onClick} className="flex items-center justify-center gap-1 lg:gap-4 w-full py-5 bg-[#FEFCE1] border border-[#333333] rounded-full">
      <img src={icon} alt={alt} className="size-4 sm:size-6" />
      <p className="text-base lg:text-xl text-[#0E100F] ">{text}</p>
    </button>
  )
}

const InputField = ({ label , type = "text", name, value, onChange, autoComplete}) =>{
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";
  return (
    <div className="text-left">
      
        <label htmlFor={name} className="text-xs lg:text-base block pb-2 text-[#D8D6BF]">
          {label}
        </label>
        <div className="relative">
         <input type={isPasswordField ? showPassword ? "text" : "password" : type} name={name} id={name} onChange={onChange} autoComplete={autoComplete} required aria-required="true" value={value} className="w-full bg-transparent border border-[#403F38] rounded-full px-4 sm:px-5 py-3 lg:py-4 text-white focus:border-white transition"/>
         {isPasswordField && (
          <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2  text-[#D8D6BF] text-xl">
            <img src={showPassword ? showPasswordIcon : hidePasswordIcon} alt="Eye icon" />
          </button>
         )}
      </div>
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
}) => {
  return (
    <div className="w-full max-w-[670px] border border-[#FEFCE1] bg-[#0E100F] px-8 py-6 sm:px-12 sm:py-7.5 lg:pl-16 lg:pr-20 text-center relative">

      {/* Close */}
      <span aria-hidden="true" className="absolute top-2 right-2 lg:top-8 lg:right-8 text-[#666666]">
        <FiX size={32} />
      </span>


        {/* HEADER */}
        <div className="mb-10">
          <img src={userIcon} alt="" aria-hidden="true" className="mx-auto mb-6" />
          <h2 id="auth-heading" className="text-[#FEFCE1] text-xl sm:text-2xl lg:text-[32px] mb-0.5">
            {title}
          </h2>

          <p className=" text-xs sm:text-sm lg:text-base text-[#D8D6BF]">
            {subtitle}
          </p>
        </div>

        {/* SOCIAL */}
        <div className="mb-10 space-y-3 sm:space-y-4">
          <SocialButton
            icon={facebookIcon}
            text="Continue with Facebook"
            alt=""
            aria-hidden="true"
          />
          <SocialButton
            icon={googleIcon}
            text="Continue with Google"
            alt=""
            aria-hidden="true"
            onClick={googleLogin}
          />
        </div>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5.5 mb-10">
          <div className="flex-1 h-0.5 bg-[#403F38]" />
          <span className="text-xs sm:text-sm lg:text-[24px] text-[#403F38]">
            OR
          </span>
          <div className="flex-1 h-0.5 bg-[#403F38]" />
        </div>

        {/* INPUTS */}
        <form onSubmit={onSubmit}>
          <div className="mb-10 space-y-6">
            <p className="text-xs sm:text-sm lg:text-lg text-[#D8D6BF]">
              {description}
            </p>

            {fields.map((field, index) => (
              <InputField key={index} {...field} value={field.value} onChange={field.onChange} />
            ))}
            {additionalContent}
          </div>

          {/* BUTTON */}
          <div className="space-y-5">
            <button type="submit" disabled={loading} className="w-full border border-[#FEFCE1] px-4 sm:px-5 py-3 lg:py-4.5 rounded-full font-semibold text-xl text-[#FEFCE1] hover:bg-white hover:text-black transition">
              {buttonText}
            </button>
            {/* CHECKBOX (Signup only) */}
            {showCheckbox && (
              <div className="flex items-center gap-2 text-sm text-[#FEFCE1]">
                <input type="checkbox" />
                <p>
                  I agree to the{" "}
                  <span className="text-[#FC8608]">Terms of Service</span> and{" "}
                  <span className="text-[#FC8608]">Privacy Policy</span>
                </p>
              </div>
            )}
          </div>
        </form>
    </div>
  );
};

export default AuthCard;