'use client'
import { useState } from 'react'

const LIMIT = 160 // characters before truncation

export default function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text.length > LIMIT
  const displayed = expanded || !isLong
    ? review.text
    : review.text.slice(0, LIMIT).trimEnd()

  return (
    <article className="sp-review-card">
      <div className="sp-review-top">
        <span className="sp-review-stars-sm" aria-label="5 stars">★★★★★</span>
        <span className="sp-review-via">via Google</span>
      </div>

      <p className="sp-review-body">
        "{displayed}{!expanded && isLong ? '...' : '"'}
        {isLong && (
          <button
            className="sp-review-toggle"
            onClick={() => setExpanded(o => !o)}
            aria-label={expanded ? 'Show less' : 'Read full review'}
          >
            {expanded ? ' show less' : ' read more'}
          </button>
        )}
        {expanded && '"'}
      </p>

      <div className="sp-review-author">
        <div className="sp-review-initials">{review.name.charAt(0)}</div>
        <div>
          <div className="sp-review-name">{review.name}</div>
          {review.location && <div className="sp-review-loc">📍 {review.location}</div>}
        </div>
      </div>
    </article>
  )
}   