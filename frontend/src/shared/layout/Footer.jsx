// import { Link } from "react-router-dom";
// import logo from "../../assets/icons/logo.svg";

// import { socialIcons, usefulLinks, officeInfo } from "../data/footerData";

// import { FiMail } from "react-icons/fi";
// import ArrowIcon from "../../shared/icons/ArrowIcon";

// const Footer = () => {
//   return (
//     <footer className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-33.75 2xl:px-0 pt-12">
//         {/* GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-x-16 md:border-b border-[#FEFCE1]/25 pb-6">

//           {/* Column 1 */}
//           <div className="space-y-6">
//             <img src={logo} alt="logo" className="object-contain" />

//             {/* Curly braces FIX */}
//             <p className="mt-3 text-sm max-w-67.5 text-[#D8D6BF]">
//               <span className="font-extralight text-[24px] pr-1 ">{`{`}</span>
//               We’re proud that our law firm offers top-notch legal service for a nationwide affordable price.
//               <span className="font-extralight text-[24px] leading-none align-bottom pl-1">{`}`}</span>
//             </p>

//             {/* Social Icons FIX */}
//             <div className="flex gap-4">
//               {socialIcons.map((icon, i) => (
//                 <Link key={i} to={icon.link} target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70">
//                   <img src={icon.icon} alt="social" className="size-6 object-contain" />
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div className="space-y-6 sm:pt-5">
//             <h3 className="text-[#FEFCE1] text-base font-semibold">
//               USEFUL LINKS
//             </h3>

//             <ul className="space-y-4 md:space-y-6">
//               {usefulLinks.map((item, i) => (
//                 <li key={i}>
//                   <Link to={item.path} className="text-sm font-medium text-[#D8D6BF] hover:text-white transition-colors duration-300">
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div className="space-y-6 sm:pt-5">
//             <h3 className="font-semibold text-base text-[#FEFCE1]">
//               OFFICE INFO
//             </h3>

//             <ul className="space-y-4 md:space-y-6">
//               {officeInfo.map((info, i) => (
//                 <li key={i} className="flex gap-4">
//                   <info.icon className="size-6 shrink-0 text-[#FEFCE1]" />
//                   <span className="text-sm text-[#D8D6BF] font-medium">
//                     {info.text}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4 */}
//           <div className="space-y-6 sm:pt-5">
//             <h3 className="text-[#FEFCE1] font-semibold text-base">
//               SUBCRIBE NOW
//             </h3>

//             <p className="text-sm text-[#D8D6BF] max-w-70">
//               We’re proud that our law firm offers top-notch.
//             </p>

            
//             <div className="flex py-4 items-center justify-between border-b border-[#FEFCE140]">
//               <input type="email" placeholder="Your Email*" className="bg-transparent outline-none text-sm lg:text-base font-medium text-[#D8D6BF] placeholder-[#D8D6BF]"/>
//               <FiMail className="text-[#FEFCE1] size-4 xl:size-6"/>
//             </div>
            
//             <button className="mt-6 flex items-center gap-2 sm:gap-3 lg:gap-4 bg-[#FC8608] text-sm lg:text-base text-[#0E100F] px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-full font-semibold hover:opacity-90 transition">
//               Subscribe Now <ArrowIcon className="text-[#0E100F]" />
//             </button>
          
//           </div>

//         </div>

//         {/* Divider FIX */}
//         <p className="py-5 text-center text-[#D8D6BF]/80 text-sm">
//           © 2023–2024 Law.com
//         </p>
//     </footer>
//   );
// };

// export default Footer;





import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/icons/logo.svg";

import { socialIcons, usefulLinks, officeInfo } from "../data/footerData";

import { FiMail } from "react-icons/fi";
import ArrowIcon from "../../shared/icons/ArrowIcon";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="max-w-[1440px] mx-auto px-5 pt-12">
      <div className="max-w-[1200px] mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-x-14 md:border-b border-[#FEFCE1]/25 pb-6">

          {/* Column 1 */}
          <div className="space-y-6">
            <img src={logo} alt="Law Firm Logo" loading="lazy" className="object-contain" />

            {/* Curly braces FIX */}
            <p className="mt-3 text-sm max-w-67.5 text-[#D8D6BF]">
              <span className="font-extralight text-[24px] pr-1 ">{`{`}</span>
                We’re proud that our law firm offers top-notch legal service for a nationwide affordable price.
              <span className="font-extralight text-[24px] leading-none align-bottom pl-1">{`}`}</span>
            </p>

            {/* Social Icons FIX */}
            <div className="flex gap-4">
              {socialIcons.map((icon, i) => (
                <a key={i} aria-label={`Visit our ${icon.name} page`} href={icon.link} target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70">
                  <img src={icon.image} alt={icon.alt} aria-hidden="true" className="size-6 object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6 sm:pt-5">
            <h3 className="text-[#FEFCE1] text-base font-semibold">
              USEFUL LINKS
            </h3>

            <ul className="space-y-4 md:space-y-6">
              {usefulLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-sm font-medium text-[#D8D6BF] hover:text-white transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-6 sm:pt-5">
            <h3 className="font-semibold text-base text-[#FEFCE1]">
              OFFICE INFO
            </h3>

            <ul className="space-y-4 md:space-y-6">
              {officeInfo.map((info, i) => (
                <li key={i} className="flex gap-4">
                  <info.icon className="size-5 lg:size-6 shrink-0 text-[#FEFCE1]" />
                  <span className="text-sm text-[#D8D6BF] font-medium">
                    {info.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-6 sm:pt-5">
            <h3 className="text-[#FEFCE1] font-semibold text-base">
              SUBSCRIBE NOW
            </h3>

            <p className="text-sm text-[#D8D6BF] max-w-70">
              We’re proud that our law firm offers top-notch.
            </p>

            
            <div className="flex py-4 items-center justify-between border-b border-[#FEFCE140]">
              <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
              <input id="newsletter-email" type="email" placeholder="Your Email*" autoComplete="email" className="w-full bg-transparent outline-none text-sm lg:text-base font-medium text-[#D8D6BF] placeholder-[#D8D6BF]"/>
              <FiMail aria-hidden="true" className="text-[#FEFCE1] size-4 xl:size-6"/>
            </div>
            
            <button type="submit" className="mt-6 inline-flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 bg-[#FC8608] text-sm lg:text-base text-[#0E100F] px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-full font-semibold hover:opacity-90 transition">
              Subscribe Now <ArrowIcon className="text-[#0E100F]" />
            </button>
          
          </div>

        </div>

        {/* Divider FIX */}
        <p className="py-5 text-center text-[#D8D6BF]/80 text-sm">
          © {new Date().getFullYear()} Law Firm. All rights reserved.
        </p>
        </div>
    </footer>
  );
};

export default React.memo(Footer);