import Navbar from './Base/Navbar.tsx'
import Hero from './landingComponents/Hero.tsx'
import CtaWhiteBox from "./landingComponents/CTAWhiteBox.tsx";
import NewLabs from './landingComponents/NewLabs.tsx';

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <CtaWhiteBox />
        <NewLabs />
    </>
  )
}

export default App
