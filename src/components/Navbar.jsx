import { useState } from 'react';
import { CONTACT } from '../data/products.js';

const links = [
  { href: '#collections', label: 'Collections' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#enquiry', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#top" className="logo" onClick={close}>TONWOOD</a>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a className="btn btn-primary nav-cta" href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" onClick={close}>
            WhatsApp Us
          </a>
        </nav>
      </div>
    </header>
  );
}
