import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Categories from './components/Categories.jsx';
import Collection from './components/Collection.jsx';
import WhyUs from './components/WhyUs.jsx';
import Enquiry from './components/Enquiry.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // Shared filter: clicking a category tile sets it and scrolls to the collection
  const [category, setCategory] = useState('all');

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories onSelect={setCategory} />
        <Collection category={category} setCategory={setCategory} />
        <WhyUs />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
