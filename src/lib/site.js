import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa6";

/**
 * Single source of truth for site-wide contact + social data.
 * Footer and the mobile menu both read from here so they never drift.
 */

export const CONTACT = {
  company: "QuantorX",
  website: "https://www.quantorx.com/",
  websiteDisplay: "quantorx.com",
  email: "innovation@quantorx.com",
  sendEmail: "maldemery@quantorx.com",
  USPhoneDisplay: "+18134471388",
  KSAPhoneDisplay: "+966537507578",
  EGPPhoneDisplay: "+201119974983",
  phoneHref: "tel:+201000000000",
  location: "Cairo, Egypt",
};

/**
 * Social profiles. Only entries with a non-empty `href` are rendered, so there
 * are never any placeholder / dead links. Add a real URL to switch one on.
 */
export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/quantorx/", Icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/quantorx.ai/", Icon: FaInstagram },
  { label: "YouTube", href: "https://www.youtube.com/@QuantorxAI", Icon: FaYoutube },
];

/** Convenience: the live socials (those with a real URL). */
export const activeSocials = () => SOCIALS.filter((s) => s.href);
