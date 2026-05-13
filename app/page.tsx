import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import About from '@/components/About'
import Diferenciais from '@/components/Diferenciais'
import Portfolio from '@/components/Portfolio'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Diferenciais />
        <Portfolio />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
