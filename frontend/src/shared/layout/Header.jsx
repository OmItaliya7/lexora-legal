// import { NavLink, Link } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import { useState, useEffect } from "react";
// import logo from "../../assets/icons/logo.svg";
// import ArrowIcon from "../../shared/icons/ArrowIcon";

// const navLinks = [
//   { name: "HOME", path: "/" },
//   { name: "ABOUT US", path: "/about" },
//   { name: "OUR TEAM", path: "/ourteam" },
//   { name: "PRACTICE AREAS", path: "/practicearea" },
//   { name: "CONTACTS", path: "/contact" },
// ];

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "unset";

//     return () => {
//       document.body.style.overflow = "unset";
//     };

//   }, [open]);

//   const navClass = ({ isActive }) => `transition-colors duration-300 ${isActive ? "text-[#FEFCE1] font-semibold" : "text-[#FEFCE1]/70 hover:text-[#FEFCE1]"}`

//   return (
//     <>
//       <header className="flex items-center justify-between py-5 lg:py-4">

//         {/* Logo */}
//         <Link to="/">
//           <img src={logo} alt="Logo" />
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex gap-6 xl:gap-10">
//           {navLinks.map((link) => (
//             <NavLink key={link.name} to={link.path} className={navClass}>
//               {link.name}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Desktop Right */}
//         <div className="hidden lg:flex gap-1">
//             <Link to="/login" className="p-4 text-[#D8D6BF] hover:text-[#FEFCE1] transition-colors duration-300">
//               Login
//             </Link>

//             <Link to="/signup" className="flex items-center px-8 py-2 xl:px-10 xl:py-4 gap-4 border border-[#FC8608] rounded-full font-semibold text-base text-[#FC8608]">
//               Signup 
//               <ArrowIcon className="text-[#FC8608]" />
//             </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" className="lg:hidden text-[32px] text-white">
//           {open ? <FiX /> : <FiMenu />}
//         </button>

//       </header>

//       {/* MOBILE MENU */}
//       <div id="mobile-menu" className={`fixed inset-0 top-19 z-50 lg:hidden bg-[#0E100F] backdrop-blur-xl transition-all duration-500 ${open? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>

//         {/* MOBILE NAV LINKS */}
//         <nav className="flex flex-col px-6 pt-6 gap-2">

//           {navLinks.map((item) => (
//             <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className={({ isActive }) =>`text-lg font-semibold py-4 transition-colors duration-300 ${isActive? "text-[#FEFCE1]" : "text-[#FEFCE1]/70 hover:text-[#FEFCE1]"}`}>
//               {item.name}
//             </NavLink>
//           ))}
//         </nav>

//         {/* MOBILE AUTH BUTTONS */}
//         <div className="flex flex-col gap-4 px-6">

//           {/* LOGIN */}
//           <Link to="/login" onClick={() => setOpen(false)} className="flex justify-center py-4 rounded-full text-[#FEFCE1] font-medium">
//             Login
//           </Link>

//           {/* SIGNUP */}
//           <Link to="/signup" onClick={() => setOpen(false)} className="flex justify-center py-4 rounded-full bg-[#FC8608] text-[#0E100F] font-semibold">
//             Signup <ArrowIcon className="text-[#FC8608]" />
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;











import { NavLink, Link, useNavigate } from "react-router-dom";
import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import logo from "../../assets/icons/logo.svg";
import ArrowIcon from "../../shared/icons/ArrowIcon";
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

  let user = null;
  try{
    user = JSON.parse(localStorage.getItem("user"))
  }
  catch{
    user = null;
  }

  const username = user?.email?.split("@")[0]?.replace(/^\w/, c => c.toUpperCase());

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout successfully");
    navigate("/");
  }

  const [open, setOpen] = useState(false);

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

  const navClass = ({ isActive }) => `transition-colors duration-300 ${isActive ? "text-[#FEFCE1] font-semibold" : "text-[#FEFCE1]/70 hover:text-[#FEFCE1]"}`

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
              <p className="text-[#FEFCE1] text-sm">
                Welcome, {username}
              </p>

              <button onClick={handleLogout} className="px-6 py-2 border border-[#FC8608] rounded-full text-[#FC8608]">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="p-4 text-[#D8D6BF] hover:text-[#FEFCE1]">
                Login
              </Link>

              <Link to="/signup" className="flex items-center px-8 py-2 xl:px-10 xl:py-4 gap-4 border border-[#FC8608] rounded-full font-semibold text-base text-[#FC8608]">
                Signup <ArrowIcon className="text-[#FC8608]" />
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" className="lg:hidden text-3xl text-white">
          {open ? <FiX /> : <FiMenu />}
        </button>

      </header>

      {/* MOBILE MENU */}
      <div id="mobile-menu" className={`fixed top-15 left-0 right-0 overflow-y-auto z-50 lg:hidden bg-[#0E100F] backdrop-blur-xl transition-[opacity, transform] duration-300 ${open? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>

        {/* MOBILE NAV LINKS */}
        <nav aria-label="Mobile Navigation" className="flex flex-col pt-6 px-6 gap-2">

          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className={({ isActive }) =>`text-lg font-semibold py-4 transition-colors duration-300 ${isActive? "text-[#FEFCE1]" : "text-[#FEFCE1]/70 hover:text-[#FEFCE1]"}`}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* MOBILE AUTH BUTTONS */}
        <div className="flex flex-col gap-4 px-6">
          {user ? (
            <>
              <div className="text-center text-[#FEFCE1] py-4">
                Welcome {username}
              </div>
              <button type="button" onClick={() => { handleLogout(); setOpen(false); }} className="flex justify-center py-4 rounded-full bg-[#FC8608] text-[#0E100F] font-semibold">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)} className="flex justify-center py-4 rounded-full text-[#FEFCE1] font-medium">
                Login
              </Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="flex justify-center py-4 rounded-full bg-[#FC8608] text-[#0E100F] font-semibold">
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