// Server component — fully SSR, indexed by Google

const CATEGORIES = [
  {
    id: 'panuozzo',
    name: 'Panuozzo',
    emoji: '🫓',
    desc: 'Two-day fermented sourdough pizza dough. Baked & filled. Naples-born.',
    veg: [
      { name: 'Verdure Grigliate',  price: '₹349', tag: null,          desc: 'Char-grilled zucchini, eggplant, peppers, basil pesto, garlic butter, mozzarella' },
      { name: 'Funghi Tartufo',     price: '₹369', tag: 'Chef Pick',   desc: 'Sautéed mushrooms, truffle cream, caramelized onions, mozzarella, parmesan' },
      { name: 'Paneer Piccante',    price: '₹329', tag: null,          desc: 'Spiced paneer, roasted bell peppers, chilli mayo, melted mozzarella' },
    ],
    nonveg: [
      { name: 'Butter Chicken Explosion', price: '₹399', tag: 'Bestseller', desc: 'Butter chicken, makhani gravy, tangy onion pickle, mozzarella, butter glaze' },
      { name: 'Korean Fried Chicken',     price: '₹389', tag: 'Must Try',   desc: 'Crispy chicken in gochujang glaze, Korean slaw, sesame, chilli mayo' },
      { name: 'Pollo Pesto',              price: '₹369', tag: null,         desc: 'Grilled chicken, basil pesto, mozzarella, lettuce, olive oil & garlic' },
    ],
  },
  {
    id: 'crogel',
    name: 'Crogel',
    emoji: '🥐',
    desc: 'Croissant dough meets bagel shape. Flaky layers, satisfying chew.',
    veg: [
      { name: 'Avocado Thecha Smash',    price: '₹299', tag: 'New',       desc: 'Smashed avocado, green thecha, lime, rocket leaves, chilli salt' },
      { name: 'Beetroot Hummus & Feta',  price: '₹319', tag: null,        desc: 'Beetroot hummus, feta crumble, toasted seeds, crunchy rocket' },
      { name: 'Pumpkin Spice & Burrata', price: '₹339', tag: 'Chef Pick', desc: 'Roasted pumpkin, creamy burrata, arugula, black pepper, hot maple' },
    ],
    nonveg: [
      { name: 'Chicken Shawarma', price: '₹349', tag: 'Bestseller', desc: 'Shawarma-spiced chicken, garlic sauce, pickles, lettuce, tomato, onions' },
      { name: 'Katsu Chicken',    price: '₹369', tag: 'Must Try',   desc: 'Crispy fried chicken, katsu glaze, crunchy slaw, sesame mayo' },
      { name: 'BLT Pro Max',      price: '₹359', tag: null,         desc: 'Crispy bacon, sliced ham, lettuce, rocket, tomato jam, cracked pepper' },
    ],
  },
  {
    id: 'milkbread',
    name: 'Milk Bread',
    emoji: '🍞',
    desc: 'Japanese cloud-like softness. Subtle sweetness. Bold fillings.',
    veg: [
      { name: 'Malai Paneer Melt',        price: '₹319', tag: null,        desc: 'Malai paneer, saffron cream, melted cheese, butter glaze, mild spices' },
      { name: 'Paneer Katsu Sando 2.0',   price: '₹329', tag: 'Must Try',  desc: 'Panko-crusted paneer katsu, tonkatsu sauce, pickled cabbage, creamy mayo' },
      { name: 'Cheese Lava Cutlet Sando', price: '₹299', tag: 'New',       desc: 'Crispy veg cutlet with molten cheese core, spicy mayo, fresh lettuce' },
    ],
    nonveg: [
      { name: 'Classic Chicken Katsu Supreme', price: '₹369', tag: 'Bestseller', desc: 'Crispy panko chicken katsu, tonkatsu sauce, shredded cabbage, creamy mayo' },
      { name: 'BBQ Pulled Chicken Bomb',       price: '₹379', tag: 'Chef Pick',  desc: 'Slow-cooked pulled chicken, smoky BBQ glaze, melted cheese, slaw' },
      { name: 'Teriyaki Chicken Sando',        price: '₹349', tag: null,         desc: 'Teriyaki-glazed chicken, crunchy cabbage slaw, sesame mayo' },
    ],
  },
  {
    id: 'florentine',
    name: 'Florentine',
    emoji: '🌿',
    desc: 'Tuscan-inspired rustic crust. Bold, crunchy, built for generous fillings.',
    veg: [
      { name: 'Roasted Veg Pesto Burrata', price: '₹329', tag: 'Chef Pick', desc: 'Basil pesto, zucchini, bell peppers, mushrooms, sun-dried tomato, truffle mayo' },
      { name: 'Thai Peanut Veg Crunch',    price: '₹299', tag: null,        desc: 'Spicy peanut sauce, stir-fried veggies, cabbage slaw, sweet chilli dip' },
      { name: 'Aloo Chaat Fusion',         price: '₹279', tag: 'New',       desc: 'Tamarind chutney mayo, spiced potato, onion, sev crunch, mint chutney' },
      { name: 'Corn Jalapeño Cheese',      price: '₹289', tag: null,        desc: 'Cheddar cream, grilled corn, jalapeño, herbs, chipotle mayo' },
    ],
    nonveg: [
      { name: 'Peri Peri Chicken Cheese', price: '₹339', tag: null,         desc: 'Peri peri mayo, grilled chicken, cheese, capsicum, chipotle sauce' },
      { name: 'Smoked BBQ Chicken',       price: '₹349', tag: 'Bestseller', desc: 'Smoky BBQ sauce, pulled chicken, caramelized onion, ranch dip' },
      { name: 'Egg & Bacon Truffle',      price: '₹329', tag: 'Chef Pick',  desc: 'Truffle mayo, fried egg, crispy bacon, cheese, pepper aioli' },
      { name: 'Dark Horse',               price: '₹359', tag: 'Must Try',   desc: 'Ranch, ham, chicken salami, emmenthal, sautéed spinach, crispy kale, chipotle' },
    ],
  },
  {
    id: 'flatbreads',
    name: 'Flatbreads',
    emoji: '🔥',
    desc: 'Fire-baked. Open canvas. Bold global toppings.',
    veg: [
      { name: 'Tandoori Mushroom & Truffle Labneh', price: '₹319', tag: 'Chef Pick', desc: 'Charred mushrooms, tandoori glaze, truffle oil, creamy labneh, microgreens' },
      { name: 'Thai Basil Corn & Chilli Cheese',    price: '₹299', tag: null,        desc: 'Stir-fried corn, Thai basil, garlic chilli oil, melted cheese' },
      { name: 'Korean Gochujang Mushroom',           price: '₹309', tag: 'New',       desc: 'Sticky gochujang mushrooms, sesame slaw, spring onion, spicy mayo' },
    ],
    nonveg: [
      { name: 'Butter Chicken Garlic Flatbread',  price: '₹349', tag: 'Bestseller', desc: 'Smoky butter chicken, cream swirl, onion, fresh coriander' },
      { name: 'Lamb Keema & Pickled Chili',       price: '₹369', tag: 'Chef Pick',  desc: 'Slow-cooked keema, fried egg option, mint chutney drizzle' },
      { name: 'Tandoori Chicken Ranch Flatbread', price: '₹339', tag: null,         desc: 'Smoky chicken tikka, ranch dressing, pickled onions, cheese' },
    ],
  },
  {
    id: 'small-plates',
    name: 'Small Plates',
    emoji: '🍽️',
    desc: 'Bold starters to kick things off.',
    veg: [
      { name: 'Patatas Bravas',                   price: '₹249', tag: 'Must Try',  desc: 'Crispy dusted potatoes, whipped garlic toum, chilli harissa' },
      { name: 'Truffle Arancini',                 price: '₹269', tag: 'Chef Pick', desc: 'Wild mushroom risotto, truffle oil, parmesan finish' },
      { name: 'Mexican Jalapeño Cheese Arancini', price: '₹259', tag: null,        desc: 'Spicy cheese, corn, jalapeño, chipotle dip' },
    ],
    nonveg: [
      { name: 'Turkish Style Chicken Popcorn', price: '₹289', tag: 'Bestseller', desc: 'Yogurt-marinated crispy chicken, paprika, warm spices, chipotle dip' },
      { name: 'BBQ Chicken Wings',             price: '₹319', tag: 'Must Try',   desc: 'Slow-cooked, flame-finished, sticky smoky BBQ glaze' },
      { name: 'Chicken Parmesan Arancini',     price: '₹279', tag: null,         desc: 'Crumbed chicken, marinara, mozzarella' },
    ],
  },
  {
    id: 'fries',
    name: 'Fries',
    emoji: '🍟',
    desc: 'Not just fries. Elevated sides.',
    veg: [
      { name: 'Peri Peri Fries',      price: '₹199', tag: 'Bestseller', desc: 'Bold peri peri seasoning, spice, tang, smoky heat' },
      { name: 'Truffle Parmesan',     price: '₹229', tag: 'Chef Pick',  desc: 'Earthy truffle, parmesan shavings, herb finish' },
      { name: 'Pizza Fries',          price: '₹219', tag: null,         desc: 'Herbed tomato sauce, gooey cheese, pizza-style toppings' },
      { name: 'Mexican Loaded Fries', price: '₹239', tag: 'Must Try',   desc: 'Zesty salsa, melted cheese, jalapeños, corn, beans, sour cream' },
    ],
    nonveg: [],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    emoji: '🥤',
    desc: 'Cold, refreshing, made to pair.',
    veg: [
      { name: 'Classic Lemonade',       price: '₹129', tag: null,        desc: 'Fresh squeezed lemon, hint of mint, served chilled' },
      { name: 'Watermelon Jalapeño',    price: '₹149', tag: 'Must Try',  desc: 'Fresh watermelon, jalapeño kick, lime finish' },
      { name: 'Mango Chilli Cooler',    price: '₹149', tag: 'New',       desc: 'Fresh mango, chilli salt rim, tangy & refreshing' },
      { name: 'Cold Brew Coffee',       price: '₹159', tag: null,        desc: 'Smooth 18-hour cold brew, served over ice' },
      { name: 'Sparkling Lemon Ginger', price: '₹139', tag: null,        desc: 'Sparkling water, fresh ginger, lemon zest' },
      { name: 'Bottled Water',          price: '₹49',  tag: null,        desc: 'Still or sparkling' },
    ],
    nonveg: [],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    emoji: '🍮',
    desc: 'The perfect ending.',
    veg: [
      { name: 'Mango Tiramisu',          price: '₹249', tag: 'Bestseller', desc: 'Coffee-soaked layers, mascarpone cream, cocoa dusting' },
      { name: 'Churros & Chocolate Dip', price: '₹229', tag: 'Must Try',   desc: 'Crispy churros, cinnamon sugar, dark chocolate dip' },
      { name: 'Chocolate Lava Cake',     price: '₹259', tag: 'Chef Pick',  desc: 'Warm cake, molten chocolate center, vanilla ice cream' },
      { name: 'OG Tres Leches',          price: '₹239', tag: null,         desc: 'Milk-soaked sponge, light whipped cream, soft & delicate' },
    ],
    nonveg: [],
  },
]

export default function MenuSection() {
  return (
    <div className="sp-section yellow sp-menu-section">

      {/* Schema markup — Google indexes every item */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Menu',
            name: 'STACK Menu',
            description: 'Full menu for STACK gourmet sandwiches and flatbreads, Sector 65 Gurugram',
            hasMenuSection: CATEGORIES.map(cat => ({
              '@type': 'MenuSection',
              name: cat.name,
              description: cat.desc,
              hasMenuItem: [
                ...cat.veg.map(i => ({
                  '@type': 'MenuItem',
                  name: i.name,
                  description: i.desc,
                  offers: { '@type': 'Offer', price: i.price.replace('₹',''), priceCurrency: 'INR' },
                  suitableForDiet: 'https://schema.org/VegetarianDiet',
                })),
                ...cat.nonveg.map(i => ({
                  '@type': 'MenuItem',
                  name: i.name,
                  description: i.desc,
                  offers: { '@type': 'Offer', price: i.price.replace('₹',''), priceCurrency: 'INR' },
                })),
              ],
            })),
          })
        }}
      />

      <div className="sp-menu-header">
        <p className="sp-eyebrow">— What We Serve</p>
        <h2 className="sp-section-title">The <em>Menu</em></h2>
        <p className="sp-body" style={{ maxWidth:'520px', marginTop:'0.8rem' }}>
          Global breads. Bold fillings. Made to order.
          Available for delivery on Zomato &amp; Swiggy.
        </p>
      </div>

      {/* Category tabs + carousels */}
      <div className="sp-menu-cats">
        {CATEGORIES.map(cat => {
          const all = [
            ...cat.veg.map(i => ({ ...i, veg: true })),
            ...cat.nonveg.map(i => ({ ...i, veg: false })),
          ]
          return (
            <div key={cat.id} className="sp-menu-cat" id={`menu-${cat.id}`}>
              <div className="sp-menu-cat-label">
                <span className="sp-menu-cat-emoji">{cat.emoji}</span>
                <div>
                  <h3 className="sp-menu-cat-name">{cat.name}</h3>
                  <p className="sp-menu-cat-desc">{cat.desc}</p>
                </div>
              </div>

              {/* horizontal scroll carousel */}
              <div className="sp-menu-carousel" aria-label={`${cat.name} menu items`}>
                {all.map((item, i) => (
                  <article key={i} className="sp-menu-card" itemScope itemType="https://schema.org/MenuItem">
  <div className="sp-menu-card-top">
    <span className={`sp-menu-dot ${item.veg ? 'veg' : 'nonveg'}`} title={item.veg ? 'Vegetarian' : 'Non-Vegetarian'} />
    {/* tag — only renders if item has one */}
  {item.tag && (
    <span className={`sp-menu-tag sp-menu-tag--${item.tag.toLowerCase().replace(' ','-')}`}>
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
              <div className="sp-menu-cat-scroll-hint">Swipe to explore</div>
            </div>
          )
        })}
      </div>

      <div className="sp-menu-footer">
        <p className="sp-body" style={{ color:'rgba(243,230,202,0.5)' }}>
          Prices inclusive of taxes · Menu subject to change
        </p>
        <div className="sp-menu-order-btns">
          <a href="https://www.zomato.com/ncr/the-stack-sando-sector-65-gurgaon/order" target="_blank" rel="noreferrer" className="sp-hero-btn zomato">
            🍽 Order on Zomato
          </a>
          <a href="https://www.swiggy.com/city/gurgaon/stack-gourmet-sandwiches-and-flatbreads-sohna-road-rest1418250" target="_blank" rel="noreferrer" className="sp-hero-btn swiggy">
            🛵 Order on Swiggy
          </a>
        </div>
      </div>

    </div>
  )
}