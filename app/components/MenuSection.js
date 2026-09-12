'use client'
import { useRef } from 'react'

const CATEGORIES = [
  {
    id: 'arancini',
    name: 'Arancini',
    emoji: '🍽️',
    desc: 'Crispy risotto balls. Bold fillings. Perfect starter.',
    photo: '/media/arancini.jpg',
    veg: [
      { name: 'Truffle Arancini',                  price: '₹365', tag: 'Chef Pick',  desc: 'Wild mushrooms, truffle oil, parmigiano reggiano' },
      { name: 'Mexican Jalapeño Cheese Arancini',  price: '₹345', tag: null,         desc: 'Spicy cheese, corn, jalapeño' },
    ],
    nonveg: [
      { name: 'Chicken Parmesan Arancini',  price: '₹395', tag: 'Must Try', desc: 'Crumbed chicken, marinara, mozzarella' },
      { name: 'Chicken Pesto Arancini',     price: '₹395', tag: null,       desc: 'Basil pesto chicken mix' },
    ],
  },
  {
    id: 'panuozzo',
    name: 'Panuozzo',
    emoji: '🫓',
    desc: 'Two-day fermented sourdough pizza dough. Baked & filled. Naples-born.',
    photo: '/media/panuozzo-05.jpg',
    veg: [
      { name: 'Verdure Grigliate', price: '₹445', tag: null,        desc: 'Grilled zucchini, eggplant, bell peppers, onions, basil pesto, garlic butter, fresh mozzarella' },
      { name: 'Funghi Tartufo',    price: '₹525', tag: 'Chef Pick', desc: 'Sautéed mushrooms, truffle cream, fresh basil, pecorino, gorgonzola, caramelized onions' },
      { name: 'Paneer Picante',    price: '₹475', tag: null,        desc: 'Yuzu chilli mayo, stir fried cottage cheese, assorted peppers, melted cheese, scallions' },
    ],
    nonveg: [
      { name: 'Butter Chicken Explosion', price: '₹525', tag: 'Bestseller', desc: 'Pulled butter chicken, sirka pyaaz, coriander leaves' },
      { name: 'Korean Fried Chicken',     price: '₹495', tag: 'Must Try',   desc: 'Crumb fried chicken, gochujang glaze, Korean slaw' },
      { name: 'Pollo Pesto',              price: '₹495', tag: null,         desc: 'Pulled pesto chicken, arugula, olives, cherry tomatoes' },
    ],
  },
  {
    id: 'crogel',
    name: 'Crogel',
    emoji: '🥐',
    desc: 'Croissant dough meets bagel shape. Flaky layers, satisfying chew.',
    photo: '/media/crogel-stack-focused.png',
    veg: [
      { name: 'Avocado Thecha Smash',             price: '₹395', tag: 'New',       desc: 'Smashed avocado, Maharashtrian thecha, rocket, homemade spice mix' },
      { name: 'OG Hummus and Feta',               price: '₹425', tag: 'Must Try',  desc: 'Hummus, basil falafel, feta crumble, super seeds, rucola' },
      { name: 'Roasted Pumpkin Burrata & Chimichurri', price: '₹425', tag: 'Chef Pick', desc: 'Roasted pumpkin, creamy burrata, fresh arugula, chimichurri, hot maple' },
    ],
    nonveg: [
      { name: 'Chicken Shawarma',     price: '₹475', tag: 'Bestseller', desc: 'Garlic toum, lettuce, pulled chicken shawarma, tomatoes, tahini, gherkins' },
      { name: 'Lebanese Fried Chicken', price: '₹495', tag: 'Must Try', desc: 'Crispy fried chicken, wilted spinach, sumac onions, pickled veggies' },
      { name: 'BLT Pro Max',          price: '₹545', tag: null,         desc: 'Crispy bacon, sliced ham, iceberg lettuce, crushed black pepper' },
    ],
  },
  {
    id: 'milkbread',
    name: 'Milk Bread Sandos',
    emoji: '🍞',
    desc: 'Japanese cloud-like softness. Subtle sweetness. Bold fillings.',
    photo: '/media/milkbread-stack.jpeg',
    veg: [
      { name: 'Wild Mushroom Patty',      price: '₹445', tag: 'Chef Pick', desc: 'Shiitake and button mushrooms patty, ricotta cheese, grilled onions, tomato slices, truffle mayo, iceberg lettuce' },
      { name: 'Paneer Katsu 2.0',         price: '₹425', tag: 'Must Try',  desc: 'Crumb fried cottage cheese, katsu mayo, pickled cabbage, burnt garlic' },
      { name: 'Chickpea Oats Patty Sando',price: '₹425', tag: null,        desc: 'Chickpea oats patty, green lettuce, tomato slices, onion pickles, grilled onions, cream cheese and garlic aioli' },
    ],
    nonveg: [
      { name: 'OG Chicken Katsu',      price: '₹425', tag: 'Bestseller', desc: 'Crumb fried chicken, katsu mayo, chinese cabbage, crispy onion' },
      { name: 'BBQ Pulled Chicken',    price: '₹425', tag: null,         desc: 'Slow-cooked pulled chicken, smoky BBQ glaze, melted cheese, red cabbage slaw' },
      { name: 'Teriyaki Chicken Sando',price: '₹445', tag: null,         desc: 'Teriyaki-glazed pulled chicken, sesame slaw' },
    ],
  },
  {
    id: 'florentine',
    name: "Florentine's",
    emoji: '🌿',
    desc: 'Tuscan-inspired rustic crust. Bold, crunchy, built for generous fillings.',
    photo: '/media/florantine-stack.png',
    veg: [
      { name: 'Roasted Veg Pesto Burrata', price: '₹545', tag: 'Chef Pick', desc: 'Basil pesto, grilled vegetables, sundried tomatoes, creamy burrata, balsamic glaze' },
      { name: 'Asian Veg Crunch',          price: '₹495', tag: null,        desc: 'Yuzu chilli mayo, crispy veggies, cabbage slaw' },
      { name: 'Corn Jalapeño Cheese',      price: '₹525', tag: null,        desc: 'Cheese popper, grilled baby corn, cheddar crémeux' },
    ],
    nonveg: [
      { name: 'Peri-Peri Chicken Cheese',  price: '₹595', tag: 'Bestseller', desc: 'Spicy mayo, pulled chicken, capsicum, lettuce' },
      { name: 'Chilli Garlic Prawn',       price: '₹725', tag: 'Chef Pick',  desc: 'Lemon aioli, chilli oil, butter garlic prawns, spring onion' },
      { name: 'Egg Bacon Truffle',         price: '₹645', tag: 'Must Try',   desc: 'Truffle mayo, Emmenthal, fried egg, crispy bacon' },
    ],
  },
  {
    id: 'flatbreads',
    name: 'Flatbreads',
    emoji: '🔥',
    desc: 'Fire-baked. Open canvas. Bold global toppings.',
    photo: '/media/flatbreads.png',
    veg: [
      { name: 'Creamy Burrata',         price: '₹625', tag: 'Chef Pick',  desc: 'Sauce pomodoro, sundried tomato, basil pesto, arugula' },
      { name: "Farmer's Market",        price: '₹525', tag: null,         desc: 'Sauce pomodoro, zucchini, mushrooms, broccoli, bell peppers' },
      { name: 'Tandoori Mushroom Labneh',price: '₹545', tag: 'Must Try',  desc: 'Charred mushrooms, creamy labneh, fresh mint, microgreens' },
      { name: 'Thai Basil Corn & Chilli Cheese', price: '₹545', tag: null, desc: 'Stir-fried crispy corn, Thai basil, crispy garlic, chilli oil' },
      { name: 'Hummus Falafel',         price: '₹525', tag: null,         desc: 'Basil falafel, OG hummus, tahini yogurt, parsley, pomegranate' },
    ],
    nonveg: [
      { name: 'Tandoori Chicken Ranch', price: '₹625', tag: 'Bestseller', desc: 'Smoky chicken tikka, ranch dressing, fried chilli, cress' },
      { name: 'Lamb Keema & Pickled Chilli', price: '₹695', tag: 'Chef Pick', desc: 'Slow-cooked keema, fried egg, mint mayo' },
      { name: 'Chicken Overload',       price: '₹675', tag: null,         desc: 'Chicken ham, chicken salami, peri-peri chicken, BBQ chicken' },
      { name: 'Pork Extravaganza',      price: '₹710', tag: 'Must Try',   desc: 'Pepperoni, ham, crispy bacon, onion jam' },
    ],
  },
  {
    id: 'small-plates',
    name: 'Small Plates',
    emoji: '🍽️',
    desc: 'Bold starters to kick things off.',
    photo: '/media/Patatas-Bravas-stack.jpg',
    veg: [
      { name: 'Patatas Bravas',                    price: '₹245', tag: 'Must Try',  desc: 'Crispy potatoes, spiced harissa sauce, garlic sauce' },
      { name: 'Pumpkin and Cream Cheese Cigar Rolls', price: '₹295', tag: null,     desc: 'Red chilli, scallions, pesto' },
    ],
    nonveg: [
      { name: 'Turkish Style Chicken Popcorn', price: '₹325', tag: 'Bestseller', desc: 'Sumac, paprika, zaatar, chipotle mayo' },
      { name: 'Chicken Wings — Peri-Peri',     price: '₹375', tag: null,         desc: 'Crispy and juicy chicken wings, peri-peri flavour' },
      { name: 'Chicken Wings — BBQ',           price: '₹375', tag: null,         desc: 'Crispy and juicy chicken wings, smoky BBQ flavour' },
      { name: 'Chicken Wings — Korean Gochujang', price: '₹375', tag: 'Must Try', desc: 'Crispy and juicy chicken wings, Korean gochujang glaze' },
    ],
  },
  {
    id: 'fries',
    name: 'Fries',
    emoji: '🍟',
    desc: 'Not just fries. Elevated sides.',
    photo: '/media/loaded_Fries_stack.jpeg',
    veg: [
      { name: 'Classic Salted',   price: '₹195', tag: null,         desc: 'Served with habanero mayo' },
      { name: 'Sweet Potato',     price: '₹275', tag: null,         desc: 'Served with habanero mayo' },
      { name: 'Peri-Peri',       price: '₹245', tag: 'Bestseller', desc: 'Served with habanero mayo' },
      { name: 'Truffle Parmesan', price: '₹295', tag: 'Chef Pick',  desc: 'Grana padano, flat leaf parsley, essence of truffle' },
      { name: 'Loaded Pizza',    price: '₹325', tag: 'Must Try',   desc: 'Marinara sauce, mozzarella, basil, sundried tomatoes' },
      { name: 'Mexican Loaded',  price: '₹325', tag: null,         desc: 'Pico de gallo, smashed avocado, sour cream, cheddar cream, jalapeño' },
    ],
    nonveg: [],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    emoji: '🍮',
    desc: 'The perfect ending.',
    photo: '/media/tres_leches_cake_stack.jpg',
    veg: [
      { name: 'Coffee and Toffee Tiramisu', price: '₹275', tag: 'Bestseller', desc: 'Coffee-soaked savoiardi, caramel sauce, mascarpone cream, cocoa' },
      { name: 'Churro Fries',              price: '₹225', tag: 'Must Try',   desc: 'Cinnamon sugar, whipped cream, nutella' },
      { name: 'Flourless Chocolate Cake',  price: '₹295', tag: 'Chef Pick',  desc: 'Gluten free indulgence, served with vanilla ice cream' },
      { name: 'OG Tres Leches',            price: '₹245', tag: null,         desc: 'Milk-soaked sponge, dulce de leche, whipped cream' },
    ],
    nonveg: [],
  },
]

function MenuCarousel({ cat }) {
  const scrollRef = useRef(null)

  function scroll(dir) {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' })
  }

  const all = [
    ...cat.veg.map(i => ({ ...i, veg: true })),
    ...cat.nonveg.map(i => ({ ...i, veg: false })),
  ]

  return (
    <div className="sp-menu-cat" id={`menu-${cat.id}`}>
      <div className="sp-menu-cat-label">
        <span className="sp-menu-cat-emoji">{cat.emoji}</span>
        <div>
          <h3 className="sp-menu-cat-name">{cat.name}</h3>
          <p className="sp-menu-cat-desc">{cat.desc}</p>
        </div>

        {/* Scroll arrows */}
        <div className="sp-menu-arrows">
          <button
            className="sp-menu-arrow"
            onClick={() => scroll('left')}
            aria-label={`Scroll ${cat.name} left`}
          >
            ←
          </button>
          <button
            className="sp-menu-arrow"
            onClick={() => scroll('right')}
            aria-label={`Scroll ${cat.name} right`}
          >
            →
          </button>
        </div>
      </div>

      <div className="sp-menu-carousel" ref={scrollRef} aria-label={`${cat.name} menu items`}>

        {/* Photo card — first item in carousel */}
        <div className="sp-menu-photo-card">
          <img
            src={cat.photo}
            alt={`STACK ${cat.name} — gourmet ${cat.name.toLowerCase()} Gurugram`}
            loading="lazy"
          />
          <div className="sp-menu-photo-label">
            <span className="sp-menu-photo-emoji">{cat.emoji}</span>
            <span className="sp-menu-photo-name">{cat.name}</span>
          </div>
        </div>

        {/* Menu item cards */}
        {all.map((item, i) => (
          <article
            key={i}
            className="sp-menu-card"
            itemScope
            itemType="https://schema.org/MenuItem"
          >
            <div className="sp-menu-card-top">
              <span
                className={`sp-menu-dot ${item.veg ? 'veg' : 'nonveg'}`}
                title={item.veg ? 'Vegetarian' : 'Non-Vegetarian'}
              />  
              {item.tag && (
              <span className={`sp-menu-tag sp-menu-tag--${item.tag.toLowerCase().replace(' ', '-')}`}>
                {item.tag === 'Bestseller' && '🏆 '}
                {item.tag === 'Chef Pick'  && '👨‍🍳 '}
                {item.tag === 'Must Try'   && '🔥 '}
                {item.tag === 'New'        && '✨ '}
                {item.tag}
              </span>
            )}
              <span className="sp-menu-card-price" itemProp="offers">{item.price}</span>
            </div>

            

            <h4 className="sp-menu-card-name" itemProp="name">{item.name}</h4>
            <p className="sp-menu-card-desc" itemProp="description">{item.desc}</p>
          
          </article>
        ))}
      </div>
    </div>
  ) 
}

export default function MenuSection() {
  return (
    <div className="sp-section yellow sp-menu-section">

      {/* SEO schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Menu',
            name: 'STACK Menu',
            description: 'Full menu for STACK gourmet sandwiches, flatbreads and small plates — Sector 65 Gurugram',
            hasMenuSection: CATEGORIES.map(cat => ({
              '@type': 'MenuSection',
              name: cat.name,
              description: cat.desc,
              hasMenuItem: [
                ...cat.veg.map(i => ({
                  '@type': 'MenuItem',
                  name: i.name,
                  description: i.desc,
                  offers: {
                    '@type': 'Offer',
                    price: i.price.replace('₹', ''),
                    priceCurrency: 'INR',
                  },
                  suitableForDiet: 'https://schema.org/VegetarianDiet',
                })),
                ...cat.nonveg.map(i => ({
                  '@type': 'MenuItem',
                  name: i.name,
                  description: i.desc,
                  offers: {
                    '@type': 'Offer',
                    price: i.price.replace('₹', ''),
                    priceCurrency: 'INR',
                  },
                })),
              ],
            })),
          })
        }}
      />

      <div className="sp-menu-header">
        <p className="sp-eyebrow">— What We Serve</p>
        <h2 className="sp-section-title">The <em>Menu</em></h2>
        <p className="sp-body" style={{ maxWidth: '520px', marginTop: '0.8rem' }}>
          Global breads. Bold fillings. Made to order.
          Available for delivery on Zomato &amp; Swiggy.
        </p>
      </div>

      <div className="sp-menu-cats">
        {CATEGORIES.map(cat => (
          <MenuCarousel key={cat.id} cat={cat} />
        ))}
      </div>

      <div className="sp-menu-footer">
        <p className="sp-body" style={{ color: 'rgba(13,27,42,0.4)' }}>
          Prices inclusive of taxes · Menu subject to change
        </p>
        <div className="sp-menu-order-btns">
          <a href="https://www.zomato.com/ncr/the-stack-sando-sector-65-gurgaon" target="_blank" rel="noreferrer" className="sp-hero-btn zomato">
            🍽 Order on Zomato
          </a>
          <a href="https://www.swiggy.com/city/gurgaon/the-stack-sando-sohna-road-rest1418250" target="_blank" rel="noreferrer" className="sp-hero-btn swiggy">
            🛵 Order on Swiggy
          </a>
        </div>
      </div>

    </div>
  )
}