import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef(null);
  const userMenuRef = useRef(null);
  const isHomePage = location.pathname === "/";

  const links = [
    { name: "How It Works", path: "/how-it-works" },
    { name: "Services", path: "/services" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setUserMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const navBg = isHomePage
    ? scrolled
      ? "bg-sj-bg/90 backdrop-blur-xl border-b border-sj-line py-2"
      : "bg-transparent py-4"
    : scrolled
      ? "bg-sj-bg/90 backdrop-blur-xl border-b border-sj-line py-2"
      : "bg-sj-bg py-4";

  // Creative "S" monogram mark for ServiJoy — a brass-gradient badge with a
  // hand-drawn swash "S" and a small spark accent to nod at the "Joy" half
  // of the name. Pure SVG, no external asset needed.
  const LogoMark = ({ className = "h-10 w-10" }) => (
    <svg
      viewBox="0 0 48 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sjBrassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3d38a" />
          <stop offset="55%" stopColor="#c9982f" />
          <stop offset="100%" stopColor="#8f6a1c" />
        </linearGradient>
      </defs>

      <circle cx="24" cy="24" r="23" fill="url(#sjBrassGrad)" />
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

      {/* joy spark accent */}
      <path
        d="M38 10.5 L39.4 13.6 L42.5 15 L39.4 16.4 L38 19.5 L36.6 16.4 L33.5 15 L36.6 13.6 Z"
        fill="#171310"
        fillOpacity="0.85"
      />
    </svg>
  );

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center group space-x-2.5">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LogoMark className="h-10 w-10 drop-shadow-sm" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden sm:inline font-display font-semibold text-xl text-white tracking-tight"
          >
            Servi<span className="text-sj-brass">Joy</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8 items-center">
            {links.map((link, index) => (
              <li key={index} className="relative" ref={link.hasSubmenu ? servicesRef : null}>
                {link.hasSubmenu ? (
                  <div className="relative">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex items-center py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive(link.path) ? "text-sj-brass" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-2 bg-sj-card rounded-xl shadow-xl border border-sj-line min-w-48"
                        >
                          {link.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className={`block px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                                isActive(subItem.path)
                                  ? "bg-sj-brass/10 text-sj-brass"
                                  : "text-white/70 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive(link.path) ? "text-sj-brass" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4" ref={userMenuRef}>
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-1 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white/90 font-medium transition-colors duration-200 text-sm"
              >
                <User className="w-4 h-4 text-sj-brass" />
                <span>Account</span>
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${userMenuOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 p-2 bg-sj-card rounded-xl shadow-xl border border-sj-line min-w-48"
                  >
                    <Link
                      to="/login-signup"
                      className="flex items-center space-x-2 px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 text-white/70 hover:bg-white/5 hover:text-white"
                    >
                      <LogIn className="w-4 h-4 text-sj-muted" />
                      <span>Log In</span>
                    </Link>
                    <Link
                      to="/login-signup?mode=signup"
                      className="flex items-center space-x-2 px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 text-white/70 hover:bg-white/5 hover:text-white"
                    >
                      <User className="w-4 h-4 text-sj-muted" />
                      <span>Sign Up</span>
                    </Link>
                    <hr className="my-1 border-sj-line" />
                    <Link
                      to="/help"
                      className="flex items-center space-x-2 px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 text-white/70 hover:bg-white/5 hover:text-white"
                    >
                      <span>Help Center</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/become-a-vendor"
              className="px-5 py-2.5 rounded-full bg-sj-brass text-sj-bg font-semibold text-sm hover:brightness-110 transition-all duration-300"
            >
              Become a Vendor
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-50 p-2 rounded-full bg-white/10 hover:bg-white/15 transition-colors duration-200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-sj-surface border-l border-sj-line shadow-2xl z-40 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-center gap-2 mb-8 mt-6">
                <LogoMark className="h-9 w-9" />
                <h2 className="font-display font-semibold text-2xl text-white">
                  Servi<span className="text-sj-brass">Joy</span>
                </h2>
              </div>

              <ul className="flex flex-col space-y-1 mb-8">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.hasSubmenu ? (
                      <div className="mb-2">
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className={`flex items-center justify-between w-full py-2.5 px-4 rounded-lg text-base font-medium transition-colors duration-200 ${
                            isActive(link.path)
                              ? "bg-sj-brass/10 text-sj-brass"
                              : "text-white/80 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden ml-4 mt-1"
                            >
                              {link.submenu.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className={`block py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                    isActive(subItem.path)
                                      ? "bg-sj-brass/10 text-sj-brass"
                                      : "text-white/60 hover:bg-white/5 hover:text-white"
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block py-2.5 px-4 rounded-lg text-base font-medium transition-colors duration-200 ${
                          isActive(link.path)
                            ? "bg-sj-brass/10 text-sj-brass"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-auto mb-8 space-y-4">
                <div className="flex flex-col gap-2 p-4 rounded-lg bg-sj-card border border-sj-line">
                  <Link
                    to="/login-signup"
                    className="py-2.5 px-5 w-full text-center rounded-lg bg-white/10 text-white font-medium hover:bg-white/15 transition-all duration-200 flex items-center justify-center"
                  >
                    <LogIn className="w-4 h-4 mr-2 text-sj-brass" />
                    <span>Log In</span>
                  </Link>
                  <Link
                    to="/login-signup?mode=signup"
                    className="py-2.5 px-5 w-full text-center rounded-lg bg-white/10 text-white font-medium hover:bg-white/15 transition-all duration-200 flex items-center justify-center"
                  >
                    <User className="w-4 h-4 mr-2 text-sj-brass" />
                    <span>Sign Up</span>
                  </Link>
                </div>
                <Link
                  to="/become-a-vendor"
                  className="block py-3 w-full text-center rounded-full bg-sj-brass text-sj-bg font-semibold hover:brightness-110 transition-all duration-300"
                >
                  Become a Vendor
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;