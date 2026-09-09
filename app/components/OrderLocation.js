export default function OrderLocation() {
  return (
    <div className="sp-orderloc" itemScope itemType="https://schema.org/FoodEstablishment">
      <meta itemProp="name" content="STACK" />
      <meta itemProp="url" content="https://stacksando.com" />

      <div className="sp-orderloc-main">

        {/* Left */}
        <div className="sp-orderloc-info">
          <p className="sp-eyebrow">— Find Us</p>
          <h2 className="sp-section-title">
            We're at <em>M3M 65th Avenue.</em>
          </h2>

          <div
            className="sp-orderloc-address"
            itemScope
            itemType="https://schema.org/PostalAddress"
            itemProp="address"
          >
            <div className="sp-orderloc-pin">📍</div>
            <div>
              <div className="sp-orderloc-outlet">
                <span itemProp="streetAddress">R5, LG-23, M3M 65th Avenue, Sector 65</span>
              </div>
              <div className="sp-orderloc-street">
                <span itemProp="addressLocality">Gurugram</span>,{' '}
                <span itemProp="addressRegion">Haryana</span>{' — '}
                <span itemProp="postalCode">122018</span>
              </div>
              <div className="sp-orderloc-hours">
                Mon–Sun &nbsp;
                <time itemProp="openingHours" dateTime="Mo-Su 12:30-00:00">
                  12:30 PM – 12:00 AM
                </time>
              </div>
            </div>
          </div>

        
          <a
            href="https://maps.google.com/?q=The+Stack+Sando"
            target="_blank"
            rel="noreferrer noopener"
            className="sp-findus-btn"
            aria-label="Get directions to STACK at M3M 65th Avenue Gurugram"
          >
            📍 Find Us
          </a>
        </div>

        {/* Right */}
        <div className="sp-orderloc-right">
          <div className="sp-orderloc-delivery-label">
            <span className="sp-orderloc-dot" />
            Also available for delivery
          </div>

          <div className="sp-orderloc-platforms">
            <a
              href="https://www.zomato.com/ncr/the-stack-sando-sector-65-gurgaon"
              target="_blank"
              rel="noreferrer noopener"
              className="sp-platform-btn zomato"
              aria-label="Order STACK gourmet sandwiches on Zomato Gurugram"
            >
              <span className="sp-platform-btn-name">Zomato</span>
              <span className="sp-platform-btn-action">Order Now →</span>
            </a>
            <a
              href="https://www.swiggy.com/city/gurgaon/stack-gourmet-sandwiches-and-flatbreads-sohna-road-rest1418250"
              target="_blank"
              rel="noreferrer noopener"
              className="sp-platform-btn swiggy"
              aria-label="Order STACK gourmet sandwiches on Swiggy Gurugram"
            >
              <span className="sp-platform-btn-name">Swiggy</span>
              <span className="sp-platform-btn-action">Order Now →</span>
            </a>
          </div>

          <p className="sp-orderloc-delivery-note">
            Delivery available across Gurugram &amp; nearby areas
          </p>
        </div>

      </div>
    </div>
  )
}