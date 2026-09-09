import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Marquee       from './components/Marquee'
import OrderLocation from './components/OrderLocation'  // NEW combined
import Story         from './components/Story'
import PhotoCarousel from './components/PhotoCarousel'
import WhyStack      from './components/WhyStack'
import Signatures    from './components/Signatures'
import Trust         from './components/Trust'
import Testimonials  from './components/Testimonials'
import Footer        from './components/Footer'
import MenuSection   from './components/MenuSection'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"         aria-label="STACK gourmet sandwiches and flatbreads Gurugram"><Hero /></section>
        <Marquee />
        <section id="order"        aria-label="Visit STACK at M3M 65th Avenue Sector 65 Gurugram or order on Zomato and Swiggy"><OrderLocation /></section>
       <section id="why-stack"    aria-label="Why STACK is built different — gourmet sandwiches Gurugram"><WhyStack /></section>
        <section id="menu"       aria-label="STACK full menu — gourmet sandwiches flatbreads Gurugram"><MenuSection /></section>
        <section id="trust"        aria-label="STACK quality and trust"><Trust /></section>
        <section id="testimonials" aria-label="STACK customer reviews Gurugram"><Testimonials /></section>
        {/* <section id="order"        aria-label="Order STACK on Zomato and Swiggy Gurugram"><OrderLocation /></section> */}

      </main>
      <Footer />
    </>
  )
}