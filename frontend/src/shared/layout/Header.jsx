import { NavLink, Link, useNavigate } from "react-router-dom";
import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import logo from "@/assets/icons/logo.svg";
import ArrowIcon from "@/shared/icons/ArrowIcon";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about-us" },
  { name: "OUR TEAM", path: "/ourteam" },
  { name: "PRACTICE AREAS", path: "/practicearea" },
  { name: "CONTACTS", path: "/contact" },
];

const Header = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "null");

  // const username = user?.email?.split("@")[0]?.replace(/^\w/, c => c.toUpperCase());
  const username = user?.username || user?.email?.split("@")[0] || "User";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/");
  }

  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };

  }, [open]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const { exp } = jwtDecode(token);
      if (exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.error("Session expired. Please login again.");
        navigate("/login");
      }
    } catch{
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    }

  }, [navigate]);

  const navClass = ({ isActive }) => `transition-colors duration-300 ${isActive ? "text-light font-semibold" : "text-light/70 hover:text-light"}`

  return (
    <>
      <header className="flex items-center justify-between py-4">

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Law Firm Logo" loading="eager" fetchPriority="high" />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main Navigation" className="hidden lg:flex gap-5 xl:gap-10">
          {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={navClass}>
                {link.name}
              </NavLink>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex gap-2 items-center">
          {user ? (
            <>
              <p className="text-light text-sm">
                Welcome, {username}
              </p>

              <button onClick={handleLogout} className="px-6 py-2 border border-secondary rounded-full text-secondary">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="p-4 text-gray hover:text-light">
                Login
              </Link>

              <Link to="/signup" className="flex items-center px-8 py-2 xl:px-10 xl:py-4 gap-4 border border-secondary rounded-full font-semibold text-base text-secondary">
                Signup <ArrowIcon className="text-secondary" />
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button ref={toggleRef} onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" className="lg:hidden text-3xl text-white">
          {open ? <FiX /> : <FiMenu />}
        </button>

      </header>

      {/* MOBILE MENU */}
      <div id="mobile-menu" className={`fixed top-15 left-0 right-0 overflow-y-auto z-50 lg:hidden bg-primary backdrop-blur-xl transition-[opacity, transform] duration-300 ${open? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>

        {/* MOBILE NAV LINKS */}
        <nav aria-label="Mobile Navigation" className="flex flex-col pt-6 px-6 gap-2">

          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className={({ isActive }) =>`text-lg font-semibold py-4 transition-colors duration-300 ${isActive? "text-light" : "text-light/70 hover:text-light"}`}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* MOBILE AUTH BUTTONS */}
        <div className="flex flex-col gap-4 px-6">
          {user ? (
            <>
              <div className="text-center text-light py-4">
                Welcome {username}
              </div>
              <button type="button" onClick={() => { handleLogout(); setOpen(false); }} className="flex justify-center py-4 rounded-full bg-secondary text-primary font-semibold">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)} className="flex justify-center py-4 rounded-full text-light font-medium">
                Login
              </Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="flex justify-center py-4 rounded-full bg-secondary text-primary font-semibold">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(Header);