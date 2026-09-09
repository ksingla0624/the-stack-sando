// Server component — no 'use client'

export default function Footer() {
  return (
    <footer className="sp-footer">

      {/* ── Top ── */}
      <div className="sp-footer-top">
        <div className="sp-footer-brand">
          <img
            src="/media/Stack Logo Blue.jpeg"
            alt="STACK Gourmet Sandwiches & Flatbreads Gurugram"
            className="sp-footer-logo"
            width="160"
            height="80"
          />
          <p className="sp-footer-tagline">
            Gourmet Sandwiches &amp; Flatbreads<br />
            Gurugram's first premium bread destination.
          </p>
        </div>

        <nav className="sp-footer-nav" aria-label="Footer navigation">
          <div className="sp-footer-nav-col">
            <div className="sp-footer-nav-heading">Navigate</div>
            {[
              { href:'#home',       label:'Home'       },
              { href:'#order',      label:'Order Now'  },
              { href:'#why-stack',  label:'Why STACK?' },
              { href:'#signatures', label:'Our Menu'   },
              { href:'#location',   label:'Find Us'    },
            ].map(item => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>

          <div className="sp-footer-nav-col">
            <div className="sp-footer-nav-heading">Order</div>
            <a href="https://www.zomato.com/ncr/the-stack-sando-sector-65-gurgaon" target="_blank" rel="noreferrer">Zomato ↗</a>
            <a href="https://www.swiggy.com/city/gurgaon/stack-gourmet-sandwiches-and-flatbreads-sohna-road-rest1418250" target="_blank" rel="noreferrer">Swiggy ↗</a>
            <a
              href="https://maps.google.com/?q=M3M+65th+Avenue+Sector+65+Gurugram"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions ↗
            </a>
          </div>

          <div className="sp-footer-nav-col">
            <div className="sp-footer-nav-heading">Contact</div>
            <a href="tel:+918697390093">+91 86973 90093</a>
            <a href="mailto:hello@stacksando.com">hello@stacksando.com</a>
            <a href="https://instagram.com/thestacksando" target="_blank" rel="noreferrer">
              @thestacksando
            </a>
          </div>
        </nav>
      </div>

      {/* ── Location strip ── */}
      <div className="sp-footer-loc">
        <span>📍</span>
        <span>R5, LG-23, M3M 65th Avenue, Sector 65, Gurugram — 122018</span>
      </div>

      {/* ── Bottom ── */}
      <div className="sp-footer-copy">
        <p>© {new Date().getFullYear()} STACK. All rights reserved.</p>
        <p>
          <a href="https://www.zomato.com/ncr/the-stack-sando-sector-65-gurgaon" target="_blank" rel="noreferrer">Zomato</a>
          &nbsp;·&nbsp;
          <a href="https://www.swiggy.com/city/gurgaon/stack-gourmet-sandwiches-and-flatbreads-sohna-road-rest1418250" target="_blank" rel="noreferrer">Swiggy</a>
          &nbsp;·&nbsp;
          <a href="https://instagram.com/eatstack.in" target="_blank" rel="noreferrer">Instagram</a>
        </p>
      </div>

    </footer>
  )
}