import facebookIcon from "@/assets/icons/social/facebook.svg";
import instagramIcon from "@/assets/icons/social/instagram.svg";
import twitterIcon from "@/assets/icons/social/twitter.svg";
import linkedinIcon from "@/assets/icons/social/linkedin.svg";
import phone from "@/assets/icons/footer/phone_f.svg";
import mail from "@/assets/icons/footer/email_f.svg";
import location from "@/assets/icons/footer/location_f.svg";
import clock from "@/assets/icons/footer/time_f.svg";

/* SOCIAL LINKS */
export const socialIcons = [
  {
    id: "facebook",
    image: facebookIcon,
    link: "https://www.facebook.com/people/Enthusia-Softech/61555192523657/",
    alt: "Facebook",
  },
  {
    id: "instagram",
    image: instagramIcon,
    link: "https://www.instagram.com/enthusia_softech/",
    alt: "Instagram",
  },
  {
    id: "twitter",
    image: twitterIcon,
    link: "https://enthusiasoftech.com/",
    alt: "Twitter",
  },
  {
    id: "linkedin",
    image: linkedinIcon,
    link: "https://www.linkedin.com/company/enthusia-softech/",
    alt: "LinkedIn",
  },
];


/* FOOTER LINKS */
export const usefulLinks = [
  {
    id: "about",
    name: "About Us",
    path: "/about-us",
  },
  {
    id: "team",
    name: "Our Team",
    path: "/ourteam",
  },
  {
    id: "contact",
    name: "Contact Us",
    path: "/contact",
  },
  {
    id: "business-law",
    name: "Business Law",
    path: "/practicearea/business-law",
  },
  {
    id: "family-law",
    name: "Family Law",
    path: "/practicearea/family-law",
  },
  {
    id: "civil-law",
    name: "Civil Law",
    path: "/practicearea/civil-litigation",
  },
  
];

export const officeInfo = [
  { id: "phone", icon: phone, text: "+1 (212) 555-0123" },
  { id: "mail", icon: mail, text: "contact@lexoralegal.com" },
  { id: "location", icon: location, text: "21 King Street 2100, Australia" },
  { id: "clock", icon: clock, text: "Mon to Fri\n9.00 am to 6.00 pm" },
];