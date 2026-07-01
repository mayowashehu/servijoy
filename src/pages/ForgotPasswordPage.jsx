import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import InputField from "../components/AuthSections/InputField";
import Button from "../components/AuthSections/Button";
import { FaEnvelope, FaArrowLeft, FaLock, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [emailValid, setEmailValid] = useState(null);

  useEffect(() => {
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailValid(emailRegex.test(email));
    } else {
      setEmailValid(null);
    }
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!emailValid) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      const result = await resetPassword(email);

      if (result.success) {
        setSuccess(result.message);
        setEmail("");
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sj-bg relative p-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_20%,rgba(217,164,65,0.15),transparent_60%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-sj-card border border-sj-line rounded-2xl overflow-hidden">
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-xl bg-sj-brass/10 border border-sj-brass/20 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <FaLock className="text-2xl text-sj-brass" />
              </motion.div>
              <span className="sj-tag text-[11px] text-sj-brass">ACCOUNT RECOVERY</span>
              <h1 className="mt-3 text-2xl font-semibold font-display text-sj-ink">Forgot Password?</h1>
              <p className="mt-2 text-sj-muted text-sm leading-relaxed">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>

            {/* Success message */}
            <AnimatePresence>
              {success && (
                <motion.div
                  className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-start"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-green-300 text-sm">{success}</p>
                    <p className="mt-1 text-xs text-green-400/80">
                      Check your inbox for the reset link. If you don't see it, check your spam folder.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <FaExclamationCircle className="text-red-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-red-300 text-sm">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <InputField
                  type="email"
                  placeholder="Email Address"
                  icon={<FaEnvelope />}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isValid={emailValid === true}
                  isInvalid={emailValid === false}
                  disabled={isLoading || success}
                  autoFocus
                />
                {emailValid === false && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 text-sm text-red-400"
                  >
                    Please enter a valid email address
                  </motion.p>
                )}
              </div>

              <Button
                label={isLoading ? "Sending..." : "Send Reset Link"}
                type="submit"
                isLoading={isLoading}
                disabled={isLoading || !email || emailValid === false || success}
                className="w-full py-3.5 bg-sj-brass text-black font-bold rounded-xl hover:brightness-110 transition-all"
              />

              {/* Back to login link */}
              <div className="mt-6 flex justify-center">
                <Link
                  to="/login-signup"
                  className="flex items-center text-sj-brass hover:brightness-110 transition-all text-sm"
                >
                  <FaArrowLeft className="mr-2" size={12} />
                  <span>Back to Login</span>
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Additional help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-sm text-sj-muted"
        >
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-sj-brass hover:underline">
              Sign up here
            </Link>
          </p>
          <p className="mt-2">
            <Link to="/contact" className="text-sj-brass hover:underline">
              Need help?
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ForgotPasswordPage;