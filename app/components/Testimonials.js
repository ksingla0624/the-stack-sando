import ReviewCard from './ReviewCard'


const REVIEWS = [
  {
    name: 'Anureet Arora',
    rating: 5,
    text: 'I really loved their flat bread and coffee. The food is upto the mark and so is the ambience and the hospitality! Next time I’m going back to try their Panuozzo 😋',
  },
  {
    name: 'Vanya Negi',
    rating: 5,
    text: 'It’s amazing..I loved the food here🫶🏻 I’ll make sure of visiting this place again🫠',
  },
  {
    name: 'divyanshi pradhan  ',
    location: 'Golf Course Road',
    rating: 5,
    text: 'Absolutely loved my experience here! ❤️ The Chicken Panuozzo was absolutely delicious—so flavourful, fresh, and perfectly made. The Cigar Rolls were another favourite; crispy, tasty, and seriously addictive! 😍 The Crogel was also really good and such a unique concept. Everything we tried was packed with flavour and clearly made with a lot of love. Definitely a place I’d recommend to anyone who loves trying delicious and unique food! ✨',
  },
  {
    name: 'Sneha T.',
    location: 'Sohna Road',
    rating: 5,
    text: 'The Paneer Katsu Sando is incredible — not a sad veg replacement. Genuinely better than most non-veg options at other places.',
  },
  {
    name: 'Vikram D.',
    location: 'Cyber City',
    rating: 5,
    text: 'Best lunch spot near the office. Quick, fresh, premium. The Dark Horse flatbread is my go-to. 10/10 every single time.',
  },
  {
    name: 'Ananya R.',
    location: 'Sector 65',
    rating: 5,
    text: 'Ordered on Swiggy — arrived crispy, layered, massive. Packaging is excellent. Will be ordering weekly without question.',
  },
]

export default function Testimonials() {
  return (
    <section className="sp-reviews-section navy" aria-label="Customer reviews for STACK Gurugram">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Restaurant',
            name: 'STACK',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              reviewCount: String(REVIEWS.length),
              bestRating: '5',
            },
            review: REVIEWS.map(r => ({
              '@type': 'Review',
              author: { '@type': 'Person', name: r.name },
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              reviewBody: r.text,
            })),
          })
        }}
      />

      <div className="sp-reviews-header">
        <p className="sp-eyebrow dark">— Google Reviews</p>
        <div className="sp-reviews-title-row">
          <h2 className="sp-section-title dark">
            What People <em>Say.</em>
          </h2>
          <div className="sp-reviews-rating">
            <div className="sp-reviews-stars">★★★★★</div>
            <div className="sp-reviews-score">4.9<span className="sp-reviews-count">(45 reviews)</span></div>
            <div className="sp-reviews-count">on Google</div>
          </div>
        </div>
      </div>

      <div className="sp-reviews-track-wrap">
        <div className="sp-reviews-track">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      <div className="sp-reviews-footer">
        <a
          href="https://g.page/r/CaJCUxFz5G1PEBM/review"
          target="_blank"
          rel="noreferrer noopener"
          className="sp-reviews-cta"
        >
          ⭐ Leave a Review on Google
        </a>
      </div>

    </section>
  )
}