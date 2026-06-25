import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/icons/logo.svg";

import { socialIcons, usefulLinks, officeInfo } from "../data/footerData";

import mail from "../../assets/icons/footer/email_f.svg";
import ArrowIcon from "../../shared/icons/ArrowIcon";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="container-main pt-12">
      <div className="container-content">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-x-14 md:border-b border-light/25 pb-6">

          {/* Column 1 */}
          <div className="space-y-6">
            <img src={logo} alt="Law Firm Logo" loading="lazy" className="object-contain" />

            {/* Curly braces FIX */}
            <p className="mt-3 text-sm max-w-67.5 text-gray">
              <span className="font-extralight text-[24px] pr-1 ">{`{`}</span>
                We’re proud that our law firm offers top-notch legal service for a nationwide affordable price.
              <span className="font-extralight text-[24px] leading-none align-bottom pl-1">{`}`}</span>
            </p>

            {/* Social Icons FIX */}
            <div className="flex gap-4">
              {socialIcons.map((icon, i) => (
                <a key={i} aria-label={`Visit our ${icon.alt} page`} href={icon.link} target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70">
                  <img src={icon.image} alt={icon.alt} aria-hidden="true" className="size-6 object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6 sm:pt-5">
            <h3 className="text-light text-base font-semibold">
              USEFUL LINKS
            </h3>

            <ul className="space-y-4 md:space-y-6">
              {usefulLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-sm font-medium text-gray hover:text-white transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-6 sm:pt-5">
            <h3 className="font-semibold text-base text-light">
              OFFICE INFO
            </h3>

            <ul className="space-y-4 md:space-y-6">
              {officeInfo.map((info, i) => (
                <li key={i} className="flex gap-4">
                  <img src={info.icon} aria-hidden="true" className="size-5 lg:size-6 shrink-0" />
                  <span className="text-sm text-gray font-medium whitespace-pre-line">
                    {info.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-6 sm:pt-5 max-w-70">
            <h3 className="text-light font-semibold text-base">
              SUBSCRIBE NOW
            </h3>

            <p className="text-sm text-gray">
              We’re proud that our law firm offers top-notch.
            </p>

            
            <div className="flex py-4 items-center justify-between border-b border-light/40">
              <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
              <input id="newsletter-email" type="email" placeholder="Your Email*" autoComplete="email" className="w-full bg-transparent outline-none text-sm lg:text-base font-medium text-gray placeholder-gray"/>
              <img src={mail} alt="" aria-hidden="true" className="size-4 xl:size-6"/>
            </div>
            
            <button type="button" className="mt-6 inline-flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 bg-secondary text-sm lg:text-base text-primary px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-full font-semibold hover:opacity-90 transition">
              Subscribe Now <ArrowIcon className="text-primary" />
            </button>
          
          </div>

        </div>

        {/* Divider FIX */}
        <p className="py-5 text-center text-gray/80 text-sm">
          © {new Date().getFullYear()} Lexora Legal. All rights reserved.
        </p>
        </div>
    </footer>
  );
};

export default React.memo(Footer);