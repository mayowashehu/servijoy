import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Footer = () => {
  const { user, login } = useAuth();
  const currentYear = new Date().getFullYear();

  const handleRoleChange = (role) => {
    login({ ...user, role });
  };

  // Same brass monogram mark used in the Navbar, kept in sync so the S
  // reads as one consistent brand icon site-wide.
  const LogoMark = ({ className = "h-8 w-8" }) => (
    <svg
      viewBox="0 0 48 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sjBrassGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3d38a" />
          <stop offset="55%" stopColor="#c9982f" />
          <stop offset="100%" stopColor="#8f6a1c" />
        </linearGradient>
      </defs>

      <circle cx="24" cy="24" r="23" fill="url(#sjBrassGradFooter)" />
      <circle
        cx="24"
        cy="24"
        r="23"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.15"
        strokeWidth="1"
      />

      <text
        x="24"
        y="33"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="26"
        fill="#171310"
      >
        S
      </text>

      <path
        d="M38 10.5 L39.4 13.6 L42.5 15 L39.4 16.4 L38 19.5 L36.6 16.4 L33.5 15 L36.6 13.6 Z"
        fill="#171310"
        fillOpacity="0.85"
      />
    </svg>
  );

  return (
    <footer className="bg-sj-bg border-t border-sj-line text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-sj-line">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-4">
              <LogoMark className="h-8 w-8 shadow-lg" />
              <span className="ml-2 font-bold text-lg">
                Servi<span className="text-sj-brass">Joy</span>
              </span>
            </div>
            <p className="text-sj-muted text-sm">
              &copy; {currentYear} ServiJoy. Modern services, simplified.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="sj-tag text-[10px] text-sj-muted mb-4">PLATFORM</h4>
            <ul className="space-y-2">
              {[
                { name: "How it Works", path: "/how-it-works" },
                { name: "Services", path: "/services" },
                { name: "Become a Vendor", path: "/become-a-vendor" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/80 hover:text-sj-brass text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="sj-tag text-[10px] text-sj-muted mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {[
                { name: "Careers", path: "/careers" },
                { name: "Support", path: "/help" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/80 hover:text-sj-brass text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="sj-tag text-[10px] text-sj-muted mb-4">LEGAL</h4>
            <ul className="space-y-2">
              {[
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/80 hover:text-sj-brass text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Development Tools */}
        <div className="my-6 p-4 bg-sj-card border border-sj-line rounded-xl">
          <h4 className="sj-tag text-[9px] text-sj-muted mb-3">DEVELOPMENT TESTING TOOLS</h4>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "User", role: "user" },
              { name: "Vendor", role: "vendor" },
              { name: "Admin", role: "admin", path: "/admin/dashboard" },
            ].map((option, i) => (
              <Link
                key={i}
                to={option.path || "/dashboard"}
                onClick={() => handleRoleChange(option.role)}
                className="text-xs bg-sj-bg border border-sj-line px-3 py-1 rounded-full text-sj-muted hover:text-white transition-colors"
              >
                Test {option.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;