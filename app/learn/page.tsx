import SideNavbar from "@/components/Base/SideNavbar"
import Footer from "@/components/Base/Footer"
import {AnimatedBackground} from "@/components/Base/AnimatedBackground";

import ProgressSection from "@/components/learnDashBoardComponents/ProgressSection";
import ModuleBox from "@/components/learnDashBoardComponents/ModulesBox"
import RoomData from "@/types/RoomData";
import LastActivity from "@/components/ui/LastActivity";
import UserStreak from "@/components/learnDashBoardComponents/UserStreak";
import UserLevel from "@/components/learnDashBoardComponents/UserLevel";

export default function Learn(){
    const lastRoom: RoomData = {
        id: "room-001",
        title: "TCP/IP Fundamentals",
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
            <main className={"flex flex-row h-full "}>
                <SideNavbar/>
                <section className={"flex flex-col"}>
                    <ModuleBox/>
                    <ProgressSection/>
                    <LastActivity room={lastRoom}/>
                </section>
                <div className={"flex flex-col "}>
                <UserStreak/>
                <UserLevel/>
                </div>

            </main>
            <Footer/>
        </>
    )
}