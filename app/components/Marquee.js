const WORDS = [
  'Gourmet Sandwiches','✦','Artisan Flatbreads','✦',
  'Handcrafted Daily','✦','Bold Global Flavors','✦',
  'Premium. Affordable.','✦',
  'Panuozzo','✦','Milk Bread','✦','Crogel','✦','Florentine','✦',
]
const DOUBLED = [...WORDS, ...WORDS]

export default function Marquee() {
  return (
    <div className="sp-marquee">
      <div className="sp-marquee-track">
        {DOUBLED.map((w, i) => (
          <span key={i} className={w === '✦' ? 'sp-marquee-sep' : 'sp-marquee-word'}>
            {w}
          </span>
        ))}
      </div>
    </div>
  )
}
