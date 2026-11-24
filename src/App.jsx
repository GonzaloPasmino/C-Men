import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Universe from './components/Universe'
import Archive from './components/Archive'
import Plans from './components/Plans'
import Crew from './components/Crew'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Universe />
        <Archive />
        <Plans />
        <Crew />
      </main>
      <Footer />
    </>
  )
}
