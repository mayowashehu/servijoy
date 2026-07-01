import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LogoSVG from "../assets/logo.svg";

const Footer = () => {
  const { user, login } = useAuth();
  const currentYear = new Date().getFullYear();

  const handleRoleChange = (role) => {
    login({ ...user, role });
  };

  return (
    <footer className="bg-elite-black border-t border-elite-border text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-elite-border">
          <div>
            <img src={LogoSVG} alt="ServiJoy" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-elite-muted text-sm">
              © {currentYear} ServiJoy. Built for the modern service economy.
            </p>
          </div>

          <div>
            <h4 className="text-elite-muted text-xs font-semibold tracking-widest uppercase mb-4">Platform</h4>
            <ul className="space-y-2">
              {[
                { name: "How it Works", path: "/how-it-works" },
                { name: "Services", path: "/services" },
                { name: "Privacy", path: "/privacy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/80 hover:text-elite-cyan text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-elite-muted text-xs font-semibold tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { name: "About", path: "/about" },
                { name: "Careers", path: "/about" },
                { name: "Become a Partner", path: "/become-a-vendor" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/80 hover:text-elite-cyan text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-elite-muted text-xs font-semibold tracking-widest uppercase mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
                { name: "Support", path: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/80 hover:text-elite-cyan text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-6 p-4 bg-elite-card border border-elite-border rounded-xl">
          <h4 className="text-xs font-medium text-elite-muted mb-2">Development Testing Tools</h4>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "User Dashboard", role: "user" },
              { name: "Vendor Dashboard", role: "vendor" },
              { name: "Admin Dashboard", role: "admin", path: "/admin/dashboard" },
            ].map((option, i) => (
              <Link
                key={i}
                to={option.path || "/dashboard"}
                onClick={() => handleRoleChange(option.role)}
                className="text-xs bg-elite-black border border-elite-border px-3 py-1 rounded-full text-elite-muted hover:text-white transition-colors"
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
