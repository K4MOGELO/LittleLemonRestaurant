import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container grid">
        {/* <img
          className="site-footer-logo"
          src={
          alt="Little Lemon"
        /> */}
        <h1>LOGO</h1>
        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
          <ul>
            <li>
              <a>Home </a>
              <a>About</a>
              <a>Menu</a>
            </li>
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
            <p>678 Pisa Ave, Chicago, IL 60611'</p>
            <p>info: (312) 593-2744'</p>
            <p>info: customer@littlelemon.com'</p>
          </address>
        </div>
      </div>
    </footer>
  );
}
