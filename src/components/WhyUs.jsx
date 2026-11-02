const points = [
  { title: 'Solid Craftsmanship', text: 'Sturdy frames and finishes chosen for long-lasting use.' },
  { title: 'Designs for Real Homes', text: 'From compact flats to large living rooms, our range fits your space.' },
  { title: 'Friendly Advice', text: 'Talk to our team about sizes, fabrics and layouts before you decide.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section container">
      <div className="section-head">
        <h2>Why Choose TONWOOD</h2>
      </div>
      <div className="why-grid">
        {points.map((p) => (
          <div key={p.title} className="why-item">
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
