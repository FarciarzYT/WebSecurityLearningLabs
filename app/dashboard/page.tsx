import Navbar from "@/components/Base/Navbar"
import Footer from "@/components/Base/Footer"

import {AnimatedBackground} from "@/components/landingComponents/AnimatedBackground";


export default function App() {
    return (
        <>
            <AnimatedBackground/>
            <Navbar/>

            <Footer />
        </>
    )
}