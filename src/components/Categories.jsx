import { categories } from '../data/products.js';

export default function Categories({ onSelect }) {
  const pick = (slug) => {
    onSelect(slug);
    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section container">
      <div className="section-head">
        <h2>Shop by Category</h2>
        <p>Find the right piece for every room.</p>
      </div>
      <div className="category-grid">
        {categories.map((c) => (
          <button key={c.slug} className="category-tile" onClick={() => pick(c.slug)}>
            <img src={c.cover} alt={c.name} loading="lazy" />
            <div className="category-label">{c.name}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
