import { useState } from 'react';
import { CONTACT } from '../data/products.js';

const empty = { name: '', email: '', phone: '', message: '' };

export default function Enquiry() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect this to your email service, backend or form provider.
    console.log('Enquiry:', form);
    setSent(true);
    setForm(empty);
  };

  return (
    <section id="enquiry" className="section section-dark">
      <div className="container enquiry-grid">
        <div>
          <h2>Visit Our Showroom or Get in Touch</h2>
          <p className="muted-light">Questions about a piece, a custom order or a visit? Send us a message and our team will reply.</p>
          <div className="contact-lines">
            <p><strong>Address:</strong> {CONTACT.address}</p>
            <p><strong>Phone:</strong> {CONTACT.phone}</p>
            <p><strong>Email:</strong> {CONTACT.email}</p>
          </div>
          <a className="btn btn-primary" href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
        </div>

        {sent ? (
          <div className="success">Thank you! Our team will get back to you shortly.</div>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <label>Name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>Phone
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
            </label>
            <label>Message
              <textarea name="message" rows="4" value={form.message} onChange={handleChange} required />
            </label>
            <button type="submit" className="btn btn-primary">Send Enquiry</button>
          </form>
        )}
      </div>
    </section>
  );
}
