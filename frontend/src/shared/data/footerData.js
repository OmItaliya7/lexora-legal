import facebookIcon from "../../assets/icons/social/facebook.svg";
import instagramIcon from "../../assets/icons/social/instagram.svg";
import twitterIcon from "../../assets/icons/social/twitter.svg";
import linkedinIcon from "../../assets/icons/social/linkedin.svg";
import phone from "../../assets/icons/footer/phone_f.svg";
import mail from "../../assets/icons/footer/email_f.svg";
import location from "../../assets/icons/footer/location_f.svg";
import clock from "../../assets/icons/footer/time_f.svg";

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
  { icon: phone, text: "+613-1701-2345" },
  { icon: mail, text: "email@gmail.com" },
  { icon: location, text: "21 King Street 2100, Australia" },
  { icon: clock, text: "Mon to Fri\n9.00 am to 6.00 pm" },
];