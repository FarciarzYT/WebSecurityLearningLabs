
import {AnimatedBackground} from "@/components/Base/AnimatedBackground";
import SideNavbar from "@/components/Base/SideNavbar";
import ModulesBoxOfModules from "@/components/learnDashBoardComponents/modules/ModulesBoxOfModules"
import Footer from "@/components/Base/Footer";



export default function Badges(){
    return (
        <>
            <AnimatedBackground/>
            <main className={"flex flex-row justify-center mt-16"}>
                <aside>
                    <SideNavbar/>
                </aside>
                <section className={"flex flex-col"}>
                    <ModulesBoxOfModules />
                </section>
            </main>
            <Footer/>
        </>
    )
}