import Navbar from "@/components/Base/Navbar"
import Footer from "@/components/Base/Footer"

import {AnimatedBackground} from "@/components/Base/AnimatedBackground";
import Hero from '@/components/landingComponents/Hero'
import Features from "@/components/landingComponents/Features"
import NewLabs from '@/components/landingComponents/NewLabs';
import WhyUs from "@/components/landingComponents/WhyUs";
import UserCounter from "@/components/landingComponents/UserCounter";

export default function App() {
  return (
      <>
        <AnimatedBackground/>
        <Navbar />
          <main>
            <Hero />
            <Features />
            <WhyUs />
            <NewLabs />
            <UserCounter />
          </main>
        <Footer />
      </>
  )
}