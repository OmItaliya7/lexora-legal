import facebookIcon from "../../assets/social/facebook.svg";
import instagramIcon from "../../assets/social/instagram.svg";
import twitterIcon from "../../assets/social/twitter.svg";
import linkedinIcon from "../../assets/social/linkedin.svg";

import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiCheckSquare,
} from "react-icons/fi";



/* SOCIAL LINKS */
export const socialIcons = [
  {
    image: facebookIcon,
    link: "https://facebook.com",
    alt: "facebook",
  },
  {
    image: instagramIcon,
    link: "https://instagram.com",
    alt: "instagram",
  },
  {
    image: twitterIcon,
    link: "https://twitter.com",
    alt: "twitter",
  },
  {
    image: linkedinIcon,
    link: "https://linkedin.com",
    alt: "linkedin",
  },
];


/* FOOTER LINKS */
export const usefulLinks = [
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Our Team",
    path: "/ourteam",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
  {
    name: "Business Law",
    path: "/practicearea/business-law",
  },
  {
    name: "Family Law",
    path: "/practicearea/family-law",
  },
  {
    name: "Civil Law",
    path: "/practicearea/civil-litigation",
  },
  
];

export const officeInfo = [
  { icon: FiPhone, text: "+613-1701-2345" },
  { icon: FiMail, text: "email@gmail.com" },
  { icon: FiMapPin, text: "21 King Street 2100, Australia" },
  {
    icon: FiCheckSquare,
    text: "Mon to Fri 9.00 am to 6.00 pm",
  },
];