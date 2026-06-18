import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../../api/authApi";
import AuthLayout from "../../shared/components/AuthLayout";
import toast from "react-hot-toast";
import SEO from "../../shared/components/SEO";


const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (!token) {
  navigate("/forgot-password");
  return null;
}

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const trimmedPassword = password.trim();

      if (!trimmedPassword) {
        toast.error("Please enter password");
        return;
      }

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

      if (!passwordRegex.test(trimmedPassword)) {
        toast.error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number");
        return;
      }

      setLoading(true);
      await resetPassword(token, trimmedPassword);
      toast.success("Password reset successful");
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
    title="Reset Password | Lexora Legal"
    description="Reset your account password securely and regain access to your legal consultation account."
    path="/"
    noIndex={true}
    />
    <AuthLayout>

      <div className="w-full max-w-[640px] border border-light bg-primary px-8 py-8 sm:px-12 sm:py-10">

        <h1 id="reset-password-heading" className="text-2xl sm:text-3xl text-light mb-6">
          Reset Password
        </h1>
        <form aria-labelledby="reset-password-heading" aria-label="Reset password form" onSubmit={handleSubmit}>
          <input
            id="password"
            type="password"
            required
            aria-required="true"
            autoComplete="new-password"
            disabled={loading}
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray bg-transparent rounded-full px-5 py-4 text-white"
          />

          <button type="submit" disabled={loading} className="w-full mt-6 border border-light rounded-full py-4 text-light">
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

      </div>

    </AuthLayout>
    </>
  );
};

export default ResetPassword;