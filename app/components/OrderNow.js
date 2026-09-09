export default function OrderNow() {
  return (
    <div className="sp-order-section" id="order">
      <div className="sp-order-inner">
        <p className="sp-eyebrow">— We're Live</p>
        <h2 className="sp-section-title">
          Order <em>Now</em>
        </h2>
        <p className="sp-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
          STACK is now live on Zomato and Swiggy. Fresh, handcrafted, delivered to your door — 
          or walk in to our outlet at M3M 65th Avenue, Sector 65, Gurugram.
        </p>

        <div className="sp-order-platforms">
          <a
            href="https://www.zomato.com/ncr/the-stack-sando-sector-65-gurgaon"
            target="_blank"
            rel="noreferrer noopener"
            className="sp-platform-card zomato"
            aria-label="Order STACK on Zomato"
          >
            <div className="sp-platform-logo">
              <img src="/media/zomato-logo.png" alt="Zomato" />
            </div>
            <div className="sp-platform-info">
              <div className="sp-platform-name">Zomato</div>
              <div className="sp-platform-sub">Delivery · Pickup</div>
            </div>
            <div className="sp-platform-cta">Order Now →</div>
          </a>

          <a
            href="https://www.swiggy.com/city/gurgaon/stack-gourmet-sandwiches-and-flatbreads-sohna-road-rest1418250"
            target="_blank"
            rel="noreferrer noopener"
            className="sp-platform-card swiggy"
            aria-label="Order STACK on Swiggy"
          >
            <div className="sp-platform-logo">
              <img src="/media/swiggy-logo.png" alt="Swiggy" />
            </div>
            <div className="sp-platform-info">
              <div className="sp-platform-name">Swiggy</div>
              <div className="sp-platform-sub">Delivery · Pickup</div>
            </div>
            <div className="sp-platform-cta">Order Now →</div>
          </a>
        </div>

        <div className="sp-order-location">
          <span>📍</span>
          <span>R5, LG-23, M3M 65th Avenue, Sector 65, Gurugram — 122018</span>
          <a
            href="https://maps.google.com/?q=M3M+65th+Avenue+Sector+65+Gurugram"
            target="_blank"
            rel="noreferrer"
            className="sp-order-directions"
          >
            Get Directions ↗
          </a>
        </div>
      </div>
    </div>
  )
}