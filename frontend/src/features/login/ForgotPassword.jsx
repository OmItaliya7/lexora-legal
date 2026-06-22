import { useState } from "react";
import SEO from "../../shared/components/SEO";
import { forgotPassword } from "../../api/authApi";
import { Link } from "react-router-dom";
import AuthLayout from "../../shared/components/AuthLayout";
import toast from "react-hot-toast";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const trimmedEmail = email.trim().toLowerCase();

      if (!emailRegex.test(trimmedEmail)) {
        toast.error("Please enter a valid email address");
        return;
      }

      setLoading(true);

      await forgotPassword(trimmedEmail);
      setSubmittedEmail(trimmedEmail);
      setEmail("");
      setEmailSent(true);
      toast.success("If an account exists, a password reset email has been sent.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <SEO
    title="Forgot Password | Lexora Legal"
    description="Reset your account password securely and regain access to your legal consultation account."
    path="/forgot-password"
    noIndex={true}
    />
    <AuthLayout>

      <div className="w-full max-w-[640px] border border-light bg-primary px-8 py-8 sm:px-12 sm:py-10">
        {!emailSent ? (
          <>
        <h1 id="forgot-password-heading" className="text-3xl text-light mb-6">
          Forgot Password
        </h1>
        <form aria-label="Forgot password form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            required
            aria-required="true"
            autoComplete="email"
            disabled={loading}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray bg-transparent rounded-full px-5 py-4 text-white"
          />

          <button type="submit" disabled={loading} className="w-full mt-6 border border-light rounded-full py-4 text-light">
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        
        </form>

        <Link to="/login" className="block mt-5 text-secondary">
          Back to Login
        </Link>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-5xl text-light mb-4">
            Check your email
          </h2>
          <p className="text-light mb-6">
            We've sent a password reset link to {submittedEmail}.
            Please check your inbox and spam folder.
          </p>
          <Link to="/login" className="text-secondary">
            Back to Login
          </Link>
        </div>
      )}

      </div>

    </AuthLayout>
    </>
  );
};

export default ForgotPassword;