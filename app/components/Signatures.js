export default function Signatures() {
  const items = [
    { emoji:'🫓', name:'Butter Chicken Panuozzo',    tag:'Bestseller', desc:'Succulent butter chicken in rich makhani gravy, tangy onion pickle, melted mozzarella, butter glaze — on a two-day fermented sourdough panuozzo.' },
    { emoji:'🥐', name:'Korean Fried Chicken Crogel', tag:'Must Try',   desc:'Crispy fried chicken in gochujang glaze, Korean slaw, sesame seeds, chilli mayo — on a flaky, buttery crogel.' },
    { emoji:'🍞', name:'Classic Chicken Katsu Sando', tag:'Fan Fav',    desc:'Crispy panko-crumbed chicken katsu, tonkatsu sauce, shredded cabbage, creamy mayo — on Japanese milk bread.' },
    { emoji:'🌿', name:'Roasted Veg Pesto Burrata',   tag:'Chef Pick',  desc:'Roasted seasonal veggies, vibrant basil pesto & creamy burrata, stacked fresh for a rich, herby bite.' },
    { emoji:'🔥', name:'Pork Extravaganza',    tag:'New',        desc:'Pepproni, Ham, Crispy bacon — fire-baked on our signature flatbread.' },
    { emoji:'🥩', name:'Paneer Katsu Sando 2.0',      tag:'Veg',        desc:'Panko-crusted paneer katsu, tonkatsu sauce, pickled cabbage, creamy mayo — on cloud-soft Japanese milk bread.' },
  ]
  return (
    <div className="sp-section yellow sp-signatures">
      <p className="sp-eyebrow dark">— Signature Items</p>
      <h2 className="sp-section-title dark">The Ones People<br/><em>Keep Coming Back For.</em></h2>
      <p className="sp-body dark" style={{ maxWidth:'560px', marginTop:'1rem' }}>
        Every item on the STACK menu is built to crave. But these? These are the ones
        that started it all.
      </p>
      <div className="sp-signatures-grid">
        {items.map((item, i) => (
          <div key={i} className="sp-sig-card">
            <div className="sp-sig-top">
              <span className="sp-sig-emoji">{item.emoji}</span>
              <span className="sp-sig-tag">{item.tag}</span>
            </div>
            <h3 className="sp-sig-name">{item.name}</h3>
            <p className="sp-sig-desc">{item.desc}</p>
            <div className="sp-sig-footer">
              <a href="https://www.zomato.com/ncr/the-stack-sando-sector-65-gurgaon/order" target="_blank" rel="noreferrer" className="sp-sig-order">
                Order on Zomato ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}