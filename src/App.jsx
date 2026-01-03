import Hero from './components/Hero'
import AdSection from './components/AdSection'
import Footer from './components/Footer'
import { adsData } from './data/adsData'

function App() {
  return (
    <div className="app">
      <Hero />
      {adsData.map((ad, index) => (
        <AdSection key={ad.id} ad={ad} index={index} />
      ))}
      <Footer />
    </div>
  )
}

export default App
