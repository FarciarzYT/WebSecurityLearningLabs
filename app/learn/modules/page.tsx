
import {AnimatedBackground} from "@/components/Base/AnimatedBackground";
import SideNavbar from "@/components/Base/SideNavbar";
import ModuleBox from "@/components/learnDashBoardComponents/ModulesBox";
import ProgressSection from "@/components/learnDashBoardComponents/ProgressSection";



export default function modules(){
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
            </section>
        </main>
        </>
    )
}