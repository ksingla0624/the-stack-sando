
import AnimateIn from './AnimateIn'
export default function WhyStack() {
  return (
    <div className="sp-section navy sp-why">
      <div className="sp-why-header">
        <p className="sp-eyebrow">— Why STACK?</p>
        <h2 className="sp-section-title">
          Because You <em>Deserve</em><br />Better Than Boring.
        </h2>
        <p className="sp-body" style={{ maxWidth: '580px', marginTop: '1rem' }}>
          Gurugram's first accessible premium bread destination — where global bread
          traditions meet bold Indian flavours. Not just a sandwich. A proper STACK.
        </p>
      </div>

      <div className="sp-why-grid">
        {[
          { num:'01', title:'Global Breads,\nLocal Soul',      text:'Panuozzo from Naples, Crogel from modern kitchens, Milk Bread from Japan — every bread has a story, every bite has a passport.' },
          { num:'02', title:'Live Kitchen.\nNothing Hidden.',  text:'Made to order in front of you. No pre-made, no reheated. You watch it being built — that\'s the STACK promise.' },
          { num:'03', title:'Premium Quality.\nEveryday Price.',text:'Gourmet doesn\'t have to mean expensive. We keep prices real so you can come back again and again — not just on special occasions.' },
          { num:'04', title:'Generous.\nAlways.',              text:'No skimpy portions here. Every STACK is loaded — because food should feel like abundance, not afterthought.' },
          { num:'05', title:'Global Flavours.\nBold Always.',  text:'Butter Chicken Panuozzo. Korean Fried Chicken Crogel. Aloo Chaat Florentine. We don\'t play it safe with flavours.' },
          { num:'06', title:'Instagram-Worthy.\nEvery Time.',  text:'Real food that actually looks as good as it tastes. Every item is built to be photographed and devoured.' },
        ].map((w, i) => (
          <AnimateIn key={i} delay={i * 80} direction="up">
          <div key={i} className="sp-why-card">
            <div className="sp-why-num">{w.num}</div>
            <h3 className="sp-why-title">{w.title.split('\n').map((l,j) => <span key={j}>{l}<br/></span>)}</h3>
            <p className="sp-why-text">{w.text}</p>
          </div>
           </AnimateIn>
        ))}
      </div>

      {/* Brand story */}
      <div className="sp-brand-story">
        <div className="sp-brand-story-text">
          <p className="sp-eyebrow">— The Brand Story</p>
          <h3 className="sp-story-headline">The Usual Got Boring.<br/><em>So We Fixed It.</em></h3>
          <p className="sp-body" style={{ marginTop:'1rem' }}>
            Every time we ordered in, it was almost always a burger — not because it was
            the only option, but because it was the only thing that really hit. Sandwiches
            were there… just not in the same conversation.
          </p>
          <p className="sp-body" style={{ marginTop:'1rem' }}>
            Too basic. Too safe. Or trying too hard to be healthy. So we built STACK —
            a sandwich brand that refuses to be forgettable. Layered, loud, and built for
            the craving that keeps replaying in your head.
          </p>
          <p className="sp-body" style={{ marginTop:'1rem' }}>
            We started with one obsession: make the kind of sandwich you'd drive across
            Gurugram for. Then make it affordable enough that you actually do it regularly.
          </p>
        </div>
        <div className="sp-brand-story-img">
          <img src="/media/stack-pixel-strecth.png" alt="STACK brand story — gourmet sandwich Gurugram" />
          <div className="sp-brand-story-tag">Est. 2026 · Gurugram</div>
        </div>
      </div>
    </div>
  )
}