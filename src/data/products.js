// Edit this file to change products, categories and contact details.
export const CONTACT = {
  phone: '+91 00000 00000',
  whatsapp: '910000000000', // country code + number, no spaces or +
  email: 'hello@tonwood.example',
  address: 'Your showroom address, City, State',
};

export const categories = [
  { slug: 'sofas', name: 'Sofas & Recliners', cover: '/images/2.jpeg' },
  { slug: 'beds', name: 'Beds & Mattresses', cover: '/images/4.jpeg' },
  { slug: 'dining', name: 'Dining', cover: '/images/3.jpeg' },
  { slug: 'storage', name: 'Wardrobes & Storage', cover: '/images/51.jpeg' },
  { slug: 'tables', name: 'Tables & TV Units', cover: '/images/5.jpeg' },
  { slug: 'office', name: 'Office & Study', cover: '/images/8.jpeg' },
  { slug: 'kitchen', name: 'Modular Kitchens', cover: '/images/11.jpeg' },
];

// [image id, category, product name] — image id matches /public/images/<id>.jpeg
const raw = [
  ['2', 'sofas', 'Cream L-Shape Sectional'],
  ['6', 'sofas', 'Cream Sofa Set with Orange Accents'],
  ['9', 'sofas', 'Tan Recliner Sofa & Armchair Set'],
  ['10', 'sofas', 'Cream Sofa with Curved Armchairs'],
  ['31', 'sofas', 'Orange Living Room Set'],
  ['35', 'sofas', 'Brown Fabric Sofa Set'],
  ['36', 'sofas', 'Cream Recliner Sofa Set'],
  ['39', 'sofas', 'Mustard 3+2 Sofa Set'],
  ['42', 'sofas', 'Blue & Cream Sofa Set'],
  ['59', 'sofas', 'Cream Sofa Set with Loveseat'],
  ['58', 'sofas', 'Blue Electric Recliner'],
  ['4', 'beds', 'Upholstered Bed with Blue Bedding'],
  ['18', 'beds', 'Dark Wood Bed with Padded Headboard'],
  ['25', 'beds', 'Beige Storage Bed'],
  ['27', 'beds', 'Walnut Bed with Storage Drawers'],
  ['38', 'beds', 'Classic Wooden Bed'],
  ['56', 'beds', 'Modern Bed with Side Panels'],
  ['37', 'beds', 'Platform Bed with Mattress'],
  ['49', 'beds', 'Quilted Mattress'],
  ['3', 'dining', 'White-Top Dining Set with Teal Chairs'],
  ['57', 'dining', 'Solid Wood Dining Set'],
  ['51', 'storage', 'Three-Door Wardrobe'],
  ['24', 'storage', 'Glass-Door Display Cabinet'],
  ['28', 'storage', 'Tall Cabinet with Glass Doors'],
  ['5', 'tables', 'Wall-Mount TV Unit with Gold Accents'],
  ['55', 'tables', 'Wooden TV Unit with Drawers'],
  ['26', 'tables', 'Orange Center Table'],
  ['30', 'tables', 'Grey Coffee Table with Magazine Rack'],
  ['50', 'tables', 'Carved Wooden Coffee Table'],
  ['7', 'office', 'Office Desk with Mesh Chairs'],
  ['8', 'office', 'Cream Executive Chair'],
  ['21', 'office', 'Corner Office Desk with Blue Chairs'],
  ['22', 'office', 'Red Task Chair'],
  ['23', 'office', 'Black Mesh Office Chair'],
  ['29', 'office', 'Black Leather High-Back Chair'],
  ['53', 'office', 'Brown Executive Chair'],
  ['54', 'office', 'Executive Desk with Chairs'],
  ['19', 'office', 'Study Table with Shelves'],
  ['52', 'office', 'Dark Study Desk with Drawer'],
  ['11', 'kitchen', 'Modular Kitchen with Wood Accents'],
  ['12', 'kitchen', 'Grey Modular Kitchen with Island'],
  ['13', 'kitchen', 'Walnut & Grey Modular Kitchen'],
  ['14', 'kitchen', 'Beige Gloss Modular Kitchen'],
  ['15', 'kitchen', 'Dark Gloss Modular Kitchen'],
  ['16', 'kitchen', 'Kitchen with Central Island'],
  ['47', 'kitchen', 'Compact Modular Kitchen'],
];

export const products = raw.map(([id, category, name]) => {
  const cat = categories.find((c) => c.slug === category);
  return {
    id,
    category,
    name,
    image: `/images/${id}.jpeg`,
    description: `${name} from our ${cat.name} collection. Designed for comfort and everyday use. Contact us for finish, size and availability.`,
  };
});

export const featuredIds = ['2', '9', '4', '3', '51', '11'];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);
export const getProduct = (id) => products.find((p) => p.id === id);
