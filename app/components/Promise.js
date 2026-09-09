export default function Promise() {
  const pillars = [
    { icon: '✦', title: 'Craft',        text: 'Every product made with intention, not assembly' },
    { icon: '🤲', title: 'Generosity',  text: 'Food is always abundant, layered, and satisfying' },
    { icon: '🔥', title: 'Boldness',    text: 'Flavours and brand voice — confident and unapologetic' },
    { icon: '🌿', title: 'Freshness',   text: 'Made-to-order, live kitchen transparency' },
    { icon: '⚡', title: 'Consistency', text: 'Same quality and experience every single time' },
    { icon: '💰', title: 'Accessibility','text': 'Premium experience at an everyday price — never "cheap"' },
  ]
  return (
    <div className="sp-split yellow reverse">
      <div className="sp-split-text yellow-text">
        <p className="sp-eyebrow dark">— The Promise</p>
        <h2 className="sp-section-title dark sp-outline-title">
          PREMIUM<br/>EVERY<br/>SINGLE TIME.
        </h2>
        <p className="sp-body dark">
          Live kitchen. Real ingredients. Global breads. Made to order — every time you walk in.
          Premium quality + everyday affordability — that's the STACK promise.
        </p>
      </div>
      <div className="sp-split-img">
        <img src="/media/Screenshot 2026-06-29 at 8.19.34 PM.png" alt="STACK kitchen" />
      </div>
      <div className="sp-pillars-row">
        {pillars.map((p, i) => (
          <div key={i} className="sp-pillar">
            <div className="sp-pillar-icon">{p.icon}</div>
            <div className="sp-pillar-title">{p.title}</div>
            <div className="sp-pillar-text">{p.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
