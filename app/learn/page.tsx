import AltNavbar from "@/components/Base/AltNavbar"
import AltFooter from "@/components/Base/AltFooter"
import {AnimatedBackground} from "@/components/Base/AnimatedBackground";

import ModuleBox from "@/components/learnDashBoardComponents/ModulesBox"
import UserStreak from "@/components/learnDashBoardComponents/UserStreak";
import UserLevel from "@/components/learnDashBoardComponents/UserLevel";
import SkillChart from "@/components/learnDashBoardComponents/SkillChart";
import SuggestedModules from "@/components/learnDashBoardComponents/SuggestedModules";
import LastActivity from "@/components/learnDashBoardComponents/LastActivity";
import {lastRoom} from "@/Data/LastRoomData";

export default function Learn(){


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