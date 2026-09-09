'use client'
import { useEffect, useRef } from 'react'

export default function AnimateIn({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const transforms = {
      up:    'translateY(40px)',
      left:  'translateX(-40px)',
      right: 'translateX(40px)',
      scale: 'scale(0.94)',
    }

    el.style.opacity   = '0'
    el.style.transform = transforms[direction] || transforms.up
    el.style.transition = 'none'

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.transition = `opacity 0.75s ${delay}ms cubic-bezier(0.22,1,0.36,1), transform 0.75s ${delay}ms cubic-bezier(0.22,1,0.36,1)`
          el.style.opacity   = '1'
          el.style.transform = 'none'
        }, 0)
        obs.disconnect()
      }
    }, { threshold: 0.12 })

    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, direction])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}