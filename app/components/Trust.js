export default function Trust() {
  return (
    <div className="sp-section navy sp-trust">
      <p className="sp-eyebrow">— Quality & Trust</p>
      <h2 className="sp-section-title">What We <em>Never</em> Compromise On.</h2>

      <div className="sp-trust-grid">
        {[
          { icon:'🌾', title:'Premium Ingredients',    text:'Locally sourced, globally inspired. Every ingredient — from the bread flour to the sauces — is chosen with intention.' },
          { icon:'👨‍🍳', title:'Made to Order',        text:'Nothing is pre-made. Every STACK is assembled fresh when you order. You can literally watch it being built.' },
          { icon:'🔬', title:'Two-Day Fermented Dough',text:'Our Panuozzo dough ferments for 48 hours minimum. Better flavour, better texture, better digestion.' },
          { icon:'🌍', title:'Global Bread Traditions', text:'Neapolitan Panuozzo. Japanese Milk Bread. Modern Crogel. Each bread has a heritage — and we honour it.' },
          { icon:'✦',  title:'No Shortcuts',           text:'No sauces from a packet. No reheated bread. No compromises on portion size. That\'s the STACK standard.' },
          { icon:'📦', title:'Packaging That Travels',  text:'Our packaging is designed to keep your STACK crispy and intact whether you\'re dining in or ordering delivery.' },
        ].map((t, i) => (
          <div key={i} className="sp-trust-card">
            <div className="sp-trust-icon">{t.icon}</div>
            <h3 className="sp-trust-title">{t.title}</h3>
            <p className="sp-trust-text">{t.text}</p>
          </div>
        ))}
      </div>

      {/* Quality bar */}
      <div className="sp-quality-bar">
        {[
          { num:'48h',   label:'Dough Fermentation' },
          { num:'100%',  label:'Made to Order'       },
          { num:'5+',    label:'Global Bread Types'  },
          { num:'40+',   label:'Menu Items'          },
          { num:'0',     label:'Compromises'         },
        ].map((q, i) => (
          <div key={i} className="sp-quality-item">
            <div className="sp-quality-num">{q.num}</div>
            <div className="sp-quality-label">{q.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}