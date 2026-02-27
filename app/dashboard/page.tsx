import Navbar from "@/components/Base/Navbar"
import Footer from "@/components/Base/Footer"

import {AnimatedBackground} from "@/components/Base/AnimatedBackground";
import {LearningBox} from "@/components/dashboardComponenets/LearningBox"
import CustomTerminal from "@/components/dashboardComponenets/Terminal"
import LastActivity from "@/components/learnDashBoardComponents/LastActivity";

import RoomType from "@/types/RoomType";
export default function App() {
    const lastRoom: RoomType = {
        id: "room-001",
        title: "Network Intrusion Analysis",
        category: "Blue Team",
        difficulty: "Medium",
        progress: 70,
        // eslint-disable-next-line react-hooks/purity
        startedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        totalTasks: 10,
        completedTasks: 7,
    };

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