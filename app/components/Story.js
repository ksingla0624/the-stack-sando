// export default function Story() {
//   return (
//     <div className="sp-split navy">
//       <div className="sp-split-img">
//         <img src="/media/stack-pixel-strecth.png" alt="STACK brand visual" />
//       </div>
//       <div className="sp-split-text">
//         <p className="sp-eyebrow">— The Story</p>
//         <h2 className="sp-section-title">THE USUAL<br/>GOT<br/>BORING.</h2>
//         <p className="sp-body">
//           So we stopped making the usual. STACK is what happens when a sandwich refuses
//           to be forgettable — layered, loud, and built for the craving that keeps
//           replaying in your head.
//         </p>
//         <div className="sp-stats-row">
//           {[
//             { num: '5+',   label: 'Global Bread Types'   },
//             { num: '40+',  label: 'Menu Items'            },
//             { num: '100%', label: 'Made to Order'         },
//             { num: '01',   label: 'Flagship — Gurugram'  },
//           ].map((s, i) => (
//             <div key={i} className="sp-stat">
//               <div className="sp-stat-num">{s.num}</div>
//               <div className="sp-stat-label">{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }



import AnimateIn from './AnimateIn'

export default function Story() {
  return (
    <div className="sp-split navy">
      <AnimateIn direction="left">
        <div className="sp-split-img">
        <img src="/media/stack-pixel-strecth.png" alt="STACK brand visual" />
        </div>
      </AnimateIn>
      <AnimateIn direction="right" delay={150}>
        <div className="sp-split-text">
          <p className="sp-eyebrow">— The Story</p>
          <h2 className="sp-section-title">THE USUAL<br/>GOT<br/>BORING.</h2>
            <p className="sp-body">
          So we stopped making the usual. STACK is what happens when a sandwich refuses
          to be forgettable — layered, loud, and built for the craving that keeps
          replaying in your head.
        </p>
        <div className="sp-stats-row">
          {[
            { num: '5+',   label: 'Global Bread Types'   },
            { num: '40+',  label: 'Menu Items'            },
            { num: '100%', label: 'Made to Order'         },
            { num: '01',   label: 'Flagship — Gurugram'  },
          ].map((s, i) => (
            <div key={i} className="sp-stat">
              <div className="sp-stat-num">{s.num}</div>
              <div className="sp-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      </AnimateIn>
    </div>
  )
}