'use client'
import { useRef, useEffect } from 'react'

const PHOTOS = [
  { src: '/media/gallery/WhatsApp Image 2026-05-20 at 19.58.37.jpeg', caption: 'The OG Stack' },
  { src: '/media/gallery/WhatsApp Image 2026-05-24 at 14.11.51.jpeg', caption: 'Panuozzo' },
  { src: '/media/gallery/WhatsApp Image 2026-05-26 at 23.25.55.jpeg', caption: 'Crogel' },
  { src: '/media/gallery/WhatsApp Image 2026-04-30 at 18.32.36.jpeg', caption: 'Flatbread' },
  { src: '/media/WhatsApp Image 2026-05-26 at 23.25.56.jpeg',          caption: 'Fresh Daily' },
]

export default function PhotoCarousel() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    // auto-scroll
    let raf
    let pos = 0
    const speed = 0.5
    function animate() {
      pos += speed
      if (pos >= track.scrollWidth / 2) pos = 0
      track.style.transform = `translateX(-${pos}px)`
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    // pause on hover
    track.addEventListener('mouseenter', () => cancelAnimationFrame(raf))
    track.addEventListener('mouseleave', () => { raf = requestAnimationFrame(animate) })
    return () => cancelAnimationFrame(raf)
  }, [])

  const doubled = [...PHOTOS, ...PHOTOS]

  return (
    <div className="sp-carousel" aria-label="STACK food photos">
      <div className="sp-carousel-track" ref={trackRef}>
        {doubled.map((p, i) => (
          <div key={i} className="sp-carousel-card">
            <img src={p.src} alt={`STACK ${p.caption} — Gourmet sandwich Gurugram`} loading="lazy" />
            <div className="sp-carousel-caption">{p.caption}</div>
          </div>
        ))}
      </div>
    </div>
  )
}