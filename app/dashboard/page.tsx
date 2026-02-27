import Navbar from "@/components/Base/Navbar"
import Footer from "@/components/Base/Footer"

import {AnimatedBackground} from "@/components/Base/AnimatedBackground";
import {LearningBox} from "@/components/dashboardComponenets/LearningBox"
import CustomTerminal from "@/components/dashboardComponenets/Terminal"
import LastActivity from "@/components/learnDashBoardComponents/LastActivity";
import {lastRoom} from "@/Data/LastRoomData";

export default function App() {


    return (
        <>
            <AnimatedBackground/>
            <Navbar/>
            <main>
                <LearningBox/>
                <LastActivity room={lastRoom}/>
                <CustomTerminal/>
            </main>
            <Footer/>
        </>
    )
}