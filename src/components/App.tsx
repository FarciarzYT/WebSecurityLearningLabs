import Navbar from './Base/Navbar.tsx'
import Hero from './landingComponents/Hero.tsx'
import CtaWhiteBox from "./landingComponents/CTAWhiteBox.tsx";
import NewLabs from './landingComponents/NewLabs.tsx';
import AnimatedBackground from "./landingComponents/AnimatedBackground.tsx";

function App() {
  return (
    <>
        <AnimatedBackground/>
        <Navbar />
        <Hero />
        <CtaWhiteBox />
        <NewLabs />
    </>
  )
}

export default App
