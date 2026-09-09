'use client'
const CATEGORIES = [
  {
    name: 'Panuozzo', emoji: '🫓',
    story: 'Sourdough pizza dough, two-day fermented, baked & filled. Naples-born comfort.',
    veg:    ['Verdure Grigliate','Funghi Tartufo','Paneer Piccante'],
    nonveg: ['Butter Chicken Explosion','Korean Fried Chicken','Pollo Pesto'],
  },
  {
    name: 'Crogel', emoji: '🥐',
    story: 'Croissant dough meets bagel shape. Crispy edges, flaky layers, satisfying chew.',
    veg:    ['Avocado Thecha Smash','Beetroot Hummus & Feta','Pumpkin Spice & Burrata'],
    nonveg: ['Chicken Shawarma','Katsu Chicken','BLT Pro Max'],
  },
  {
    name: 'Milk Bread', emoji: '🍞',
    story: 'Japanese cloud-like softness. Subtle sweetness. The perfect canvas for bold fillings.',
    veg:    ['Malai Paneer Melt','Paneer Katsu Sando 2.0','Cheese Lava Cutlet Sando'],
    nonveg: ['Classic Chicken Katsu Supreme','BBQ Pulled Chicken Bomb','Teriyaki Chicken Sando'],
  },
  {
    name: 'Florentine', emoji: '🌿',
    story: 'Tuscan-inspired rustic crust. Bold, crunchy, hearty. Built for generous fillings.',
    veg:    ['Roasted Veg Pesto Burrata','Thai Peanut Veg Crunch','Aloo Chaat Fusion','Corn Jalapeño Cheese'],
    nonveg: ['Peri Peri Chicken Cheese','Smoked BBQ Chicken','Egg & Bacon Truffle','Dark Horse'],
  },
  {
    name: 'Flatbreads', emoji: '🔥',
    story: 'Fire-baked open canvas. Bold global toppings. Pure craving.',
    veg:    ['Tandoori Mushroom & Truffle Labneh','Thai Basil Corn & Chilli Cheese','Korean Gochujang Mushroom'],
    nonveg: ['Butter Chicken Garlic Flatbread','Lamb Keema & Pickled Chili','Korean Fried Chicken Flatbread'],
  },
  {
    name: 'Small Plates', emoji: '🍽️',
    story: 'Bold starters to kick things off right.',
    veg:    ['Patatas Bravas','Truffle Arancini','Mexican Jalapeño Cheese Arancini'],
    nonveg: ['Turkish Style Chicken Popcorn','BBQ Chicken Wings','Chicken Parmesan Arancini'],
  },
]

export default function Menu() {
  return (
    <div className="sp-section navy sp-menu-section">
      <div className="sp-section-header">
        <p className="sp-eyebrow">— What We're Making</p>
        <h2 className="sp-section-title">The <em>Menu</em></h2>
        <p className="sp-body" style={{ maxWidth: '560px' }}>
          Global breads. Bold fillings. Indian soul. Every item crafted with intention —
          coming very soon to Gurugram.
        </p>
      </div>

      {/* Coming soon banner */}
      <div className="sp-menu-banner">
        <span className="sp-menu-banner-icon">🍽️</span>
        <div>
          <div className="sp-menu-banner-title">Full Menu Revealing Soon</div>
          <div className="sp-menu-banner-sub">All items shown below — prices and launch date dropping shortly</div>
        </div>
        <span className="sp-menu-banner-badge">Opening 2026</span>
      </div>

      {/* Category grid */}
      <div className="sp-menu-categories">
        {CATEGORIES.map((cat, ci) => (
          <div key={ci} className="sp-menu-cat">
            <div className="sp-menu-cat-header">
              <span className="sp-menu-cat-emoji">{cat.emoji}</span>
              <div>
                <div className="sp-menu-cat-name">{cat.name}</div>
                <div className="sp-menu-cat-story">{cat.story}</div>
              </div>
            </div>
            <div className="sp-menu-items">
              {[...cat.veg.map(n => ({ n, veg: true })), ...cat.nonveg.map(n => ({ n, veg: false }))].map((item, i) => (
                <div key={i} className="sp-menu-item">
                  <span className={`sp-item-dot ${item.veg ? 'veg' : 'nonveg'}`} />
                  <span className="sp-item-name">{item.n}</span>
                  <div className="sp-item-overlay">
                    <span>🔒 Revealing Soon</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Notify */}
      <div className="sp-menu-notify">
        <h3 className="sp-notify-title">Be first to taste STACK.</h3>
        <p className="sp-body" style={{ color: 'rgba(243,230,202,0.6)', marginBottom: '1.5rem' }}>
          Drop your email — we'll notify you the moment our doors open.
        </p>
        <form className="sp-notify-form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="your@email.com" className="sp-notify-input" />
          <button type="submit" className="sp-notify-btn">Notify Me</button>
        </form>
      </div>
    </div>
  )
}
