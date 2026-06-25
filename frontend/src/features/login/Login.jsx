  import AuthLayout from "../../shared/components/AuthLayout";
  import AuthCard from "../../shared/components/AuthCard";
  import SEO from "../../shared/components/SEO";

  import facebookIcon from "../../assets/icons/social/facebook-black.svg";
  import googleIcon from "../../assets/icons/social/google.svg";

  import { useNavigate, Link } from "react-router-dom";
  import { useState } from "react";

  import { loginUser, googleLogin } from "../../api/authApi";
  import { useGoogleLogin } from "@react-oauth/google";

  import toast from "react-hot-toast";

  const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" })

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({})

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

          toast.success("Login Successful");
          navigate("/");

        } catch (error) {
          toast.error(error.response?.data?.message || "Google Login Failed");
        }
      },
      onError: () => {
        toast.error("Google Login Failed");
      },
    })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = formData.email.trim().toLowerCase();
      const password = formData.password;

      const newErrors = {}

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!email){
        newErrors.email = "Email is required";
      }
      else if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address";
      }

      if(!password){
        newErrors.password = "Password is required";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setLoading(true);

      const response = await loginUser({ email, password });

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      toast.success("Login Successful");
      navigate("/");

    } catch (error) {
      const message =error.response?.data?.message || "Login Failed";
      if(message === "Invalid credentials"){
        setErrors({ password: message });
      }else{
        toast.error(message);
      }
    } finally {
      setLoading(false);
    }
  };

    return (
      <>
      <SEO
        title="Login | Lexora Legal"
        description="Securely login to access your legal consultation account and manage your services."
        path="/login"
        noIndex={true}
      />
      <AuthLayout>
        <AuthCard
          title="Welcome Back"
          subtitle={
            <>
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#FC8608] hover:opacity-[0.9]">Sign up</Link>
            </>
          }
          description="Enter your email address to login into your account."
          buttonText={loading ? "Logging in..." : "Login"}
          loading={loading}
          facebookIcon={facebookIcon}
          googleIcon={googleIcon}
          onSubmit={handleSubmit}
          googleLogin={googleAuth}
          errors={errors}
          fields={[
            { label: "Your email", type: "email", name: "email", value: formData.email, onChange: handleChange, autoComplete:"email" },
            {label: "Password", type: "password", name: "password", value: formData.password, onChange: handleChange, autoComplete:"current-password"}
          ]}
          additionalContent={
            <div className="mt-5 text-right">
              <Link to="/forgot-password" className="text-secondary hover:opacity-[0.9]">Forgot Password</Link>
            </div>
          }
        />
      </AuthLayout>
      </>
    );
  };

  export default Login;