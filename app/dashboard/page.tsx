import Navbar from "@/components/Base/Navbar"
import Footer from "@/components/Base/Footer"

import {AnimatedBackground} from "@/components/landingComponents/AnimatedBackground";
import {LearningBox} from "@/components/dashboardComponenets/LearningBox"
import CustomTerminal from "@/components/dashboardComponenets/Terminal"
import LastActivity from "@/components/dashboardComponenets/LastActivity";
export default function App() {
    return (
        <>
            <AnimatedBackground/>
            <Navbar/>
            <main className={"min-h-full"}>
                <LearningBox/>
                <LastActivity/>
                <CustomTerminal/>
            </main>
            <Footer />
        </>
    )
}