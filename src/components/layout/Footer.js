import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.css";
import logoWhiteImage from "./assets/logo-white.png";

const contacts = [
  { icon: "location-dot", info: "Univerisy of Limpopo @MBG" },
  { icon: "phone", info: "07239483929" },
  { icon: "envelope", info: "mothibi@littlelemon.com" },
];

const socials = [
  { icon: "facebook", name: "facebook" },
  { icon: "twitter", name: "twitter" },
  { icon: "instagram", name: "instagram" },
  { icon: "youtube", name: "youtube" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Reservations", path: "/bookings" },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <div>
          WEBSITE LOGO
          <p>(CANT FIND THE PICTURE USED IN THE DESIGN)</p>
        </div>

        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
          <ul>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
            {contacts.map((contact, index) => (
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
              </p>
            ))}
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Connect with us</h4>
          {socials.map((social, index) => (
            <a
              key={index}
              href={`https://www.${social.name}.com`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", social.name]} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
