import Navbar from '../components/Base/Navbar.tsx'
import Footer from "../components/Base/Footer.tsx"

import {AnimatedBackground} from "../components/landingComponents/AnimatedBackground.tsx";
import Hero from '../components/landingComponents/Hero.tsx'
import Features from "../components/landingComponents/Features.tsx"
import NewLabs from '../components/landingComponents/NewLabs.tsx';
import WhyUs from "../components/landingComponents/WhyUs.tsx";
import UserCounter from "../components/landingComponents/UserCounter.tsx";

function App() {
    return (
        <>
            <AnimatedBackground/>
            <Navbar />
            <Hero />
            <Features />
            <WhyUs />
            <NewLabs />
            <UserCounter />
            <Footer />
        </>
    )
}

export default App
