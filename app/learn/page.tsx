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
        id: "room-004",
        title: "TCP/IP Fundamentals",
        category: "MINDSET",
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
            <main className={"flex flex-row justify-center mt-16"}>
                <aside>
                    <SideNavbar/>
                </aside>
                <section className={"flex flex-col"}>
                    <ModuleBox/>
                    <ProgressSection/>
                    <LastActivity room={lastRoom}/>
                </section>

                <aside className={"lg:flex flex-col hidden  "}>
                    <UserStreak/>
                    <UserLevel/>
                </aside>
            </main>
            <Footer/>
        </>
    )
}