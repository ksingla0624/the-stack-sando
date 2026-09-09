const GALLERY = [
  { src: '/media/gallery/WhatsApp Image 2026-05-20 at 19.58.37.jpeg', cls: 'tall', alt: 'STACK food' },
  { src: '/media/gallery/WhatsApp Image 2026-05-24 at 14.11.51.jpeg', cls: '',     alt: 'STACK food' },
  { src: '/media/gallery/WhatsApp Image 2026-05-26 at 23.25.55.jpeg', cls: '',     alt: 'STACK food' },
  { src: '/media/gallery/WhatsApp Image 2026-04-30 at 18.32.36.jpeg', cls: 'wide', alt: 'STACK food' },
]

export default function Lookbook() {
  return (
    <div className="sp-section yellow sp-lookbook">
      <p className="sp-eyebrow dark">— The Lookbook</p>
      <h2 className="sp-section-title dark">
        STACKED TO IMPRESS.<br/>BUILT TO CRAVE.
      </h2>
      <p className="sp-body dark" style={{ maxWidth: '600px', marginTop: '1rem', marginBottom: '3rem' }}>
        The kind of craving that keeps replaying in your head. Every layer built with
        purpose, every bite earns its place.
      </p>
      <div className="sp-gallery">
        {GALLERY.map((img, i) => (
          <div key={i} className={`sp-gallery-card ${img.cls}`}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}
