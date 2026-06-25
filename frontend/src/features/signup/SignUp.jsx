import AuthLayout from "../../shared/components/AuthLayout";
import AuthCard from "../../shared/components/AuthCard";
import SEO from "../../shared/components/SEO";

import facebookIcon from "../../assets/icons/social/facebook-black.svg";
import googleIcon from "../../assets/icons/social/google.svg";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useGoogleLogin } from "@react-oauth/google";
import { registerUser, googleLogin } from "../../api/authApi";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({email: "",password: "",confirmPassword: "",});
  const [loading, setLoading] = useState(false);
  const [agreed,setAgreed]=useState(false);
  const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const googleAuth = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await googleLogin(tokenResponse.access_token);
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        toast.success("Registration Successful");
        navigate("/");
      } catch (error) {
        toast.error(error.response?.data?.message || "Registration failed");
      }
    },
    onError: () => {
      toast.error("Registration failed");
    },
  });

// const handleSubmit = async (e) => {
//   e.preventDefault();
//     try {
//       const email = formData.email.trim();
//       const password = formData.password.trim();
//       const confirmPassword = formData.confirmPassword.trim();
//         if (!email || !password || !confirmPassword) {
//             toast.error("Please fill all fields")
//             return;
//         }
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//         if(!emailRegex.test(email)){
//             toast.error("Please enter a valid email address");
//             return;
//         }
        
//         if (!passwordRegex.test(password)) {
//             toast.error("Password must be at least 8 characters long and contain at least one uppercase, one lowercase and one number.");
//             return;
//         }
        
//         if (password !== confirmPassword) {
//             toast.error("Passwords do not match")
//             return;
//         }
//         if(!agreed){
//           toast.error("Please agree to the terms and conditions")
//           return;
//         }
//         setLoading(true);
//         await registerUser({ email, password });

//         toast.success("Registration Successful");
//         navigate("/login");
//     } catch (error) {
//         toast.error(error.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
// };

const handleSubmit = async (e) => {
  e.preventDefault();
    try {
      const email = formData.email.trim();
      const password = formData.password.trim();
      const confirmPassword = formData.confirmPassword.trim();
      const newErrors = {};
        
        
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if(!email){
          newErrors.email = "Email is required";
        }
        else if(!emailRegex.test(email)){
            newErrors.email = "Please enter a valid email address";
        }

        if(!password){
          newErrors.password = "Password is required";
        }
        else if(!passwordRegex.test(password)){
          newErrors.password = "Password must be at least 8 characters long and contain at least one uppercase, one lowercase and one number.";
        }

        if(!confirmPassword){
          newErrors.confirmPassword = "Confirm password is required";
        }
        else if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match"
        }
        if(!agreed){
          newErrors.agreed = "Please agree to the terms and conditions"
        }
        
        if(Object.keys(newErrors).length > 0){
          setErrors(newErrors);
          return;
        }
        setLoading(true);
        await registerUser({ email, password });

        toast.success("Registration Successful");
        navigate("/login");
    } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
};

  return (
    <>
      <SEO
        title="Create Account | Lexora Legal"
        description="Create your law firm account to request consultations, connect with experienced attorneys, and manage legal services online."
        path="/signup"
        noIndex={true}
      />
      <AuthLayout>
        <AuthCard
        title="Create an account"
        subtitle={
          <>
            Already have an account?{" "}
            <Link to="/login" className="text-secondary hover:opacity-[0.9]">Login</Link>
          </>
        }
        description="Enter your details to create an account."
        buttonText={loading ? "Creating account..." : "Get Started"}
        loading={loading}
        facebookIcon={facebookIcon}
        googleIcon={googleIcon}
        googleLogin={googleAuth}
        onSubmit={handleSubmit}

        fields={[
          { label: "Your email", type: "email", name: "email", value: formData.email, onChange: handleChange, autoComplete: "email" },
          { label: "Password", type: "password", name: "password", value: formData.password, onChange: handleChange, autoComplete: "new-password" },
          { label: "Confirm Password", type: "password", name: "confirmPassword", value: formData.confirmPassword, onChange: handleChange, autoComplete: "new-password" },
        ]}
      
        showCheckbox
        agreed={agreed}
        setAgreed={setAgreed}
        errors={errors}
      />
    </AuthLayout>
    </>
  );
};

export default Signup;