import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import InputField from "./InputField";
import {
  FaUser,
  FaCheckCircle,
  FaEnvelope,
  FaExclamationCircle,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaApple,
  FaGithub,
  FaSpinner,
} from "react-icons/fa";
import { FiX, FiSearch, FiBriefcase, FiArrowRight, FiAward, FiShield } from "react-icons/fi";
import { HiLightningBolt } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

const getPasswordStrength = (password) => {
  if (!password) return 0;
  let score = 0;
  if (password.length >= 6) score++;
  if (password.length >= 10) score++;
  if (/[A-Z]/.test(password) && /[0-9]/.test(password)) score++;
  return score;
};

const AuthForm = ({ isLogin, setIsLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const prepopulatedData = location.state?.bookingData || {};

  const [formData, setFormData] = useState({
    name: prepopulatedData.name || "",
    email: prepopulatedData.email || "",
    password: "",
  });
  const [accountType, setAccountType] = useState("customer");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const passwordStrength = getPasswordStrength(formData.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (isLogin) {
      if (!formData.email || !formData.password) {
        setError("Please fill in all fields.");
        return;
      }
      setIsLoading(true);
      const result = await login(formData.email, formData.password);
      setIsLoading(false);
      if (result.success) {
        if (rememberDevice) {
          localStorage.setItem("rememberDevice", "true");
        }
        const from = location.state?.from || "/dashboard";
        navigate(from, { replace: true });
      } else {
        setError(result.message);
      }
    } else {
      if (!formData.name || !formData.email || !formData.password) {
        setError("Please fill in all fields.");
        return;
      }
      if (!agreedToTerms && window.matchMedia("(min-width: 1024px)").matches) {
        setError("Please agree to the Terms of Service and Privacy Policy.");
        return;
      }
      setIsLoading(true);
      const result = await register({
        name: formData.name,
        email: formData.email,
        phone: prepopulatedData.phone || "",
        password: formData.password,
        role: accountType === "vendor" ? "vendor" : "user",
      });
      setIsLoading(false);
      if (result.success) {
        setSuccess(result.message);
        setFormData({ name: "", email: "", password: "" });
        setAgreedToTerms(false);
        setIsLogin(true);
      } else {
        setError(result.message);
      }
    }
  };

  const switchToLogin = () => {
    setIsLogin(true);
    setError(null);
    setSuccess(null);
    navigate("/login-signup", { replace: true });
  };

  const switchToSignup = () => {
    setIsLogin(false);
    setError(null);
    setSuccess(null);
    navigate("/login-signup?mode=signup", { replace: true });
  };

  const AlertMessages = () => (
    <>
      <AnimatePresence>
        {success && (
          <motion.div
            className="mb-5 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-start"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <FaCheckCircle className="text-green-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <p className="font-medium text-green-300 text-sm">{success}</p>
              <p className="mt-1 text-xs text-green-400/80">Please check your inbox.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {error && (
          <motion.div
            className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <FaExclamationCircle className="text-red-400 mt-0.5 mr-3 flex-shrink-0" />
            <p className="text-red-300 text-sm">{error}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  const PasswordToggle = () => (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-sj-muted hover:text-sj-ink transition-colors"
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
    </button>
  );

  const SocialDivider = ({ text }) => (
    <div className="flex items-center gap-4 my-6">
      <div className="flex-1 h-px bg-sj-line" />
      <span className="sj-tag text-[10px] text-sj-muted whitespace-nowrap">
        {text}
      </span>
      <div className="flex-1 h-px bg-sj-line" />
    </div>
  );

  /* ─── Desktop Login ─── */
  const DesktopLogin = () => (
    <div className="hidden lg:flex min-h-screen flex-col bg-sj-bg relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_10%,rgba(217,164,65,0.15),transparent_60%)] pointer-events-none" />

      <header className="relative z-10 flex items-center justify-between px-8 xl:px-12 py-6">
        <Link to="/" className="text-xl font-semibold font-display text-sj-ink">
          ServiJoy
        </Link>
        <Link
          to="/"
          className="sj-tag text-xs text-sj-muted hover:text-sj-ink transition-colors"
        >
          Back to Home
        </Link>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center px-6 pb-8">
        <div className="w-full max-w-md bg-sj-card border border-sj-line rounded-2xl p-8 xl:p-10">
          <h2 className="text-2xl xl:text-3xl font-semibold font-display text-sj-ink mb-2">
            Welcome Back
          </h2>
          <p className="text-sj-muted text-sm mb-8">
            Log in to manage your premium services.
          </p>

          <AlertMessages />

          <form onSubmit={handleSubmit}>
            <InputField
              id="login-email"
              label="Email Address"
              type="email"
              placeholder="name@company.com"
              icon={<FaEnvelope size={14} />}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="login-password"
                  className="text-[10px] sm:text-xs sj-tag text-sj-muted"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs text-sj-brass hover:brightness-110 transition-all"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative flex items-center bg-sj-surface border border-sj-line rounded-xl px-4 py-3 focus-within:border-sj-brass/40 transition-colors">
                <FaLock size={14} className="text-sj-muted mr-3 flex-shrink-0" />
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="flex-1 bg-transparent outline-none text-sj-ink placeholder:text-sj-muted/50 text-sm pr-8"
                />
                <PasswordToggle />
              </div>
            </div>

            <label className="flex items-center gap-3 mb-8 cursor-pointer group">
              <input
                type="checkbox"
                checked={rememberDevice}
                onChange={(e) => setRememberDevice(e.target.checked)}
                className="w-4 h-4 rounded border-sj-line bg-sj-surface accent-sj-brass"
              />
              <span className="text-sm text-sj-muted group-hover:text-sj-ink transition-colors">
                Remember this device
              </span>
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-sj-brass text-black font-bold rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isLoading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <>
                  Login
                  <FiArrowRight />
                </>
              )}
            </button>
          </form>

          <SocialDivider text="OR" />

          <button
            type="button"
            className="w-full py-3 border border-sj-line rounded-xl flex items-center justify-center gap-3 text-sj-ink text-sm hover:border-sj-brass/30 transition-colors"
          >
            <FaGoogle className="text-lg" />
            Continue with Google
          </button>

          <p className="text-center mt-8 text-sm text-sj-muted">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={switchToSignup}
              className="text-sj-brass hover:brightness-110 transition-all font-medium"
            >
              Sign Up
            </button>
          </p>
        </div>
      </main>

      <footer className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-8 xl:px-12 py-6 text-[11px] sj-tag text-sj-muted">
        <p>© 2024 ServiJoy. Built for the modern service economy.</p>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="hover:text-sj-ink transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-sj-ink transition-colors">
            Terms of Service
          </Link>
          <Link to="/help" className="hover:text-sj-ink transition-colors">
            Support
          </Link>
        </div>
      </footer>
    </div>
  );

  /* ─── Mobile Login ─── */
  const MobileLogin = () => (
    <div className="lg:hidden min-h-screen flex flex-col bg-sj-bg px-4 py-6">
      <header className="flex items-center justify-between mb-8">
        <Link to="/" className="flex items-center gap-2">
          <HiLightningBolt className="text-sj-brass text-xl" />
          <span className="text-lg font-semibold font-display text-sj-ink">ServiJoy</span>
        </Link>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-sj-muted hover:text-sj-ink p-1 transition-colors"
          aria-label="Close"
        >
          <FiX size={22} />
        </button>
      </header>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold font-display text-sj-ink mb-2">Welcome Back</h2>
        <p className="text-sj-muted text-sm">Access your professional service dashboard</p>
      </div>

      <div className="bg-sj-card border border-sj-line rounded-2xl p-6 mb-8">
        <AlertMessages />

        <form onSubmit={handleSubmit}>
          <InputField
            id="mobile-login-email"
            label="Identifier"
            type="email"
            placeholder="name@domain.com"
            icon={<span className="text-sm font-mono">@</span>}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="mobile-login-password"
                className="text-[10px] sj-tag text-sj-muted"
              >
                Password
              </label>
              <Link to="/forgot-password" className="text-[10px] sj-tag text-sj-brass">
                Forgot?
              </Link>
            </div>
            <div className="relative flex items-center bg-sj-surface border border-sj-line rounded-xl px-4 py-3 focus-within:border-sj-brass/40">
              <FaLock size={14} className="text-sj-muted mr-3" />
              <input
                id="mobile-login-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="flex-1 bg-transparent outline-none text-sj-ink placeholder:text-sj-muted/50 text-sm pr-8"
              />
              <PasswordToggle />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {isLoading ? <FaSpinner className="animate-spin" /> : <>Log In →</>}
          </button>
        </form>

        <SocialDivider text="Or Continue With" />

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-3 border border-sj-line rounded-xl text-sj-ink text-sm hover:border-sj-brass/30 transition-colors"
          >
            <FaGoogle />
            Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-3 border border-sj-line rounded-xl text-sj-ink text-sm hover:border-sj-brass/30 transition-colors"
          >
            <FaApple />
            Apple
          </button>
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="text-sj-ink text-sm mb-1">New to ServiJoy?</p>
        <button
          type="button"
          onClick={switchToSignup}
          className="text-sj-ink font-bold underline underline-offset-4 hover:text-sj-brass transition-colors"
        >
          Create an Account
        </button>
      </div>

      <footer className="mt-auto pt-6 text-center">
        <div className="flex items-center justify-center gap-6 mb-4 text-xs text-sj-muted">
          <Link to="/privacy" className="hover:text-sj-ink transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-sj-ink transition-colors">
            Terms
          </Link>
          <Link to="/help" className="hover:text-sj-ink transition-colors">
            Support
          </Link>
        </div>
        <p className="text-[10px] text-sj-muted/60">
          © 2024 ServiJoy. Built for the modern service economy.
        </p>
      </footer>
    </div>
  );

  /* ─── Desktop Signup ─── */
  const DesktopSignup = () => (
    <div className="hidden lg:flex min-h-screen flex-col bg-sj-bg">
      <header className="flex items-center justify-between px-8 xl:px-12 py-6">
        <Link to="/" className="text-xl font-semibold font-display text-sj-ink">
          ServiJoy
        </Link>
        <Link to="/help" className="text-sm text-sj-muted hover:text-sj-ink transition-colors">
          Support
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 pb-8">
        <div className="w-full max-w-5xl bg-sj-card border border-sj-line rounded-2xl overflow-hidden flex min-h-[600px]">
          {/* Left panel */}
          <div className="w-2/5 bg-sj-surface relative p-10 xl:p-12 flex flex-col justify-between border-r border-sj-line">
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,164,65,0.15)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl xl:text-4xl font-semibold font-display text-sj-ink leading-tight mb-4">
                Join the modern{" "}
                <span className="text-sj-brass">service economy.</span>
              </h2>
              <p className="text-sj-muted text-sm leading-relaxed">
                Connect with precision, scale with ease, and experience the future of
                professional service management.
              </p>
            </div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3 text-sm text-sj-ink">
                <FiAward className="text-sj-brass text-lg flex-shrink-0" />
                Trusted by 10k+ users
              </div>
              <div className="flex items-center gap-3 text-sm text-sj-ink">
                <FiShield className="text-sj-brass text-lg flex-shrink-0" />
                Enterprise-grade security
              </div>
            </div>
          </div>

          {/* Right panel — form */}
          <div className="flex-1 p-10 xl:p-12">
            <h2 className="text-2xl font-semibold font-display text-sj-ink mb-1">Create Account</h2>
            <p className="text-sj-muted text-sm mb-8">
              Start your journey with ServiJoy today.
            </p>

            <AlertMessages />

            <form onSubmit={handleSubmit}>
              <InputField
                id="signup-name"
                label="Full Name"
                type="text"
                placeholder="John"
                icon={<FaUser size={14} />}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <InputField
                id="signup-email"
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                icon={<FaEnvelope size={14} />}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <div className="mb-5">
                <span className="block text-xs text-sj-muted mb-2">Account Type</span>
                <div className="flex rounded-xl overflow-hidden border border-sj-line p-1 bg-sj-surface">
                  <button
                    type="button"
                    onClick={() => setAccountType("customer")}
                    className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                      accountType === "customer"
                        ? "bg-sj-brass text-black"
                        : "text-sj-muted hover:text-sj-ink"
                    }`}
                  >
                    Customer
                  </button>
                  <button
                    type="button"
                    onClick={() => setAccountType("vendor")}
                    className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                      accountType === "vendor"
                        ? "bg-sj-brass text-black"
                        : "text-sj-muted hover:text-sj-ink"
                    }`}
                  >
                    Vendor
                  </button>
                </div>
              </div>

              <div className="mb-2">
                <label
                  htmlFor="signup-password"
                  className="block text-xs text-sj-muted mb-2"
                >
                  Password
                </label>
                <div className="relative flex items-center bg-sj-surface border border-sj-line rounded-xl px-4 py-3 focus-within:border-sj-brass/40">
                  <FaLock size={14} className="text-sj-muted mr-3" />
                  <input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="flex-1 bg-transparent outline-none text-sj-ink placeholder:text-sj-muted/50 text-sm pr-8"
                  />
                  <PasswordToggle />
                </div>
              </div>

              <div className="flex gap-2 mb-6">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      passwordStrength > i ? "bg-sj-brass" : "bg-sj-line"
                    }`}
                  />
                ))}
              </div>

              <label className="flex items-start gap-3 mb-6 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-sj-line bg-sj-surface accent-sj-brass"
                />
                <span className="text-sm text-sj-muted group-hover:text-sj-ink transition-colors">
                  I agree to the{" "}
                  <Link to="/terms" className="text-sj-ink font-semibold hover:text-sj-brass">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-sj-ink font-semibold hover:text-sj-brass">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center disabled:opacity-60"
              >
                {isLoading ? <FaSpinner className="animate-spin" /> : "Create Account"}
              </button>
            </form>

            <p className="text-center mt-6 text-sm text-sj-muted">
              Already have an account?{" "}
              <button
                type="button"
                onClick={switchToLogin}
                className="text-sj-ink font-semibold hover:text-sj-brass transition-colors"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </main>

      <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 xl:px-12 py-6 text-xs text-sj-muted">
        <p>© 2024 ServiJoy. Built for the modern service economy.</p>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="hover:text-sj-ink transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-sj-ink transition-colors">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );

  /* ─── Mobile Signup ─── */
  const MobileSignup = () => (
    <div className="lg:hidden min-h-screen flex flex-col bg-sj-bg px-4 py-6">
      <header className="flex items-center justify-between mb-8">
        <Link to="/" className="text-lg font-semibold font-display text-sj-ink">
          ServiJoy
        </Link>
        <button
          type="button"
          onClick={switchToLogin}
          className="text-[10px] sj-tag text-sj-ink hover:text-sj-brass transition-colors"
        >
          Log In
        </button>
      </header>

      <div className="bg-sj-card border border-sj-line rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-semibold font-display text-sj-ink mb-1">Create Account</h2>
        <p className="text-sj-muted text-sm mb-6">
          Join the modern service economy today.
        </p>

        <AlertMessages />

        <form onSubmit={handleSubmit}>
          <InputField
            id="mobile-signup-name"
            label="Full Name"
            type="text"
            placeholder="Alex Rivera"
            icon={<FaUser size={14} />}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <InputField
            id="mobile-signup-email"
            label="Email Address"
            type="email"
            placeholder="alex@example.com"
            icon={<span className="text-sm font-mono">@</span>}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <InputField
            id="mobile-signup-password"
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            icon={<FaLock size={14} />}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            rightElement={<PasswordToggle />}
          />

          <div className="mb-6">
            <span className="block text-[10px] sj-tag text-sj-muted mb-3">
              I want to...
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setAccountType("customer")}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                  accountType === "customer"
                    ? "border-sj-brass bg-sj-brass/5"
                    : "border-transparent bg-sj-surface"
                }`}
              >
                <FiSearch
                  className={accountType === "customer" ? "text-sj-brass" : "text-sj-muted"}
                  size={20}
                />
                <span
                  className={`text-[10px] sj-tag ${
                    accountType === "customer" ? "text-sj-brass" : "text-sj-muted"
                  }`}
                >
                  Find Services
                </span>
              </button>
              <button
                type="button"
                onClick={() => setAccountType("vendor")}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                  accountType === "vendor"
                    ? "border-sj-brass bg-sj-brass/5"
                    : "border-transparent bg-sj-surface"
                }`}
              >
                <FiBriefcase
                  className={accountType === "vendor" ? "text-sj-brass" : "text-sj-muted"}
                  size={20}
                />
                <span
                  className={`text-[10px] sj-tag ${
                    accountType === "vendor" ? "text-sj-brass" : "text-sj-muted"
                  }`}
                >
                  Offer Services
                </span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center disabled:opacity-60"
          >
            {isLoading ? <FaSpinner className="animate-spin" /> : "Create Account"}
          </button>
        </form>

        <SocialDivider text="— Or Continue With —" />

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-3 bg-sj-surface border border-sj-line rounded-xl text-[10px] sj-tag text-sj-ink hover:border-sj-brass/30 transition-colors"
          >
            <FaGoogle />
            Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-3 bg-sj-surface border border-sj-line rounded-xl text-[10px] sj-tag text-sj-ink hover:border-sj-brass/30 transition-colors"
          >
            <FaGithub />
            GitHub
          </button>
        </div>

        <p className="text-center mt-6 text-[11px] text-sj-muted leading-relaxed">
          By signing up, you agree to our{" "}
          <Link to="/terms" className="underline hover:text-sj-ink">
            Terms
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="underline hover:text-sj-ink">
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      {/* Promo banner */}
      <div className="relative rounded-2xl overflow-hidden mb-8 min-h-[140px] flex items-center justify-center border border-sj-line">
        <div className="absolute inset-0 bg-sj-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,164,65,0.2)_0%,transparent_70%)]" />
        <div className="relative z-10 text-center px-6 py-8">
          <p className="text-lg font-semibold font-display text-sj-ink mb-1">Precision Service</p>
          <p className="text-[10px] sj-tag text-sj-brass">
            The next generation of joyful work.
          </p>
        </div>
      </div>

      <footer className="mt-auto text-center pb-4">
        <p className="text-lg font-semibold font-display text-sj-ink mb-2">ServiJoy</p>
        <p className="text-xs text-sj-muted mb-4">
          © 2024 ServiJoy. Built for the modern service economy.
        </p>
        <div className="flex items-center justify-center gap-6 text-[10px] sj-tag text-sj-muted">
          <Link to="/help" className="hover:text-sj-ink transition-colors">
            Support
          </Link>
          <Link to="/about" className="hover:text-sj-ink transition-colors">
            Careers
          </Link>
          <Link to="/become-a-vendor" className="hover:text-sj-ink transition-colors">
            Partners
          </Link>
        </div>
      </footer>
    </div>
  );

  if (isLogin) {
    return (
      <>
        <DesktopLogin />
        <MobileLogin />
      </>
    );
  }

  return (
    <>
      <DesktopSignup />
      <MobileSignup />
    </>
  );
};

export default AuthForm;