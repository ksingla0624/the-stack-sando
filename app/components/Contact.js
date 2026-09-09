'use client'
import { useState } from 'react'

const FAQS = [
  { q:'When is STACK opening?',                 a:'Opening very soon at M3M 65th Avenue, Sector 65, Gurugram. Drop your email to get notified the moment we launch.' },
  { q:'What kind of food does STACK serve?',    a:'Gourmet sandwiches and flatbreads made with premium international breads — Panuozzo, Crogel, Japanese Milk Bread, Florentine, and Flatbreads — filled with bold global and Indian-inspired ingredients.' },
  { q:'Is there a veg menu?',                   a:'Absolutely. Every bread category has multiple veg options — from Avocado Thecha Smash Crogels to Tandoori Mushroom Flatbreads.' },
  { q:'What is a Panuozzo?',                    a:'A Neapolitan sandwich made from pizza dough that is baked, split open, and filled. STACK uses a two-day sourdough fermentation process for deeper flavour and a distinctive chewy texture.' },
  { q:'What is the price range?',               a:'STACK is positioned as accessible premium — delivering gourmet quality at everyday prices. A brand you can visit regularly, not just on special occasions.' },
  { q:'Do you offer catering or bulk orders?',  a:'Yes! We welcome catering inquiries for corporate events, parties, and bulk orders. Use the contact form with "Catering / Bulk Orders" selected.' },
  { q:'Are franchise opportunities available?', a:'We are open to discussing franchise partnerships with serious operators. Reach out via the contact form with "Franchise Inquiry" selected.' },
  { q:'Will STACK be on Swiggy and Zomato?',    a:'Yes — STACK will be available for delivery on Swiggy and Zomato from launch day. Stay tuned for our store links.' },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`sp-faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
      <div className="sp-faq-q">
        <span className="sp-faq-num">{String(index + 1).padStart(2,'0')}</span>
        <span>{faq.q}</span>
        <span className="sp-faq-icon">{open ? '−' : '+'}</span>
      </div>
      {open && <div className="sp-faq-a">{faq.a}</div>}
    </div>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name:'', phone:'', email:'', interest:'Early Access / Launch Updates', message:'' })
  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => { e.preventDefault(); setSent(true); setForm({ name:'', phone:'', email:'', interest:'Early Access / Launch Updates', message:'' }) }

  return (
    <div className="sp-section navy sp-contact">
      <div className="sp-contact-grid">
        {/* Left */}
        <div className="sp-contact-left">
          <p className="sp-eyebrow">— Say Hello</p>
          <h2 className="sp-section-title">Let's <em>Talk</em></h2>
          <p className="sp-body" style={{ marginTop:'1rem' }}>
            Pre-launch inquiries, franchise interest, catering partnerships, or just
            want to be first in line — we'd love to hear from you.
          </p>
          <div className="sp-contact-list">
            {[
              { icon:'📍', label:'Location', val:'R5, LG-23, M3M 65th Avenue, Sector 65, Gurugram' },
              { icon:'✉️', label:'Email',    val:'hello@stacksando.com' },
              { icon:'📞', label:'Phone',    val:'+91 86973 90093' },
              { icon:'🕐', label:'Hours',    val:'Mon–Sun · 11:00 AM – 11:00 PM' },
            ].map((c, i) => (
              <div key={i} className="sp-contact-row">
                <div className="sp-contact-icon">{c.icon}</div>
                <div>
                  <div className="sp-contact-label">{c.label}</div>
                  <div className="sp-contact-val">{c.val}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="sp-socials">
            {[
              { icon:'📸', label:'Instagram', handle:'@eatstack.in',  href:'https://instagram.com/eatstack.in' },
              { icon:'🟢', label:'WhatsApp',  handle:'Chat with us',  href:'https://wa.me/918697390093' },
              { icon:'🛵', label:'Swiggy',    handle:'Coming Soon',   href:'#' },
              { icon:'🍽️', label:'Zomato',   handle:'Coming Soon',   href:'#' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className="sp-social-link">
                <span>{s.icon}</span>
                <div>
                  <div className="sp-social-name">{s.label}</div>
                  <div className="sp-social-handle">{s.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form className="sp-form" onSubmit={submit}>
          <div className="sp-form-row">
            <div className="sp-fg"><label>Name</label><input name="name" type="text" placeholder="Your name" value={form.name} onChange={change} required /></div>
            <div className="sp-fg"><label>Phone</label><input name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={change} /></div>
          </div>
          <div className="sp-fg"><label>Email</label><input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={change} required /></div>
          <div className="sp-fg">
            <label>I'm interested in</label>
            <select name="interest" value={form.interest} onChange={change}>
              <option>Early Access / Launch Updates</option>
              <option>Franchise Inquiry</option>
              <option>Catering / Bulk Orders</option>
              <option>Media / Press</option>
              <option>Just Saying Hi 👋</option>
            </select>
          </div>
          <div className="sp-fg"><label>Message</label><textarea name="message" placeholder="Tell us what's on your mind..." value={form.message} onChange={change} /></div>
          <button type="submit" className="sp-submit">Send Message →</button>
          {sent && <p className="sp-form-success">Message sent! We'll be in touch soon. ✦</p>}
        </form>
      </div>

      {/* FAQ */}
      <div className="sp-faq-section">
        <p className="sp-eyebrow">— Got Questions?</p>
        <h2 className="sp-section-title">Frequently <em>Asked</em></h2>
        <div className="sp-faq-list">
          {FAQS.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>
      </div>
    </div>
  )
}
