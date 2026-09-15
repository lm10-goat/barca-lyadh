import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import ContentPillars from './components/ContentPillars.jsx'
import Coverage from './components/Coverage.jsx'
import FeaturedContent from './components/FeaturedContent.jsx'
import SocialAndStats from './components/SocialAndStats.jsx'
import Partnerships from './components/Partnerships.jsx'
import WhyUs from './components/WhyUs.jsx'
import SponsorCta from './components/SponsorCta.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-base text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ContentPillars />
        <Coverage />
        <FeaturedContent />
        <SocialAndStats />
        <Partnerships />
        <WhyUs />
        <SponsorCta />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
