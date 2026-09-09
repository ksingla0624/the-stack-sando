const HOURS = [
  { day:'Monday',    time:'11:00 AM – 11:00 PM', busy:false },
  { day:'Tuesday',   time:'11:00 AM – 11:00 PM', busy:false },
  { day:'Wednesday', time:'11:00 AM – 11:00 PM', busy:false },
  { day:'Thursday',  time:'11:00 AM – 11:00 PM', busy:false },
  { day:'Friday',    time:'11:00 AM – 12:00 AM', busy:false },
  { day:'Saturday',  time:'10:00 AM – 12:00 AM', busy:true  },
  { day:'Sunday',    time:'10:00 AM – 11:00 PM', busy:true  },
]

export default function Location() {
  return (
    <div className="sp-section yellow sp-location">
      <div className="sp-location-top">
        <div>
          <p className="sp-eyebrow dark">— Find Us</p>
          <h2 className="sp-section-title dark">Our <em>Location</em></h2>
          <p className="sp-body dark">
            We're setting up in one of Gurugram's most exciting new destinations.
          </p>
        </div>
        
      </div>

      {/* Map + hours */}
      <div className="sp-loc-bottom">
        <div className="sp-loc-details">
          <div className="sp-loc-badge">Flagship Store</div>
          <div className="sp-loc-name">M3M 65th Avenue</div>
          <div className="sp-loc-addr">
            📍 R5, LG-23, M3M 65th Avenue,<br/>
            Sector 65, Gurugram — 122018
          </div>
          <div className="sp-loc-info-grid">
            {[
              { label:'Status', val:'Opening Soon 🔜' },
              { label:'Type',   val:'Dine-In · Takeaway' },
              { label:'Parking',val:'Ample parking at venue' },
              { label:'Metro',  val:'Sector 55-56 (Yellow Line)' },
               { label:'Opening Hours',  val:'12:30 AM – 12:00 AM' },
            ].map((d, i) => (
              <div key={i} className="sp-loc-detail">
                <div className="sp-loc-detail-label">{d.label}</div>
                <div className="sp-loc-detail-val">{d.val}</div>
              </div>
            ))}
          </div>
          <a
            href="https://maps.google.com/?q=M3M+65th+Avenue+Sector+65+Gurugram"
            target="_blank"
            rel="noreferrer"
            className="sp-directions-btn"
          >
            📍 Get Directions
          </a>
        </div>
        <div className="sp-loc-map">
          <iframe
            title="STACK Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.8!2d77.0823!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23b5b1e2c1c1%3A0x1234!2sM3M+65th+Avenue%2C+Sector+65%2C+Gurugram!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter:'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
