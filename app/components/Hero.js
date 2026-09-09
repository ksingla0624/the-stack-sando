'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    // staggered entrance for each hero element
    const els = heroRef.current?.querySelectorAll('[data-anim]')
    if (!els) return
    els.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 200 + i * 120)
    })
  }, [])

  return (
    <div className="sp-hero" ref={heroRef}>


          <img
            src="/media/gallery/WhatsApp Image 2026-05-26 at 23.25.55.jpeg"
            className={`sp-hero-slide active`}
            role="img"
            aria-label='STACK gourmet sandwiches and flatbreads Gurugram — Panuozzo, Crogel, Milk Bread, Florentine. Bold global flavours, premium ingredients, made to order at M3M 65th Avenue Sector 65 Gurugram.'
          />
        
      {/* ── Left — content ── */}
      <div className="sp-hero-left">

        <div className="sp-hero-tag" data-anim>
          <span className="sp-hero-tag-dot" />
          Gurugram's First Gourmet Sandwich Brand
        </div>

        <h1 className="sp-hero-title" data-anim>
          <span className="sp-hero-word">Gourmet</span>
          <span className="sp-hero-word accent">Sandwiches</span>
          <span className="sp-hero-word">&amp; Flatbreads</span>
        </h1>

        <p className="sp-hero-desc" data-anim>
          Panuozzo. Crogel. Milk Bread. Florentine. 
          Bold global flavours, premium ingredients, made to order —
          at M3M 65th Avenue, Sector 65, Gurugram.
        </p>

        {/* Category pills — immediately tells user what we serve */}
        <div className="sp-hero-pills" data-anim>
          {['🫓 Panuozzo','🥐 Crogel','🍞 Milk Bread','🌿 Florentine','🔥 Flatbreads'].map((p, i) => (
            <span key={i} className="sp-hero-pill">{p}</span>
          ))}
        </div>

        <div className="sp-hero-actions" data-anim>
<a          
            href="https://www.zomato.com/ncr/the-stack-sando-sector-65-gurgaon"
            target="_blank"
            rel="noreferrer"
            className="sp-hero-btn zomato"
          >
            Order on Zomato
          </a>
          <a
            href="https://www.swiggy.com/city/gurgaon/stack-gourmet-sandwiches-and-flatbreads-sohna-road-rest1418250"
            target="_blank"
            rel="noreferrer"
            className="sp-hero-btn swiggy"
          >
            Order on Swiggy
          </a>
        </div>

        <div className="sp-hero-meta" data-anim>
          <div className="sp-hero-meta-item">
            <span className="sp-hero-meta-num">4.9</span>
            <span className="sp-hero-meta-stars">★★★★★</span>
            <span className="sp-hero-meta-label">Google Rating</span>
          </div>
          <div className="sp-hero-meta-divider" />
          <div className="sp-hero-meta-item">
            <span className="sp-hero-meta-num">40+</span>
            <span className="sp-hero-meta-label">Menu Items</span>
          </div>
          <div className="sp-hero-meta-divider" />
          <div className="sp-hero-meta-item">
            <span className="sp-hero-meta-num">100%</span>
            <span className="sp-hero-meta-label">Made to Order</span>
          </div>
        </div>

      </div>

      {/* ── Right — food photography grid ── */}
      <div className="sp-hero-right" data-anim>

        {/* Main large photo */}
        <div className="sp-hero-img-main">
          <img
            src="/media/Flatbreads-stack.png"
            alt="STACK gourmet flatbread Gurugram"
        
          />
        </div>

        {/* Two smaller photos */}
        <div className="sp-hero-img-grid">
          <div className="sp-hero-img-sm">
            <img
              src="/media/florantine-stack.png"
              alt="STACK gourmet florentine Gurugram"
              loading="eager"
            />
            <div className="sp-hero-img-label">Florantine</div>
          </div>
          <div className="sp-hero-img-sm">
            <img
              src="/media/crogel-stack-focused.png"
              alt="STACK gourmet crogel sandwich Gurugram"
              loading="eager"
            />
            <div className="sp-hero-img-label">Crogel</div>
          </div>
        </div>

        {/* Floating badge */}
        <div className="sp-hero-badge">
          <span className="sp-hero-badge-emoji">🔥</span>
          <span>Live on Zomato &amp; Swiggy</span>
        </div>

      </div>
{/* ── Scroll hint ── */}
      <div className="sp-scroll-hint">
        <span>Scroll</span>
        <div className="sp-scroll-line" />
      </div>
    </div>
  )
}