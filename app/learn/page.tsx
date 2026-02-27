import AltNavbar from "@/components/Base/AltNavbar"
import AltFooter from "@/components/Base/AltFooter"
import {AnimatedBackground} from "@/components/Base/AnimatedBackground";

import ModuleBox from "@/components/learnDashBoardComponents/ModulesBox"
import RoomType from "@/types/RoomType";
import UserStreak from "@/components/learnDashBoardComponents/UserStreak";
import UserLevel from "@/components/learnDashBoardComponents/UserLevel";
import SkillChart from "@/components/learnDashBoardComponents/SkillChart";
import SuggestedModules from "@/components/learnDashBoardComponents/SuggestedModules";
import LastActivity from "@/components/learnDashBoardComponents/LastActivity";

export default function Learn(){
    const lastRoom: RoomType = {
        id: "room-004",
        title: "TCP/IP Fundamentals",
        category: "MINDSET",
        difficulty: "Medium",
        description: "none",
        estimatedHours: 17,
        progress: 70,
        // eslint-disable-next-line react-hooks/purity
        startedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        totalTasks: 10,
        completedTasks: 7,
    };

    return (
        <>
            <AnimatedBackground/>
            <div className="2xl:flex flex-row">
            <aside className={"flex-col"}>
                <AltNavbar/>
                <UserStreak/>
                <UserLevel/>
            </aside>
                <main className="flex flex-col ">
                    <ModuleBox/>
                    <div className="2xl:flex flex-row mb-8 gap-8 2xl:min-w-6xl">
                        <SkillChart/>
                        <SuggestedModules/>
                    </div>
                <LastActivity room={lastRoom}/>
                </main>
            </div>
            <AltFooter/>
        </>
    )
}