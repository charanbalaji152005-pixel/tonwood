import { CONTACT } from '../data/products.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h3 className="logo">TONWOOD</h3>
          <p>Furniture that blends comfort, craft and everyday practicality.</p>
        </div>
        <div className="footer-links">
          <a href="#collections">Collections</a>
          <a href="#why-us">Why Us</a>
          <a href="#enquiry">Contact</a>
        </div>
        <p className="footer-contact">{CONTACT.phone} · {CONTACT.email}</p>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} TONWOOD Furniture. All rights reserved.</div>
    </footer>
  );
}
