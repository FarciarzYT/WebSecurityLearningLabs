import AltNavbar from "@/components/Base/AltNavbar"
import UserStreak from "@/components/learnDashBoardComponents/UserStreak";
import UserLevel from "@/components/learnDashBoardComponents/UserLevel";
import AltFooter from "@/components/Base/AltFooter"
import {AnimatedBackground} from "@/components/Base/AnimatedBackground";
import BoxOfbadges from "@/components/learnDashBoardComponents/badges/BoxOfBadges"

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
                    <BoxOfbadges/>
                </main>
            </div>
            <AltFooter/>
        </>
    )
}