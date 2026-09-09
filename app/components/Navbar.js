'use client'
import { useState, useEffect, useRef } from 'react'

const NAV_ITEMS = [
  { href: '#home',       label: 'HOME'       },
      { href: '#order',      label: 'Find us'  },

  { href: '#why-stack',  label: 'WHY US?' },
  // { href: '#location',   label: 'Find Us'    },
  // { href: '#contact',    label: 'Contact'    },
      { href: '#menu',      label: 'MENU'  },


]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const [activeId,   setActiveId]   = useState('home')

  // nav shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // active section tracker
  useEffect(() => {
    const ids = NAV_ITEMS.map(n => n.href.replace('#', ''))
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o && o.disconnect())
  }, [])

  // body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  function scrollTo(href) {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <nav className={`sp-nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="sp-nav-logo-wrap" onClick={e => { e.preventDefault(); scrollTo('#home') }}>
          <img src="/media/2B97ECE1-E59E-42A1-9DEC-B75ADB466DB2_4_5005_c.jpeg" alt="STACK" className="sp-nav-logo" />
        </a>

        <ul className="sp-nav-links">
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeId === item.href.replace('#','') ? 'active' : ''}
                onClick={e => { e.preventDefault(); scrollTo(item.href) }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* <a href="#contact" className="sp-nav-cta" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>
          Get Early Access
        </a> */}

        <button
          className={`sp-hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`sp-mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="sp-mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
        {NAV_ITEMS.map(item => (
          <a
            key={item.href}
            href={item.href}
            className={activeId === item.href.replace('#','') ? 'active' : ''}
            onClick={e => { e.preventDefault(); scrollTo(item.href) }}
          >
            {item.label}
          </a>
        ))}
        <a href="#contact" className="sp-mobile-cta" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>
          Get Early Access →
        </a>
      </div>
    </>
  )
}
