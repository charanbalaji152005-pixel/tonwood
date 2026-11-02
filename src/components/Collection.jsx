import { CONTACT, categories, products, getCategory } from '../data/products.js';

export default function Collection({ category, setCategory }) {
  const list = category === 'all' ? products : products.filter((p) => p.category === category);
  const title = category === 'all' ? 'Our Collection' : getCategory(category).name;

  return (
    <section id="collections" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <h2>{title}</h2>
          <p>{list.length} {list.length === 1 ? 'piece' : 'pieces'} available to enquire about</p>
        </div>

        <div className="filters">
          <button className={category === 'all' ? 'chip active' : 'chip'} onClick={() => setCategory('all')}>All</button>
          {categories.map((c) => (
            <button key={c.slug} className={category === c.slug ? 'chip active' : 'chip'} onClick={() => setCategory(c.slug)}>
              {c.name}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {list.map((p) => {
            const msg = encodeURIComponent(`Hello TONWOOD, I'm interested in "${p.name}". Please share details.`);
            return (
              <article key={p.id} className="card">
                <div className="card-img">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="card-body">
                  <span className="tag">{getCategory(p.category).name}</span>
                  <h3>{p.name}</h3>
                  <a className="btn btn-outline-dark btn-small" href={`https://wa.me/${CONTACT.whatsapp}?text=${msg}`} target="_blank" rel="noreferrer">
                    Enquire on WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
