import Navbar from './Base/Navbar.tsx'
import Hero from './landingComponents/Hero.tsx'
import CtaWhiteBox from "./landingComponents/CTAWhiteBox.tsx";
import NewLabs from './landingComponents/NewLabs.tsx';
// import AnimatedBackground from "./landingComponents/AnimatedBackground.tsx";
import UserCounter from "./landingComponents/UserCounter.tsx";
import WhyUs from "./landingComponents/WhyUs.tsx";
import Footer from "./Base/Footer.tsx"
function App() {
  return (
    <>
        {/*<AnimatedBackground/>*/}
        <Navbar />
        <Hero />
        <CtaWhiteBox />

        <UserCounter />
        <WhyUs />
        <NewLabs />
        <Footer />
    </>
  )
}

export default App
