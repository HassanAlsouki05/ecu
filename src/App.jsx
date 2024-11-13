import './App.css'
import Brands from './Komponenter/Brands'
import Faq from './Komponenter/Faq'
import FeatuersSection from './Komponenter/FeatuersSection'
import Footer from './Komponenter/Footer'
import Header from './Komponenter/Header'
import Hero from './Komponenter/Hero'
import Hiw from './Komponenter/Hiw'
import Mymts from './Komponenter/Mymts'
import StarRating from './Komponenter/StarRating'
import Subsc from './Komponenter/Subsc'
import Testimonials from './Komponenter/Testimonials'

function App() {
  

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <FeatuersSection />
        <Hiw />
        <Mymts />
        <Testimonials />
        <Faq />
        <Subsc />
      </main>
      <Footer />
    </>
  )
}

export default App
