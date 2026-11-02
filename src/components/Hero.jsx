export default function Hero() {
  return (
    <section id="top" className="hero" style={{ backgroundImage: 'url(/images/2.jpeg)' }}>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow">Handcrafted for Every Home</p>
        <h1>Furniture Made to Last</h1>
        <p className="hero-sub">
          Sofas, beds, dining sets, office furniture and modular kitchens, designed for comfort and built to stay.
        </p>
        <div className="hero-actions">
          <a href="#collections" className="btn btn-primary">Explore Collection</a>
          <a href="#enquiry" className="btn btn-outline">Book a Showroom Visit</a>
        </div>
      </div>
    </section>
  );
}
